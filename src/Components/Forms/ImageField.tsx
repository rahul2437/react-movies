import { useFormikContext } from "formik";
import { ChangeEvent, useState } from "react";

const ImageField = (props: imageFieldProps) => {
  const [imageBase64, setImageBase64] = useState<string>("");
  const [imageURL, setImageUrl] = useState<string>(props.imgURL);
  const { values } = useFormikContext<any>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      const file = e.currentTarget.files[0];
      if (file) {
        toBase64(file)
          .then((base64Repesentation: string) =>
            setImageBase64(base64Repesentation)
          )
          .catch((err) => console.log(err));
        values[props.field] = file;
        setImageUrl("");
      } else {
        setImageBase64("");
      }
    }
  };

  const toBase64 = (file: File) => {
    return new Promise<string>((res, rej) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => res(reader.result as string);
      reader.onerror = (err) => rej(err);
    });
  };

  return (
    <div>
      <label>{props.displayName}</label>
      <input type="file" accept=".jpg,.jpeg,.png" onChange={handleChange} />
      {imageBase64 ? (
        <div>
          <div className="mt-4">
            <img width={"300px"} src={imageBase64} alt="Selected Image" />
          </div>
        </div>
      ) : null}
      {imageURL ? (
        <div>
          <div className="mt-4">
            <img width={"300px"} src={imageURL} alt="Selected Image" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

interface imageFieldProps {
  displayName: string;
  imgURL: string;
  field: string;
}
ImageField.defaultProps = {
  imgURL: "",
};

export default ImageField;
