const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`align-middle flex items-center gap-1 text-center duration-300 text-sm py-3 px-6 bg-white text-primary-2 outline-none ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
