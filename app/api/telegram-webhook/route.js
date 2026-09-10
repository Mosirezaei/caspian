import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// The name shown next to a Telegram reply on the site. There's only one
// admin using the bot today; if that changes, this can become a lookup by
// Telegram user id instead of a single constant.
const ADMIN_NAME = 'سحر';

function getSupabase() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  return createClient(supabaseUrl, supabaseKey);
}

async function callTelegram(method, payload) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const res = await fetch(`https://api.telegram.org/bot${botToken}/${method}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return res.json();
}

// Builds the right inline keyboard for a comment's current state. Used both
// right after an action (approve/reply/delete-reply) and to restore the
// keyboard when the admin cancels a delete confirmation.
function keyboardFor(status, hasReply) {
  if (status === 'pending') {
    return [[{ text: '✅ تایید', callback_data: 'approve' }, { text: '❌ رد', callback_data: 'reject' }]];
  }
  if (status === 'rejected') {
    return [[{ text: '🗑 حذف نظر', callback_data: 'ask_delete' }]];
  }
  // approved
  const row1 = hasReply
    ? [{ text: '✏️ ویرایش پاسخ', callback_data: 'reply' }, { text: '🗑 حذف پاسخ', callback_data: 'del_reply' }]
    : [{ text: '✍️ پاسخ به این نظر', callback_data: 'reply' }];
  return [row1, [{ text: '🗑 حذف نظر', callback_data: 'ask_delete' }]];
}

// One-time setup helper: visit
//   https://caspian.am/api/telegram-webhook?key=<TELEGRAM_WEBHOOK_SECRET>
// once after deploy (or after rotating the bot token) to (re)register this
// route as the bot's webhook. Gated by the same secret so a random visitor
// can't repoint the bot's webhook elsewhere.
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get('key');
  if (!key || key !== process.env.TELEGRAM_WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const res = await fetch(`https://api.telegram.org/bot${botToken}/setWebhook`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      url: 'https://caspian.am/api/telegram-webhook',
      secret_token: process.env.TELEGRAM_WEBHOOK_SECRET,
      allowed_updates: ['message', 'callback_query'],
    }),
  });
  const data = await res.json();
  return NextResponse.json(data);
}

