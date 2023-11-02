"use client";

import { useEffect, useState } from "react";
import MovieDetailCommentsView from "./MovieDetailComments.view";

type Props = {
  movieID: number;
};

export default function MovieDetailCommentsContainer({ movieID }: Props) {
  const [comments, setComments] = useState<string[]>([]);
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem("comments") || "{}");
    if (storedComments[movieID]) {
      setComments(storedComments[movieID]);
    }
  }, [movieID]);

  const addComment = () => {
    if (commentText.trim() === "") {
      return;
    }
    const updatedComments = [...comments, commentText];
    setComments(updatedComments);
    updateLocalStorageComments(movieID, updatedComments);
    setCommentText("");
  };

  const deleteComment = (index: number) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
    updateLocalStorageComments(movieID, updatedComments);
  };

  const updateLocalStorageComments = (
    movieID: number,
    updatedComments: string[],
  ) => {
    const commentsFromLocalStorage = JSON.parse(
      localStorage.getItem("comments") || "{}",
    );
    commentsFromLocalStorage[movieID] = updatedComments;
    localStorage.setItem("comments", JSON.stringify(commentsFromLocalStorage));
  };

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setCommentText(event.target.value);
  };

  return (
    <MovieDetailCommentsView
      comments={comments}
      handleSubmit={addComment}
      handleCommentChange={handleCommentChange}
      handleCommentDelete={deleteComment}
    />
  );
}
