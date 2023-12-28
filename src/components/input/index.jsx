const normalInput = "w-full p-2 text-sm border outline-none bg-light-1 border-primary-2 text-primary-2 rounded-xl";
const largeInput =
  "border bg-transparent border-transparent border-b-primary-2 text-primary-2 text-lg font-light focus:ring-primary-2 focus:border-primary-2 w-full p-4 hover:border-primary-2 outline-none tracking-tight placeholder:text-primary-2/80";

const Input = ({ model, type, title, name, placeholder, defaultValue, register, className, labelClassName, inputClassName, ...props }) => {
  return (
    <div className={`relative ${className ?? ""}`}>
      <label htmlFor={name} className={`block mb-1 font-semibold text-primary-2 ${labelClassName ?? ""}`}>
        {title}
      </label>
      <input
        type={type}
        id={name}
        {...props}
        {...register(name)}
        className={`${model ? largeInput : normalInput} ${inputClassName ?? ""}`}
        placeholder={placeholder ?? ""}
        defaultValue={defaultValue ?? ""}
      />
    </div>
  );
};

export default Input;
