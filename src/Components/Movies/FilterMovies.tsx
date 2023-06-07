import { Field, Form, Formik } from "formik";
import { genreDTO } from "../../Interface/Genre.model";
import { Button } from "flowbite-react";

const FilterMovies = () => {
  const initValues: filterMoviesForm = {
    title: "",
    genreID: 0,
    nowShowing: false,
    upComingReleases: false,
  };

  const genres: genreDTO[] = [
    { id: 1, name: "Drama" },
    { id: 2, name: "Action" },
    { id: 3, name: "Thriller" },
    { id: 4, name: "Sci-Fi" },
  ];

  return (
    <div>
      <h3>Filter Movies</h3>
      <Formik
        initialValues={initValues}
        onSubmit={(value) => {
          console.log(value);
        }}
      >
        {(formikProps) => (
          <Form>
            <div className="flex gap-2 items-center">
              <div>
                <input
                  type="text"
                  id="title"
                  placeholder="Title of movie"
                  {...formikProps.getFieldProps("title")}
                />
              </div>
              <div>
                <select id="genreID" {...formikProps.getFieldProps("genreID")}>
                  <option value="0">Choose the genre</option>
                  {genres.map((genre) => (
                    <option key={genre.id} value={genre.id}>
                      {genre.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <div className="flex gap-1 px-1 items-center">
                  <Field
                    id="upComingReleases"
                    name="upComingReleases"
                    type="checkbox"
                  />
                  <label htmlFor="upComingReleases">Upcoming Releases</label>
                </div>
              </div>
              <div>
                <div className="flex gap-1 px-1 items-center">
                  <Field id="nowShowing" name="nowShowing" type="checkbox" />
                  <label htmlFor="nowShowing">Now Showing</label>
                </div>
              </div>
              <div className="flex gap-2">
                <Button color="dark" onClick={() => formikProps.submitForm()}>
                  Filter
                </Button>
                <Button
                  color="failure"
                  onClick={() => formikProps.setValues(initValues)}
                >
                  Reset
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

interface filterMoviesForm {
  title: string;
  genreID: number;
  upComingReleases: boolean;
  nowShowing: boolean;
}

export default FilterMovies;
