import { Navigate, useParams } from "react-router-dom";
import GenreForm from "./GenreForm";

const EditGenres = () => {
  const { id }: any = useParams();

  if (isNaN(id)) return <Navigate to={"/"} replace />;

  return (
    <div>
      EditGenres of id {id}
      <GenreForm
        model={{ name: "Current value" }}
        onSubmit={async (value) => {
          await new Promise((r) => setTimeout(r, 1000));
          console.log(id);
          console.log(value);
        }}
      />
    </div>
  );
};

export default EditGenres;
