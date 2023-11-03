import { CommentEntity } from "@/app/modules/movies/data/comments/CommentEntity";
import DeleteCommentButton from "./DeleteCommentButton";

type Props = {
    comment: CommentEntity;
    handleCommentDelete: () => void;
};

export default function CommentField(
    {
        comment,
        handleCommentDelete,
    } : Props
) {
    return <div className="flex flex-col">
        {comment.text}

        <DeleteCommentButton
            handleCommentDelete={handleCommentDelete}
            className="w-0"
        />
    </div>
}


