"use client";

import { useRouter } from "next/navigation";
import PaginatorView from "./Paginator.view";

type Props = {
  page: number;
  route: string;
  pagesCount: number;
};

export default function PaginatorContainer({ page, route, pagesCount }: Props) {
  const router = useRouter();

  const isFirstPage = page == 1;
  const isLastPage = page == pagesCount;
  
  return (
    <PaginatorView
      isFirstPage={isFirstPage}
      isLastPage={isLastPage}
      page={page}
      pagesCount={pagesCount}
      onNextPageClick={() => router.push(`${route}?page=${Math.min(page + 1, pagesCount)}`)}
      onPreviousPageClick={() => router.push(`${route}?page=${Math.max(1, page - 1)}`)}
    />
  );
}
