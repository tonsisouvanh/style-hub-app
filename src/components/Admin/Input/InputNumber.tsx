import { FieldErrors, RegisterOptions, UseFormRegister } from "react-hook-form";
import { Product } from "../../../types";
import NumpadModal from "../../Modal/NumpadModal";
import { useState } from "react";
type Props = {
  inputLabel: string;
  inputPlaceholder?: string;
  inputName: keyof Product;
  errorMessage?: string;
  register?: UseFormRegister<Product>;
  errors: FieldErrors<Product>;
  validationRules?: RegisterOptions;
  setValue: (name: keyof Product, value: string) => void;
};

const InputNumber = ({
  inputLabel,
  inputName,
  inputPlaceholder,
  register,
  errorMessage,
  errors,
  validationRules,
  setValue,
}: Props) => {
  const [openNumpadModal, setOpenNumpadModal] = useState<boolean>(false);
  return (
    <div className="w-full max-w-full">
      {openNumpadModal && (
        <NumpadModal
          openNumpadModal={openNumpadModal}
          setOpenNumpadModal={setOpenNumpadModal}
          setValue={setValue}
          inputName={inputName}
        />
      )}
      <label className="label">
        <span className="label-text font-bold">{inputLabel}</span>
        <span>
          {errors[inputName]?.type === "required" && (
            <p className="label-text text-xs italic text-error" role="alert">
              {errorMessage}
            </p>
          )}
          {errors && errors[inputName]?.type === "min" && (
            <p className="label-text text-xs italic text-error" role="alert">
              {errors[inputName]?.message}
            </p>
          )}
          {errors && errors[inputName]?.type === "max" && (
            <p className="label-text text-xs italic text-error" role="alert">
              {errors[inputName]?.message}
            </p>
          )}
        </span>
      </label>
      <input
        {...register?.(inputName, {
          ...validationRules,
        })}
        aria-invalid={errors[inputName] ? "true" : "false"}
        type="number"
        placeholder={inputPlaceholder}
        name={inputName as string}
        onMouseDown={() => setOpenNumpadModal(true)}
        className="input-bordered input input-sm w-full text-base-content transition duration-300 hover:shadow-md focus:outline-none"
      />
    </div>
  );
};

export default InputNumber;
