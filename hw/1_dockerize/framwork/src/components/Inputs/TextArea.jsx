import TextareaAutosize from "react-textarea-autosize";

const TextArea = ({
  type,
  name,
  id,
  value,
  onChange,
  text,
  placeholder,
  minRows,
  maxRows,
  required,
  error,
  className,
}) => {
  return (
    <div className="flex flex-col space-y-1">
      {text && (
        <label htmlFor={id} className="text-sm text-neutral-300">
          {text}
        </label>
      )}
      <TextareaAutosize
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        minRows={minRows}
        maxRows={maxRows}
        required={required}
        className={className}
        cacheMeasurements={true}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default TextArea;
