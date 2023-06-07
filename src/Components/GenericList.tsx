import { ReactElement } from "react";
import LoadingGIF from "./LoadingGIF";

const GenericList = (props: genericListProps) => {
  if (!props.list) {
    if (props.loadingUI) {
      return props.loadingUI;
    }
    return <LoadingGIF />;
  }
  if (props.list.length === 0) {
    if (props.emptyListUI) {
      return props.emptyListUI;
    }
    return <div>Nothing to show</div>;
  }
  return props.children;
};

interface genericListProps {
  list: any;
  loadingUI?: ReactElement;
  emptyListUI?: ReactElement;
  children: ReactElement;
}

export default GenericList;
