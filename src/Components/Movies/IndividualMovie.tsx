import { movieDTO } from "../../Interface/Movies.model";

const IndividualMovie = (props: movieDTO) => {
  const linkBuilder = () => `/movie/${props.id}`;

  return (
    <div className="m-2 w-48">
      <a href={linkBuilder()}>
        <img width={"180px"} src={props.poster} alt="Poster" />
      </a>
      <div>
        <a href={linkBuilder()}>{props.title}</a>
      </div>
    </div>
  );
};

export default IndividualMovie;
