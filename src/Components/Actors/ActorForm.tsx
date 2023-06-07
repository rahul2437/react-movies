import { Form, Formik, FormikHelpers } from "formik";
import { actorCreationDTO } from "../../Interface/Actor.model";
import TextField from "../Forms/TextField";
import CustomButton from "../utils/Button";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import DateField from "../Forms/DateField";
import ImageField from "../Forms/ImageField";
import MarkDownField from "../Forms/MarkDownField";

const ActorForm = (props: actorFormProps) => {
  const navigate = useNavigate();
  return (
    <div className="border px-3 py-2">
      <Formik
        initialValues={props.model}
        onSubmit={props.onSubmit}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("This Field is required")
            .firstLetterUpperCase(),
          dateOfBirth: Yup.string()
            .nullable()
            .required("This field is required"),
        })}
      >
        {(formikProps) => (
          <Form>
            <div className="flex flex-col gap-2">
              <TextField displayName="Name" field="name" />
              <DateField displayName="Date Of Birth" field="dateOfBirth" />
              <ImageField
                displayName="Picture"
                field="picture"
                imgURL={props.model.pictureURL}
              />
              <MarkDownField field="biography" displayName="Biography" />
              <div className="flex gap-2">
                <CustomButton
                  color="dark"
                  disabled={formikProps.isSubmitting}
                  type="submit"
                >
                  Save Changes
                </CustomButton>
                <CustomButton
                  color="warning"
                  type="button"
                  onClick={() => navigate("/actors")}
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

interface actorFormProps {
  model: actorCreationDTO;
  onSubmit(
    value: actorCreationDTO,
    action: FormikHelpers<actorCreationDTO>
  ): void;
}

export default ActorForm;
