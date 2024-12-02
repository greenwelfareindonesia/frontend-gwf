export const formatDate = (isoDate) => {
  if (!isoDate) {
    return isoDate;
  }
  const date = new Date(isoDate);
  const timeFormatter = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false, // For 24-hour format
  });

  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const time = timeFormatter.format(date);
  const formattedDate = dateFormatter.format(date);

  return `${time} · ${formattedDate}`;
};

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
