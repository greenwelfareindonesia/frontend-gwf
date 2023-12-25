const fileReader = (image, setFileDataURL) => {
  let fileReader,
    isCancel = false;
  if (image) {
    fileReader = new FileReader();
    fileReader.onload = (e) => {
      const { result } = e.target;
      if (result && !isCancel) {
        setFileDataURL(result);
      }
    };
    fileReader.readAsDataURL(image);
  }
  return () => {
    isCancel = true;
    if (fileReader && fileReader.readyState === 1) {
      fileReader.abort();
    }
  };
};

export default fileReader;
