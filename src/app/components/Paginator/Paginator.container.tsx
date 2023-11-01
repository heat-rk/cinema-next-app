"use client";

import PaginatorView from "./Paginator.view";

type Props = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
};

export default function PaginatorContainer({ page, setPage, limit }: Props) {
  const isFirstPage = page === 1;
  const isLastPage = page >= limit / 2;
  return (
    <PaginatorView
      isFirstPage={isFirstPage}
      isLastPage={isLastPage}
      setPage={setPage}
      page={page}
      limit={limit}
    />
  );
}
