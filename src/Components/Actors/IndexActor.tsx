import { Link } from "react-router-dom";
import CustomButton from "../utils/Button";

const IndexActor = () => {
  return (
    <div>
      <Link to={"/actors/create"}>
        <CustomButton color="dark">Create Actors</CustomButton>
      </Link>
      <h3 className="text-2xl">IndexActors</h3>
    </div>
  );
};

export default IndexActor;
