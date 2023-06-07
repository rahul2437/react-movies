export interface movieDTO {
  id: number;
  title: string;
  poster: string;
}

export interface landingPageDTO {
  intheatresMovies?: movieDTO[];
  upcomingMovies?: movieDTO[];
}
