export interface CommentEntity {
  id: number;
  movieId: number;
  text: string;
  datetime: string;
  authorName?: string;
  authorAvatar?: string;
}
