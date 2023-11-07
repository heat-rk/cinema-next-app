import { Comment } from "./Comment";

export interface CommentsRepository {
  getComments(movieId: number): Promise<Comment[]>;

  saveComment(
    movieId: number,
    text: string,
    datetime: number,
    authorName?: string,
    authorAvatar?: string,
  ): Promise<Comment>;

  deleteComment(id: number): Promise<Comment>;
}
