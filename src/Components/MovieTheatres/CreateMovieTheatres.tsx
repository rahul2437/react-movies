import MovieTheatreForm from "./MovieTheatreForm";

const CreateMovieTheatres = () => {
  return (
    <div>
      <MovieTheatreForm
        model={{ name: "" }}
        onSubmit={async (value) => {
          await new Promise((r) => setTimeout(r, 3));
          console.log(value);
        }}
      />
    </div>
  );
};

export default CreateMovieTheatres;
