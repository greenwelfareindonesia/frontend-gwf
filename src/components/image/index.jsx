const Image = ({ src, className, description, ...props }) => {
  return <img src={src} loading="lazy" alt={description} className={`w-full h-auto max-w-full ${className}`} {...props} />;
};

export default Image;
