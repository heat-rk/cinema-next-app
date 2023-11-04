"use client";

import { useEffect, useState } from "react";
import MovieDetailCommentsView from "./MovieDetailComments.view";
import { CommentEntity } from "../../../data/comments/CommentEntity";
import { useInjection } from "@/app/pages/_app";

type Props = {
  movieID: number;
};

export default function MovieDetailCommentsContainer({ movieID }: Props) {
  const commentsRepository = useInjection().getCommentsRepository();
  const [comments, setComments] = useState<CommentEntity[]>([]);
  const [enteredComment, setEnteredComment] = useState<string>("");

  useEffect(() => {
    commentsRepository
      .getComments(movieID)
      .then((comments) => setComments(comments));
  }, [movieID]);

  const onCommentSubmit = () => {
    if (enteredComment.trim() === "") {
      return;
    }

    commentsRepository
      .saveComment(movieID, enteredComment, new Date())
      .then(() => {
        commentsRepository
          .getComments(movieID)
          .then((comments) => setComments(comments));
      });

    setEnteredComment("");
  };

  const onCommentDelete = (commentId: number) => {
    commentsRepository.deleteComment(commentId).then(() => {
      commentsRepository
        .getComments(movieID)
        .then((comments) => setComments(comments));
    });
  };

  const onCommentChange = (text: string) => {
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
