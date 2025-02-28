import { NewsList } from "@/components/main/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/utils/news";
import Link from "next/link";

export default function FilteredNewsPage({ params }) {
  const filter = params.filter;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];
  let news;
  let links = getAvailableNewsYears();
  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  let newsContent = <p>Pick the date please</p>;
  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }
  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return (
    <>
      {" "}
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              let href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
  s;
  // return <NewsList news={news} />;
}
