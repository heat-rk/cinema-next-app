import { CommentEntity } from "../data/comments/CommentEntity";
import { Comment } from "../domain/comments/Comment";

export default function mapCommentDtoToDomain(
  commentEntity: CommentEntity,
): Comment {
  return {
    id: commentEntity.id,
    movieId: commentEntity.movieId,
    text: commentEntity.text,
    datetime: new Date(commentEntity.datetime),
    authorName: commentEntity.authorName,
    authorAvatar: commentEntity.authorAvatar,
  };
}
