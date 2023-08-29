const Container = (props) => {
  return <div className={`w-full h-auto ${props.className}`}>{props.children}</div>;
};

export default Container;
