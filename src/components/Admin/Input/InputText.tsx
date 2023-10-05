import { FieldErrors, RegisterOptions, UseFormRegister } from "react-hook-form";
import { Product } from "../../../types";
type Props = {
  inputName: keyof Product;
  inputPlaceholder: string;
  inputLabel: string;
  errorMessage?: string;
  register?: UseFormRegister<Product>;
  errors?: FieldErrors<Product>;
  validationRules?: RegisterOptions;
};

const InputText = ({
  inputName,
  inputPlaceholder,
  inputLabel,
  register,
  errorMessage,
  errors,
  validationRules,
}: Props) => {
  return (
    <div className="w-full max-w-full">
      <label className="label">
        <span className="label-text font-bold">{inputLabel}</span>
        <span>
          {errors && errors[inputName]?.type === "required" && (
            <p className="label-text text-xs italic text-error" role="alert">
              {errorMessage}
            </p>
          )}
        </span>
      </label>
      <input
        {...register?.(inputName, {
          ...validationRules,
        })}
        aria-invalid={errors && errors[inputName] ? "true" : "false"}
        type="text"
        placeholder={inputPlaceholder}
        name={inputName as string}
        className={`input-bordered input input-sm w-full max-w-xs transition duration-300 hover:shadow-md focus:outline-none`}
      />
    </div>
  );
};

export default InputText;
