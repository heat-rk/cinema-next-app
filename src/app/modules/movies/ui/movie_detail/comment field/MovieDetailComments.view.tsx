"use client";

import CommentField from "@/app/components/comment_field/CommentField";

type Props = {
  comments: string[];
  handleSubmit: () => void;
  handleCommentChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleCommentDelete: (index: number) => void;
};

export default function MovieDetailCommentsView({
  comments,
  handleSubmit,
  handleCommentChange,
  handleCommentDelete,
}: Props) {
  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-2xl font-semibold text-white mb-2">
        Leave a Comment
      </h2>
      <div className="mb-4">
        <label className="text-white">Your Comment</label>
        <textarea
          rows={4}
          className="w-full bg-gray-800 text-white p-2 rounded-md"
          onChange={handleCommentChange}
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Submit
      </button>

      {comments.length > 0 && (
        <div className="mt-4">
          <h2 className="text-2xl font-semibold text-white">Comments</h2>
          <ul className="text-gray-400">
            {comments.map((comment, index) => (
              <li key={index}>
                <CommentField
                  comment={comment}
                  index={index}
                  handleCommentDelete={handleCommentDelete}/>

                <hr/>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
