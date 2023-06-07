import { movieDTO } from "../../Interface/Movies.model";
import GenericList from "../GenericList";
import IndividualMovie from "./IndividualMovie";

const MovieList = (props: movieListProps) => {
  return (
    <GenericList list={props.movies}>
      <div className="flex flex-wrap gap-1">
        {props.movies?.map((movie: movieDTO) => (
          <IndividualMovie key={movie.id} {...movie} />
        ))}
      </div>
    </GenericList>
  );
};

interface movieListProps {
  movies?: movieDTO[];
}

export default MovieList;
