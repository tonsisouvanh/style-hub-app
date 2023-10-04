type Props = {
  inputValue: string;
  inputName: string;
  inputPlaceholder: string;
  inputLabel: string;
  handleInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => void;
};

const InputText = ({
  inputValue,
  inputName,
  inputPlaceholder,
  inputLabel,
  handleInputChange,
}: Props) => {
  return (
    <div className="max-w-full w-full">
      <label className="label">
        <span className="label-text font-bold">{inputLabel}</span>
      </label>
      <input
        type="text"
        placeholder={inputPlaceholder}
        name={inputName}
        value={inputValue}
        onChange={handleInputChange}
        className="input-bordered input input-sm w-full max-w-xs transition duration-300 hover:shadow-md focus:outline-none"
      />
    </div>
  );
};

export default InputText;
