const urlToFile = (url) => {
  var byteString = atob(url.split(",")[1]);

  var mimeString = url.split(",")[0].split(":")[1].split(";")[0];

  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ab], { type: mimeString });
};

export default urlToFile;
