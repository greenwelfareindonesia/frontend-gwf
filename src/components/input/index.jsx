const Input = ({ type, title, name, placeholder, defaultValue, register, className, ...props }) => {
  return (
    <div className={`relative ${className ?? ""}`}>
      <label htmlFor={name} className="block mb-1 font-semibold text-primary-2">
        {title}
      </label>
      <input
        type={type}
        id={name}
        {...props}
        {...register(name)}
        className="w-full p-2 text-sm border outline-none bg-light-1 border-primary-2 text-primary-2 rounded-xl"
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default Input;
