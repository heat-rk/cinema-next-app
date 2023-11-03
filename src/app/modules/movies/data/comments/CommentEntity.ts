export interface CommentEntity {
    id: number
    movieId: number
    text: string
    datetime: Date
    authorName?: string
    authorAvatar?: string
}