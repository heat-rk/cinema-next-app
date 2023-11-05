export interface CommentEntity {
  id: number;
  movieId: number;
  text: string;
  datetime: number;
  authorName?: string;
  authorAvatar?: string;
}
