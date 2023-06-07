import { Field, ErrorMessage } from "formik";

const TextField = (props: textFieldProps) => {
  return (
    <div className="flex gap-1 items-center">
      <label
        htmlFor={props.field}
        className="border px-2 py-1 text-center font-bold"
      >
        {props.displayName}
      </label>
      <Field
        name={props.field}
        id={props.field}
        className="border px-2 py-1 w-[300px]"
      />
      <ErrorMessage name={props.field}>
        {(msg) => <div className="text-red-700">{msg}</div>}
      </ErrorMessage>
    </div>
  );
};

interface textFieldProps {
  field: string;
  displayName: string;
}

export default TextField;
