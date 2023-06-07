import { useFormikContext } from "formik";

const DateField = (props: dateFieldProps) => {
  const { values, validateForm, touched, errors } = useFormikContext<any>();

  return (
    <div className="flex gap-2 items-center">
      <label htmlFor={props.field}>{props.displayName}</label>
      <input
        type="date"
        id={props.field}
        name={props.field}
        defaultValue={values[props.field]?.toLocaleDateString("en-CA")}
        onChange={(e) => {
          const date = new Date(e.currentTarget.value + "T00:00:00");
          values[props.field] = date;
          validateForm();
        }}
      />
      {touched[props.field] && errors[props.field] && (
        <div className="text-red-700">{errors[props.field]?.toString()}</div>
      )}
    </div>
  );
};

interface dateFieldProps {
  field: string;
  displayName: string;
}

export default DateField;
