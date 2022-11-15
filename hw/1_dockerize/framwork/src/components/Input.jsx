import { useEffect } from "react";
import getDate from "../utils/getDate";
import Radio from "./Inputs/Radio";
import TextArea from "./Inputs/TextArea";

const Input = ({
  type,
  name,
  id,
  value,
  onChange,
  text,
  placeholder,
  minRows,
  maxRows,
  min,
  max,
  iText,
  required,
  error,
  cClassName,
  className,
}) => {
  if (!className) {
    className = `p-2 rounded-xl
                  bg-slate-900 hover:bg-slate-800 focus:bg-slate-800 
                  border border-slate-800 hover:border-slate-700 focus:border-slate-700
                  focus:outline-none focus:ring-none`;
  }

  useEffect(() => {
    if (type === "date") {
      if (!value) {
        onChange({ target: { name, value: getDate() } });
      }
    }

    if (type === "radio") {
      if (!value) {
        onChange({ target: { name, value: "1" } });
      }
    }
  }, [name, onChange, type, value]);

  if (type === "textarea")
    return (
      <TextArea
        {...{
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
          cClassName,
          className,
        }}
      />
    );
  if (type === "radio")
    return (
      <Radio
        {...{
          type,
          name,
          id,
          value,
          onChange,
          text,
          min,
          max,
          iText,
          required,
          error,
          cClassName,
          className,
        }}
      />
    );

  return (
    <div className={`flex flex-col space-y-1 ${cClassName}`}>
      {text && (
        <label className="text-neutral-400" htmlFor={id}>
          {text}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={className}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default Input;
