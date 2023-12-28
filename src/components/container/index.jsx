const Container = ({ children, className }) => {
  return <div className={`max-w-screen-lg w-full mx-auto my-32 px-4 sm:px-8 relative ${className ?? ""}`}>{children}</div>;
};

export default Container;
