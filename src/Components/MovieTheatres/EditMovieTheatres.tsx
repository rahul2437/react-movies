import MovieTheatreForm from "./MovieTheatreForm";

const EditMovieTheatres = () => {
  return (
    <div>
      <MovieTheatreForm
        model={{ name: "Inox" }}
        onSubmit={async (value) => {
          await new Promise((r) => setTimeout(r, 3));
          console.log(value);
        }}
      />
    </div>
  );
};

export default EditMovieTheatres;
