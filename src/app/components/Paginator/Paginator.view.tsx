type Props = {
  isFirstPage: boolean;
  isLastPage: boolean;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  limit: number;
};

export default function PaginatorView({
  isFirstPage,
  isLastPage,
  setPage,
  page,
  limit,
}: Props) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-2">
        <button
          onClick={() => setPage((p: number) => p - 1)}
          disabled={isFirstPage}
          className="rounded-lg p-4 bg-gray-900 max-w-screen-xl mx-auto"
        >
          Back
        </button>

        <div>
          {page} / {limit / 2}
        </div>

        <button
          onClick={() => setPage((p: number) => p + 1)}
          disabled={isLastPage}
          className="rounded-lg p-4 bg-gray-900 max-w-screen-xl mx-auto"
        >
          Next
        </button>
      </div>
    </div>
  );
}
