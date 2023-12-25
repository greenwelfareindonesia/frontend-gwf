const ReloadRefresh = (time, path) => {
  return setTimeout(() => {
    if (path) {
      window.location.href = path;
    } else {
      window.location.reload();
    }
  }, time);
};

export default ReloadRefresh;
