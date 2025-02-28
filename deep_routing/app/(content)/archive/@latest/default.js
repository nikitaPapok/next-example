import { NewsList } from "@/components/main/news-list";
import { getLatestNews } from "@/utils/news";

export default function LatestPage() {
  const latest = getLatestNews();
  return (
    <>
      <h2>Latest Page</h2>
      <NewsList news={latest} />
    </>
  );
}
