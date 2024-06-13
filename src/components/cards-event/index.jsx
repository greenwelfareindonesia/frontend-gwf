import { date_icon, donate_icon, location_icon } from "../../assets/icons";

const Card = ({ image, title, description, date, location, donateNeeded, buttonText, buttonType }) => {
  return (
    <div className="max-w-sm overflow-hidden bg-white rounded shadow-lg">
      <img className="object-cover w-full h-52" src={image} alt="Event" />
      <div className="px-6 py-4">
        <div className="text-xl font-bold text-left text-filter-4">{title}</div>
        <p className="text-left text-gray-700 text-md">{description}</p>
      </div>
      <div className="px-6 pt-2 pb-2">
        <div className="flex items-center mb-2">
          <img src={date_icon} alt="Date Icon" className="w-6 h-6" />
          <span className="ml-2">{date}</span>
        </div>
        <div className="flex items-center mb-2">
          <img src={location_icon} alt="Location Icon" className="w-6 h-6" />
          <span className="ml-2">{location}</span>
        </div>
        <div className="flex items-center mb-4">
          <img src={donate_icon} alt="Donate Icon" className="w-6 h-6" />
          <span className="ml-2">{donateNeeded}</span>
        </div>
        <button className={`${buttonType === "join" ? "bg-primary-2" : "bg-filter-5"} text-light-1 font-bold py-2 w-64 rounded`}>{buttonText}</button>
      </div>
    </div>
  );
};

export default Card;
