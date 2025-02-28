import Link from "next/link";

export function NewsList({ news }) {
  return (
    <ul className="news-list">
      {news.map((currentNews) => (
        <li id={currentNews.id}>
          <Link href={`/news/${currentNews.slug}`}>
            <img
              src={`/images/news/${currentNews.image}`}
              alt={currentNews.title}
            />
            <p>{currentNews.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
