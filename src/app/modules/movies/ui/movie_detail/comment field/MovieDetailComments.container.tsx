"use client";

import { useEffect, useState } from "react";
import MovieDetailCommentsView from "./MovieDetailComments.view";
import { useInjection } from "@/app/page";
import { Comment } from "../../../domain/comments/Comment";

type Props = {
  movieID: number;
};

export default function MovieDetailCommentsContainer(
  { movieID }: Props,
  { commentsRepository = useInjection().getCommentsRepository() },
) {
  const [comments, setComments] = useState<Comment[]>([]);
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
      .saveComment(movieID, enteredComment, new Date().getTime())
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
