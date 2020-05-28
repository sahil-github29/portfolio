import React from "React";
import Spinner from "../spinner";

export default (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
};
