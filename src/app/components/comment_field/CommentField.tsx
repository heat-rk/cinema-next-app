import DeleteCommentButton from "./DeleteCommentButton";
import { dateToFullString } from "@/app/utils/ui/DateUtils";
import AvatarImg from "../images/AvatarImg";
import { Comment } from "@/app/modules/movies/domain/comments/Comment";

type Props = {
  comment: Comment;
  handleCommentDelete: () => void;
};

export default function CommentField({ comment, handleCommentDelete }: Props) {
  return (
    <div className="flex flex-row items-center">
      <AvatarImg
        src={comment.authorAvatar}
        alt={comment.authorName}
        className=""
        placeHolderClassName="w-14 h-14 fill-gray-600"
        imgClassName="w-14 h-14"
      />

      <div className="flex-wrap h-full ml-4">
        <div className="text-sm text-gray-500">
          {dateToFullString(comment.datetime)}
        </div>

        <div className="mt-1">{comment.text}</div>

        <DeleteCommentButton
          handleCommentDelete={handleCommentDelete}
          className="w-auto"
        />
      </div>
    </div>
  );
}
