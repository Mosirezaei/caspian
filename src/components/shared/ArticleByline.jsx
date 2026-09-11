export default function ArticleByline({ author = 'سحر', date }) {
  const displayDate = date === '۱۴۰۴/۰۶/۲۰' ? '۱۴۰۵/۰۶/۲۰' : date;

  return (
    <div className="flex items-center gap-3 text-xs text-foreground/50 mt-3 mb-1">
      <span>نویسنده: {author}</span>
      {displayDate && <span>· به‌روزرسانی: {displayDate}</span>}
    </div>
  );
}
