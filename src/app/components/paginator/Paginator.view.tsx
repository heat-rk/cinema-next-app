import Arrow, { ArrowDirection } from "../arrows/Arrow";

type Props = {
  isFirstPage: boolean;
  isLastPage: boolean;
  page: number;
  pagesCount: number;
  onNextPageClick: () => void;
  onPreviousPageClick: () => void;
};

export default function PaginatorView({
  isFirstPage,
  isLastPage,
  page,
  pagesCount,
  onNextPageClick,
  onPreviousPageClick
}: Props) {
  return (
    <div className="flex flex-col">
      <div className="flex gap-2 items-center justify-center">
        <Arrow
          direction={ArrowDirection.Left}
          className={`${isFirstPage ? "invisible" : "visible"} mr-4`}
          onClick={onPreviousPageClick}
        />

        <div>
          {page} / {pagesCount}
        </div>

        <Arrow
          direction={ArrowDirection.Right}
          className={`${isLastPage ? "invisible" : "visible"} ml-4`}
          onClick={onNextPageClick}
        />
      </div>
    </div>
  );
}
