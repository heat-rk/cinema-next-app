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
      route={route}
      page={page}
      pagesCount={pagesCount}
    />
  );
}
