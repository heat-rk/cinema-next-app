type Props = {
  handleCommentDelete: () => void;
  className: string;
};

export default function DeleteCommentButton({
  handleCommentDelete,
  className,
}: Props) {
  return (
    <button
      className={`text-red-500 cursor-pointer ${className}`}
      onClick={handleCommentDelete}
    >
     Удалить
    </button>
  );
}
