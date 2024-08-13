import { date_icon, location_icon, campaign_events_icon } from "../../assets/icons";

const Card = ({ image, title, description, date, location, buttonText }) => {
  return (
    <div className="relative max-w-sm overflow-hidden bg-white rounded shadow-lg md:max-w-md lg:max-w-lg">
      <img className="object-cover w-full h-52" src={image} alt="Event" />

      <div className="absolute flex items-center w-24 gap-1 p-2 rounded-lg bg-light-3 right-5 top-48">
        <img src={campaign_events_icon} alt="Campaign Icon" className="w-3 h-3" />
        <span className="text-xs text-primary-2">Campaign</span>
      </div>

      <div className="px-6 py-4">
        <div className="text-xl font-bold text-left text-filter-4">{title}</div>
        <p className="text-left text-gray-700 text-md line-clamp-3">{description}</p>
      </div>

      <div className="px-5 pt-2 pb-2">
        <div className="flex items-center mb-2">
          <img src={date_icon} alt="Date Icon" className="w-6 h-6" />
          <span className="ml-2">{date}</span>
        </div>
        <div className="flex items-center mb-2">
          <img src={location_icon} alt="Location Icon" className="w-6 h-6" />
          <span className="ml-2">{location}</span>
        </div>
        <button className={`bg-filter-5 text-light-1 font-bold py-2 w-full rounded`}>{buttonText}</button>
      </div>
    </div>
  );
};

export default Card;
