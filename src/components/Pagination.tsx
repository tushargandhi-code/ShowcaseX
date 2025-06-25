
export default function Pagination({
  page,
  max,
  setPage,
}: {
  page: number;
  max: number;
  setPage: (n: number) => void;
}) {
  return (
    <div className="flex gap-2 mt-8 items-center justify-center">
      <button
        onClick={() => setPage(Math.max(1, page - 1))}
        disabled={page === 1}
        className="px-3 py-1 rounded border text-sm disabled:opacity-40"
      >
        Prev
      </button>
      <span className="text-sm">
        {page} / {max}
      </span>
      <button
        onClick={() => setPage(Math.min(max, page + 1))}
        disabled={page === max}
        className="px-3 py-1 rounded border text-sm disabled:opacity-40"
      >
        Next
      </button>
    </div>
  );
}
