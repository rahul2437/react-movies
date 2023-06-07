import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import TextField from "../Forms/TextField";
import { useNavigate } from "react-router-dom";
import { genreCreationDTO } from "../../Interface/Genre.model";
import CustomButton from "../utils/Button";

const GenreForm = (props: genreFormProps) => {
  const navigate = useNavigate();
  return (
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
        <Form className="flex flex-col gap-1">
          <TextField field="name" displayName="Name" />
          <div className="flex gap-1">
            <CustomButton
              disabled={formikProps.isSubmitting}
              color="success"
              type="submit"
            >
              Save Changes
            </CustomButton>
            <CustomButton color="dark" onClick={() => navigate("/genres")}>
              Cancel
            </CustomButton>
          </div>
        </Form>
      )}
    </Formik>
  );
};

interface genreFormProps {
  model: genreCreationDTO;
  onSubmit(
    value: genreCreationDTO,
    acion: FormikHelpers<genreCreationDTO>
  ): void;
}

export default GenreForm;
