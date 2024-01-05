const convertDateValue = (dateValue) => {
  if (!dateValue) {
    return dateValue;
  }
  const d = new Date(dateValue);
  const month = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
  const date = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
  return `${d.getFullYear()}-${month}-${date}`;
};

export default convertDateValue;
