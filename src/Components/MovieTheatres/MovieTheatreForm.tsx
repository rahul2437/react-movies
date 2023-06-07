import { Form, Formik, FormikHelpers } from "formik";
import TextField from "../Forms/TextField";
import CustomButton from "../utils/Button";
import { useNavigate } from "react-router-dom";
import { movieTheatreCreationDTO } from "../../Interface/MovieTheatre.model";
import * as Yup from "yup";
import Map from "../utils/Map";

const MovieTheatreForm = (props: movieTheatreFormProps) => {
  const navigate = useNavigate();

  return (
    <div>
      <Formik
        initialValues={props.model}
        onSubmit={props.onSubmit}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("This field is required")
            .firstLetterUpperCase(),
        })}
      >
        {(formikProps) => (
          <Form>
            <div className="flex flex-col gap-2">
              <TextField displayName="Name" field="name" />
              <div className="mb-4">
                <Map />
              </div>
              <div className="flex gap-2">
                <CustomButton
                  color="dark"
                  type="submit"
                  disabled={formikProps.isSubmitting}
                >
                  Save Changes
                </CustomButton>
                <CustomButton
                  color="warning"
                  onClick={() => navigate("/movietheatres")}
                >
                  Cancel
                </CustomButton>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

interface movieTheatreFormProps {
  model: movieTheatreCreationDTO;
  onSubmit(
    value: movieTheatreCreationDTO,
    acion: FormikHelpers<movieTheatreCreationDTO>
  ): void;
}

export default MovieTheatreForm;
