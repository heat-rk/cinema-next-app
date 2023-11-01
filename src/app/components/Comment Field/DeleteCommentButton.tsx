type Props = {
  index: number;
  handleCommentDelete: (e: number) => void;
  className: string;
};

export default function DeleteCommentButton({
  index,
  handleCommentDelete,
  className,
}: Props) {
  return (
    <button
      className={`text-red-500 cursor-pointer ${className}`}
      onClick={() => handleCommentDelete(index)}
    >
     Удалить
    </button>
  );
}
