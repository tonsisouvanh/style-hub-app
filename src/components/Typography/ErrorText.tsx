import React from "react";

type Props = {
  styleClass: string;
  children: React.ReactNode;
};

const ErrorText = (props: Props) => {
  return (
    <>
      <p className={`text-center  text-error ${props.styleClass}`}>
        {props.children}
      </p>
    </>
  );
};

export default ErrorText;
