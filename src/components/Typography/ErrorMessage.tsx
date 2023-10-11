import React from "react";
import { FieldError } from "react-hook-form";

type ErrorMessageProps = {
  error: FieldError | string | undefined;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  if (!error) {
    return null;
  }

  if (typeof error === "string") {
    return (
      <p className="label-text text-xs italic text-error" role="alert">
        {error}
      </p>
    );
  } else if ("message" in error) {
    return (
      <p className="label-text text-xs italic text-error" role="alert">
        {error.message}
      </p>
    );
  }

  return null;
};

export default ErrorMessage;
