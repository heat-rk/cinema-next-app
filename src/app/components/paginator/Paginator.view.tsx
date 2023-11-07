import Link from "next/link";
import Arrow, { ArrowDirection } from "../arrows/Arrow";

type Props = {
  isFirstPage: boolean;
  isLastPage: boolean;
  page: number;
  pagesCount: number;
  nextPageRoute: string;
  previousPageRoute: string;
};

export default function PaginatorView({
  isFirstPage,
  isLastPage,
  page,
  pagesCount,
  nextPageRoute,
  previousPageRoute
}: Props) {
  return (
    <div className="flex flex-col">
      <div className="flex gap-2 items-center justify-center">
        <Link href={previousPageRoute}>
          <Arrow
            direction={ArrowDirection.Left}
            className={`${isFirstPage ? "invisible" : "visible"} mr-4`}
          />
        </Link>

        <div>
          {page} / {pagesCount}
        </div>

        <Link href={nextPageRoute}>
          <Arrow
            direction={ArrowDirection.Right}
            className={`${isLastPage ? "invisible" : "visible"} ml-4`}
          />
        </Link>
      </div>
    </div>
  );
}
