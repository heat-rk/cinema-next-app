"use client";

import { useEffect, useState } from "react";
import MovieDetailCommentsView from "./MovieDetailComments.view";
import { diContainer } from "@/app/pages/_app";
import { CommentEntity } from "../../../data/comments/CommentEntity";

type Props = {
  movieID: number;
};

export default function MovieDetailCommentsContainer({ movieID }: Props) {
  const commentsRepository = diContainer.useCommentsRepository();
  const [comments, setComments] = useState<CommentEntity[]>([]);
  const [enteredComment, setEnteredComment] = useState<string>("");

  useEffect(() => {
    commentsRepository.getComments(movieID)
      .then(comments => setComments(comments));
  }, [movieID]);

  const onCommentSubmit = () => {
    if (enteredComment.trim() === "") {
      return;
    }

    commentsRepository.saveComment(
      movieID,
      enteredComment,
      new Date(),
    ).then(savedComment => {
      commentsRepository.getComments(movieID)
        .then(comments => setComments(comments));
    });

    setEnteredComment("");
  };

  const onCommentDelete = (commentId: number) => {
    commentsRepository.deleteComment(commentId)
      .then(deletedComment => {
        commentsRepository.getComments(movieID)
          .then(comments => setComments(comments));
      });
  };

  const onCommentChange = (
    text: string,
  ) => {
    setEnteredComment(text);
  };

  return (
    <MovieDetailCommentsView
      comments={comments}
      enteredComment={enteredComment}
      onCommentSubmit={onCommentSubmit}
      onCommentChange={onCommentChange}
      onCommentDelete={onCommentDelete}
    />
  );
}
