"use client";

import PaginatorView from "./Paginator.view";

type Props = {
  page: number;
  route: string;
  pagesCount: number;
};

export default function PaginatorContainer({ page, route, pagesCount }: Props) {
  const isFirstPage = page == 1;
  const isLastPage = page == pagesCount;

  return (
    <PaginatorView
      isFirstPage={isFirstPage}
      isLastPage={isLastPage}
      page={page}
      pagesCount={pagesCount}
      previousPageRoute={`${route}?page=${Math.max(1, page - 1)}`}
      nextPageRoute={`${route}?page=${Math.min(page + 1, pagesCount)}`}
    />
  );
}
