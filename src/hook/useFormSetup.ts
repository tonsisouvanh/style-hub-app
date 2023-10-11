import {
  useForm,
  SubmitHandler,
  UseFormRegister,
  FieldValues,
} from "react-hook-form";

type FormValues = {
  // Define your form fields here
};

type FormProps = {
  register: UseFormRegister<FormValues>;
  onSubmit: SubmitHandler<FormValues>;
  // Add other form-related props here
};

export const useFormSetup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // Handle form submission here
  };

  return {
    register,
    handleSubmit,
    errors,
    reset,
    onSubmit,
    setValue,
  };
};

export type { FormValues, FormProps };
