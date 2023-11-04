import { useRouter } from "next/navigation";

type Props = {
  isFirstPage: boolean;
  isLastPage: boolean;
  route: string;
  page: number;
  pagesCount: number;
};

export default function PaginatorView({
  isFirstPage,
  isLastPage,
  route,
  page,
  pagesCount,
}: Props) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-2">
        <button
          onClick={() => router.push(`${route}?page=${Math.max(1, page - 1)}`)}
          disabled={isFirstPage}
          className="rounded-lg p-4 bg-gray-900 max-w-screen-xl mx-auto"
        >
          Back
        </button>

        <div>
          {page} / {pagesCount}
        </div>

        <button
          onClick={() =>
            router.push(`${route}?page=${Math.min(page + 1, pagesCount)}`)
          }
          disabled={isLastPage}
          className="rounded-lg p-4 bg-gray-900 max-w-screen-xl mx-auto"
        >
          Next
        </button>
      </div>
    </div>
  );
}
