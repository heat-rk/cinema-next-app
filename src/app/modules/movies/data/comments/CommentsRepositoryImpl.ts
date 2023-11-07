import { Comment } from "../../domain/comments/Comment";
import { CommentsRepository } from "../../domain/comments/CommentsRepository";
import mapCommentDtoToDomain from "../../mappers/CommentMappers";
import { CommentEntity } from "./CommentEntity";

export class CommentsRepositoryImpl implements CommentsRepository {
  async getComments(movieId: number): Promise<Comment[]> {
    return this.getAllComments()
      .then((allComments) =>
        allComments.filter((comment) => comment.movieId == movieId),
      )
      .then((movieComments) =>
        movieComments.sort((a, b) => (a.datetime > b.datetime ? -1 : 1)),
      )
      .then((sortedMovieComments) => 
        sortedMovieComments.map(movieEntity => 
          mapCommentDtoToDomain(movieEntity)
        ),
      );
  }

  async saveComment(
    movieId: number,
    text: string,
    datetime: number,
    authorName?: string | undefined,
    authorAvatar?: string | undefined,
  ): Promise<Comment> {
    return this.getAllComments().then((allComments) => {
      const foundId = allComments.at(-1)?.id;

      const newComment: CommentEntity = {
        id: foundId != undefined ? foundId + 1 : 0,
        movieId: movieId,
        text: text,
        datetime: datetime,
        authorName: authorName,
        authorAvatar: authorAvatar,
      };

      const newComments = [...allComments, newComment];

      this.saveNewComments(newComments);

      return mapCommentDtoToDomain(newComment);
    });
  }

  async deleteComment(id: number): Promise<Comment> {
    return this.getAllComments().then((allComments) => {
      const indexToDelete = allComments.findIndex((item) => item.id == id);

      const itemToDelete = allComments[indexToDelete];

      if (indexToDelete != -1) {
        allComments.splice(indexToDelete, 1);
        this.saveNewComments(allComments);
      }

      return mapCommentDtoToDomain(itemToDelete);
    });
  }

  private async getAllComments(): Promise<CommentEntity[]> {
    return await JSON.parse(localStorage.getItem("comments") || "[]");
  }

  private async saveNewComments(comments: CommentEntity[]) {
    localStorage.setItem("comments", JSON.stringify(comments));
  }
}
