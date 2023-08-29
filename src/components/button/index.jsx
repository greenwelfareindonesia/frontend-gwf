const Button = (props) => {
  return (
    <button
      className={`align-middle select-none text-center transition-all duration-400 text-sm font-normal py-3 px-6 bg-white text-[#3E3E08] outline-none ${props.className}`}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </button>
  );
};

export default Button;
