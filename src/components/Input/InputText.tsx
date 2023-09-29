import React, { useState } from "react";

type Props = {
  labelTitle: string;
  labelStyle?: string;
  type: string;
  containerStyle: string;
  defaultValue: string;
  placeholder?: string;
  updateFormValue: (updateType: string, value: string) => void;
  updateType: string;
};

const InputText = (props: Props) => {
  const [value, setValue] = useState(props.defaultValue);

  const updateInputValue = (val: string) => {
    setValue(val);
    props.updateFormValue(props.updateType, val);
  };
  return (
    <div className={`form-control w-full ${props.containerStyle}`}>
      <label className="label">
        <span className={"label-text text-base-content " + props.labelStyle}>
          {props.labelTitle}
        </span>
      </label>
      <input
        type={props.type || "text"}
        value={value}
        placeholder={props.placeholder || ""}
        onChange={(e) => updateInputValue(e.target.value)}
        className="input-bordered  input w-full "
      />
    </div>
  );
};

export default InputText;
