import { Field, useFormikContext } from "formik";
import ReactMarkdown from "react-markdown";

const MarkDownField = (props: markdownFieldProps) => {
  const { values } = useFormikContext<any>();

  return (
    <div className="flex gap-2 justify-evenly text-">
      <div className="w-full">
        <label htmlFor={props.field}>{props.displayName}</label>
        <div>
          <Field className="w-full" name={props.field} as="textarea" />
        </div>
      </div>
      <div className="w-full">
        <label htmlFor={props.field}>{props.displayName} (preview):</label>
        <div style={{ all: "unset" }}>
          <ReactMarkdown>{values[props.field]}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

interface markdownFieldProps {
  displayName: string;
  field: string;
}

export default MarkDownField;
