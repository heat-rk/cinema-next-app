export interface Movie {
    id: number;
    title: string;
    titleEnglish: string;
    year: number;
    rating: number;
    genres: string[];
    summary: string;
    descriptionFull: string;
    backgroundImage: string;
    mediumCoverImage: string;
    largeCoverImage: string;
}