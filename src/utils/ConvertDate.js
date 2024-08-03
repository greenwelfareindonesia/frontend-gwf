const convertDateValue = (dateValue) => {
  if (!dateValue) {
    return dateValue;
  }
  const d = new Date(dateValue);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const date = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
  return `${date} ${months[d.getMonth()]}  ${d.getFullYear()}`;
};

export default convertDateValue;
