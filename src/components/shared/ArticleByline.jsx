export default function ArticleByline({ author = 'سحر', date }) {
  return (
    <div className="flex items-center gap-3 text-xs text-foreground/50 mt-3 mb-1">
      <span>نویسنده: {author}</span>
      {date && <span>· به‌روزرسانی: {date}</span>}
    </div>
  );
}
