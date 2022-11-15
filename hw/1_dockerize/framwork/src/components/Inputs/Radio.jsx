const Radio = ({
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
  className,
}) => {
  return (
    <div className="w-full flex flex-col items-start space-y-1">
      <label htmlFor={id} className="text-neutral-400">
        {text}
      </label>
      <div className="w-full flex items-center justify-start space-x-2">
        {Array.from({ length: max - min + 1 }, (_, index) => (
          <label
            htmlFor={id + index}
            key={index}
            className={`px-3 py-3 text-neutral-400 flex items-center border border-slate-800 hover:border-slate-700 rounded-full cursor-pointer ${
              value
                ? parseInt(value) === min + index
                  ? "bg-slate-800 border-slate-700 hover:border-slate-600 text-white"
                  : ""
                : index === min - 1
                ? "bg-slate-800 border-slate-700 hover:border-slate-600 text-white"
                : ""
            }`}
          >
            <input
              type={type}
              name={name}
              id={id + index}
              value={min + index}
              onChange={onChange}
              className={className}
              required={required}
              checked={
                value ? parseInt(value) === min + index : index === min - 1
              }
            />
            <div className="flex items-center justify-center">
              {iText[index]}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Radio;