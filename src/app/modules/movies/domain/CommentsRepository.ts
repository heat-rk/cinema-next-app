import { CommentEntity } from "../data/comments/CommentEntity";

export interface CommentsRepository {
  getComments(movieId: number): Promise<CommentEntity[]>;

  saveComment(
    movieId: number,
    text: string,
    datetime: string,
    authorName?: string,
    authorAvatar?: string,
  ): Promise<CommentEntity>;

  deleteComment(id: number): Promise<CommentEntity>;
}
