
import { useState } from 'react';

export function usePagination<T>(items: T[], perPage = 12) {
  const [page, setPage] = useState(1);
  const max = Math.ceil(items.length / perPage);
  const slice = items.slice((page - 1) * perPage, page * perPage);
  return { slice, page, max, setPage };
}
