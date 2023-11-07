"use client";

import CommentField from "@/app/components/comment_field/CommentField";
import { Comment } from "../../../domain/comments/Comment";

type Props = {
  comments: Comment[];
  enteredComment: string;
  onCommentSubmit: () => void;
  onCommentChange: (text: string) => void;
  onCommentDelete: (id: number) => void;
};

export default function MovieDetailCommentsView({
  comments,
  enteredComment,
  onCommentSubmit: handleSubmit,
  onCommentChange: handleCommentChange,
  onCommentDelete: handleCommentDelete,
}: Props) {
  return (
    <div className="bg-gray-900 p-8 rounded-lg shadow-md mt-4">
      <h2 className="text-2xl font-semibold text-white mb-2">
        Leave a Comment
      </h2>
      <div className="mb-4">
        <label className="text-gray-400 text-lg">Your Comment</label>
        <textarea
          rows={4}
          value={enteredComment}
          className="w-full bg-gray-800 text-white p-2 rounded-md mt-4"
          onChange={(event) => handleCommentChange(event.target.value)}
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Submit
      </button>

      {comments.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-white">Comments</h2>
          <ul className="text-gray-400 mt-2">
            {comments.map((comment, index) => (
              <li key={index}>
                <CommentField
                  comment={comment}
                  handleCommentDelete={() => {
                    handleCommentDelete(comment.id);
                  }}
                />
                <hr />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
