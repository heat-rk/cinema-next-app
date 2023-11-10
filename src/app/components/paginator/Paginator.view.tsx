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
  previousPageRoute,
}: Props) {
  const arrowPlaceholder = <div className="mr-8 w-16 h-14" />;

  return (
    <div className="flex flex-col">
      <div className="flex gap-2 items-center justify-center">
        {isFirstPage ? (
          arrowPlaceholder
        ) : (
          <Link href={previousPageRoute}>
            <Arrow direction={ArrowDirection.Left} className={"mr-8"} />
          </Link>
        )}

        <div>
          {page} / {pagesCount}
        </div>

        {isLastPage ? (
          arrowPlaceholder
        ) : (
          <Link href={nextPageRoute}>
            <Arrow direction={ArrowDirection.Right} className={"ml-8"} />
          </Link>
        )}
      </div>
    </div>
  );
}
