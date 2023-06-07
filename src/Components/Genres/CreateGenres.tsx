import GenreForm from "./GenreForm";

const CreateGenres = () => {
  return (
    <div className="flex flex-col gap-1 w-1/2 mx-auto">
      <GenreForm
        model={{ name: "" }}
        onSubmit={async (value) => {
          await new Promise((r) => setTimeout(r, 3));
          console.log(value);
        }}
      />
    </div>
  );
};

export default CreateGenres;