// Receives Telegram updates for the full moderation flow:
//
//  Pending  -> ✅ تایید | ❌ رد
//  Approved (no reply) -> ✍️ پاسخ به این نظر | 🗑 حذف نظر
//  Approved (has reply) -> ✏️ ویرایش پاسخ | 🗑 حذف پاسخ | 🗑 حذف نظر
//  Rejected -> 🗑 حذف نظر
//
// "حذف نظر" goes through a one-tap confirm step (ask_delete -> confirm/cancel)
// since it permanently deletes the row (question + reply, if any). "حذف پاسخ"
// only clears the reply and needs no confirmation -- the comment itself
// stays live and can just be answered again.
//
// Replies are matched via reply_prompt_message_id (see set/reply RPCs), not
// Telegram's native reply-to-original, so multiple comments can be answered
// in any order without mixing them up.
export async function POST(request) {
  const secretHeader = request.headers.get('x-telegram-bot-api-secret-token');
  if (secretHeader !== process.env.TELEGRAM_WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  const update = await request.json();
  const supabase = getSupabase();
  const secret = process.env.TELEGRAM_WEBHOOK_SECRET;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  try {
    if (update.callback_query) {
      const cq = update.callback_query;
      const messageId = cq.message?.message_id;
      const baseText = (cq.message?.text || '').replace(/\n\n(✅ منتشر شد|❌ رد شد|🗑 حذف شد)$/, '');

      if (cq.data === 'approve' || cq.data === 'reject') {
        const action = cq.data === 'approve' ? 'approved' : 'rejected';
        await supabase.rpc('moderate_page_comment', {
          p_telegram_message_id: messageId,
          p_action: action,
          p_secret: secret,
        });

        const suffix = action === 'approved' ? '✅ منتشر شد' : '❌ رد شد';
        await callTelegram('editMessageText', {
          chat_id: chatId, message_id: messageId, text: `${baseText}\n\n${suffix}`, parse_mode: 'HTML',
        });
        await callTelegram('editMessageReplyMarkup', {
          chat_id: chatId, message_id: messageId,
          reply_markup: { inline_keyboard: keyboardFor(action, false) },
        });
        await callTelegram('answerCallbackQuery', {
          callback_query_id: cq.id, text: action === 'approved' ? 'تایید شد' : 'رد شد',
        });
      } else if (cq.data === 'reply') {
        const prompt = await callTelegram('sendMessage', {
          chat_id: chatId,
          reply_to_message_id: messageId,
          text: '✍️ پاسخ‌تون رو همین‌جا بنویسید:',
          reply_markup: { force_reply: true, selective: true },
        });
        const promptMessageId = prompt?.result?.message_id;
        if (promptMessageId) {
          await supabase.rpc('set_reply_prompt_message_id', {
            p_telegram_message_id: messageId,
            p_prompt_message_id: promptMessageId,
            p_secret: secret,
          });
        }
        await callTelegram('answerCallbackQuery', { callback_query_id: cq.id });
      } else if (cq.data === 'del_reply') {
        await supabase.rpc('delete_comment_reply', {
          p_telegram_message_id: messageId,
          p_secret: secret,
        });
        await callTelegram('editMessageReplyMarkup', {
          chat_id: chatId, message_id: messageId,
          reply_markup: { inline_keyboard: keyboardFor('approved', false) },
        });
        await callTelegram('answerCallbackQuery', { callback_query_id: cq.id, text: 'پاسخ حذف شد' });
      } else if (cq.data === 'ask_delete') {
        await callTelegram('editMessageReplyMarkup', {
          chat_id: chatId, message_id: messageId,
          reply_markup: { inline_keyboard: [[
            { text: '⚠️ بله، کامل حذف کن', callback_data: 'confirm_delete' },
            { text: '↩️ انصراف', callback_data: 'cancel_delete' },
          ]] },
        });
        await callTelegram('answerCallbackQuery', { callback_query_id: cq.id });
      } else if (cq.data === 'confirm_delete') {
        await supabase.rpc('delete_page_comment', {
          p_telegram_message_id: messageId,
          p_secret: secret,
        });
        await callTelegram('editMessageText', {
          chat_id: chatId, message_id: messageId, text: `${baseText}\n\n🗑 حذف شد`, parse_mode: 'HTML',
        });
        await callTelegram('editMessageReplyMarkup', {
          chat_id: chatId, message_id: messageId, reply_markup: { inline_keyboard: [] },
        });
        await callTelegram('answerCallbackQuery', { callback_query_id: cq.id, text: 'حذف شد' });
      } else if (cq.data === 'cancel_delete') {
        const { data: rows } = await supabase.rpc('get_comment_status', {
          p_telegram_message_id: messageId,
          p_secret: secret,
        });
        const row = rows?.[0];
        await callTelegram('editMessageReplyMarkup', {
          chat_id: chatId, message_id: messageId,
          reply_markup: { inline_keyboard: keyboardFor(row?.status || 'pending', row?.has_reply || false) },
        });
        await callTelegram('answerCallbackQuery', { callback_query_id: cq.id });
      }
    } else if (update.message?.reply_to_message) {
      const replyText = update.message.text;
      const promptMessageId = update.message.reply_to_message.message_id;

      if (replyText) {
        const { data: telegramMessageId } = await supabase.rpc('reply_page_comment_by_prompt', {
          p_prompt_message_id: promptMessageId,
          p_reply: replyText,
          p_admin_name: ADMIN_NAME,
          p_secret: secret,
        });

        if (telegramMessageId) {
          await callTelegram('editMessageReplyMarkup', {
            chat_id: chatId, message_id: telegramMessageId,
            reply_markup: { inline_keyboard: keyboardFor('approved', true) },
          });
          await callTelegram('sendMessage', {
            chat_id: chatId,
            reply_to_message_id: update.message.message_id,
            text: '✅ جواب ثبت و منتشر شد',
          });
        } else {
          // A reply to a consultation notification is not a public site
          // answer. Only the force-reply prompt created by the “reply to
          // this comment” button has a matching database record.
          await callTelegram('sendMessage', {
            chat_id: chatId,
            reply_to_message_id: update.message.message_id,
            text: 'ℹ️ این پیام به پرسش سایت وصل نبود و منتشر نشد. برای پاسخ به یک پرسش، ابتدا دکمه «✍️ پاسخ به این نظر» را بزنید و سپس به پیام درخواست‌شده پاسخ دهید.',
          });
        }
      }
    }
  } catch (error) {
    console.error('telegram-webhook error:', error);
  }

  // Telegram just needs a fast 200 -- it doesn't care about the body.
  return NextResponse.json({ ok: true });
}
