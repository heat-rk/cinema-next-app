import DeleteCommentButton from "./DeleteCommentButton";

type Props = {
    comment: string;
    index: number;
    handleCommentDelete: (e: number) => void;
};

export default function CommentField(
    {
        comment,
        index, 
        handleCommentDelete,
    } : Props
) {
    return <div className="flex flex-col">
        {comment}

        <DeleteCommentButton
            index={index}
            handleCommentDelete={handleCommentDelete}
            className="w-0"
        />
    </div>
}


