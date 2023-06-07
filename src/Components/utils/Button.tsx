import { Button } from "flowbite-react";

const CustomButton = (props: buttonProps) => {
  return (
    <Button
      disabled={props.disabled}
      type={props.type}
      color={props.color}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};

interface buttonProps {
  children: React.ReactNode;
  onClick?(): void;
  color?:
    | "gray"
    | "dark"
    | "light"
    | "success"
    | "warning"
    | "failure"
    | "purple";
  type?: "button" | "submit";
  disabled?: boolean;
}

Button.defaultProps = {
  type: "button",
  color: "default",
  disabled: false,
};

export default CustomButton;
