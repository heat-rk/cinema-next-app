import { useRouter } from "next/navigation";
import Arrow, { ArrowDirection } from "../arrows/Arrow";

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
    <div className="flex flex-col">
      <div className="flex gap-2 items-center justify-center">
        <Arrow
          direction={ArrowDirection.Left}
          className={`${isFirstPage ? "invisible" : "visible"} mr-4`}
          onClick={() => router.push(`${route}?page=${Math.max(1, page - 1)}`)}
        />

        <div>
          {page} / {pagesCount}
        </div>

        <Arrow
          direction={ArrowDirection.Right}
          className={`${isLastPage ? "invisible" : "visible"} ml-4`}
          onClick={() =>
            router.push(`${route}?page=${Math.min(page + 1, pagesCount)}`)
          }
        />
      </div>
    </div>
  );
}
