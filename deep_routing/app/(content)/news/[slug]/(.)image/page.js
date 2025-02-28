import { DUMMY_NEWS } from "@/dummy-news";
export default function InterceptedImagePage({ params }) {
  const currentSlug = params.slug;
  const newsDetail = DUMMY_NEWS.find((e) => e.slug === currentSlug);
  if (!newsDetail) {
    notFound();
  }
  return (
    <>
      <div className="modal-backdrop" />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img
            src={`/images/news/${newsDetail.image}`}
            alt={newsDetail.title}
          />
        </div>
      </dialog>
    </>
  );
}
