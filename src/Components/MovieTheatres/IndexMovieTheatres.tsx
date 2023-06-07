import { Link } from "react-router-dom";
import CustomButton from "../utils/Button";

const IndexMovieTheatres = () => {
  return (
    <div>
      <Link to={"/movietheatres/create"}>
        <CustomButton color="dark">Create Movie Theatre</CustomButton>
      </Link>
      <h3>Index Movie Theatres</h3>
    </div>
  );
};

export default IndexMovieTheatres;
