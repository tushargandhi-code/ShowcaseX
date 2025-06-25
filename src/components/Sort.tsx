
type SortKey = 'price' | 'title' | 'rating';

export default function Sort({
  sort,
  setSort,
}: {
  sort: SortKey;
  setSort: (k: SortKey) => void;
}) {
  return (
    <select
      value={sort}
      onChange={(e) => setSort(e.target.value as SortKey)}
      className="border rounded px-3 py-2 text-sm"
    >
      <option value="price">Price (Low→High)</option>
      <option value="title">Name (A→Z)</option>
      <option value="rating">Rating (High→Low)</option>
    </select>
  );
}
