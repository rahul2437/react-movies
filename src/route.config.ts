import CreateActor from "./Components/Actors/CreateActor";
import EditActor from "./Components/Actors/EditActor";
import IndexActor from "./Components/Actors/IndexActor";
import CreateGenres from "./Components/Genres/CreateGenres";
import EditGenres from "./Components/Genres/EditGenres";
import IndexGenres from "./Components/Genres/IndexGenres";
import LandingPage from "./Components/LandingPage";
import CreateMovieTheatres from "./Components/MovieTheatres/CreateMovieTheatres";
import EditMovieTheatres from "./Components/MovieTheatres/EditMovieTheatres";
import IndexMovieTheatres from "./Components/MovieTheatres/IndexMovieTheatres";
import CreateMovie from "./Components/Movies/CreateMovie";
import EditMovie from "./Components/Movies/EditMovie";
import FilterMovies from "./Components/Movies/FilterMovies";
import PageNotFound from "./Components/PageNotFound";

const routes = [
  { path: "/", element: LandingPage },

  { path: "/genres", element: IndexGenres },
  { path: "/genres/create", element: CreateGenres },
  { path: "/genres/edit/:id", element: EditGenres },

  { path: "/actors", element: IndexActor },
  { path: "/actors/create", element: CreateActor },
  { path: "/actors/edit/:id", element: EditActor },

  { path: "/movietheatres", element: IndexMovieTheatres },
  { path: "/movietheatres/create", element: CreateMovieTheatres },
  { path: "/movietheatres/edit/:id", element: EditMovieTheatres },

  { path: "/movies/create", element: CreateMovie },
  { path: "/movies/edit/:id", element: EditMovie },
  { path: "/movies/filter", element: FilterMovies },

  { path: "*", element: PageNotFound },
];

export default routes;
