import { Link } from "react-router-dom";
import CustomButton from "../utils/Button";

const IndexGenres = () => {
  return (
    <div>
      <Link to={"/genres/create"}>
        <CustomButton color="dark">Create Genre</CustomButton>
      </Link>
      <h3 className="text-2xl">IndexGenres</h3>
    </div>
  );
};

export default IndexGenres;
