"use client";

import { useEffect, useState } from "react";
import DynamicPageCommentFieldView from "./DynamicPageCommentField.view";

type Props = {
  movieID: number;
};

export default function DynamicPageCommentFieldContainer({ movieID }: Props) {
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
    <DynamicPageCommentFieldView
      comments={comments}
      handleSubmit={addComment}
      handleCommentChange={handleCommentChange}
      handleCommentDelete={deleteComment}
    />
  );
}
