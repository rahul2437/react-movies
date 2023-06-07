import { useEffect, useState } from "react";
import { landingPageDTO } from "../Interface/Movies.model";
import MovieList from "./Movies/MovieList";

const LandingPage = () => {
  const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setMovies({
        intheatresMovies: [
          {
            id: 1,
            title: "Spider-man Across the Spider-Verse",
            poster: "https://www.cinematerial.com/media/box-office/9362722.jpg",
          },
          {
            id: 2,
            title: "Little Mermaid",
            poster: "https://www.cinematerial.com/media/box-office/5971474.jpg",
          },
          {
            id: 3,
            title: "Fast-X",
            poster: "https://www.cinematerial.com/media/box-office/5433140.jpg",
          },
          {
            id: 4,
            title: "Boogey-Man",
            poster: "https://www.cinematerial.com/media/box-office/3427252.jpg",
          },
        ],
        upcomingMovies: [
          {
            id: 1,
            title: "John Wick: Chapter 4",
            poster:
              "https://cdn.cinematerial.com/p/136x/492q75ky/john-wick-chapter-4-movie-poster-sm.jpg?v=1686035890",
          },
        ],
      });
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div>
      <h1 className="text-3xl font-bold">Now Showing</h1>
      <MovieList movies={movies.intheatresMovies} />
      <h1 className="text-3xl font-bold">Upcoming Releases</h1>
      <MovieList movies={movies.upcomingMovies} />
    </div>
  );
};

export default LandingPage;
