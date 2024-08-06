import { date_icon, donate_icon, location_icon, workshop_events_icon, campaign_events_icon } from "../../assets/icons";

const Card2 = ({ image, title, description, date, location, donateNeeded, eventType }) => {

  const eventLabel = eventType === "Campaign" ? "Campaign" : "Workshop";
  const eventIcon = eventType === "Campaign" ? campaign_events_icon : workshop_events_icon;

  return (
    <div className="flex pt-10">
      <img className="w-20 h-20 xl:w-40 xl:h-40 lg:w-36 lg:h-36 md:w-32 md:h-32 sm:w-24 sm:h-24 object-cover" src={image} alt="Event" />

      <div className="absolute font-bold text-xs xl:text-xl lg:text-lg md:text-md sm:text-xs text-left text-primary-2 ml-24 xl:ml-48 lg:ml-44 md:ml-36 sm:ml-24">{title}</div>
      <div className="mx-4 xl:mx-10 lg:mx-8 md:mx-6 sm:mx-2 mt-8 xl:mt-8 lg:mt-6 md:mt-4 sm:mt-2 pt-2">
        <div className="bg-light-3 rounded-lg w-20 xl:w-28 lg:w-24 md:w-20 sm:w-20 p-1 xl:p-1.5 lg:p-1 md:p-1 sm:p-1 my-4 flex items-center gap-1">
          <img src={eventIcon} alt={`${eventLabel} Icon`} className="w-2.5 xl:w-2.5 xl:h-2.5 lg:w-2 lg:h-2 md:w-1.5 md:h-1.5 sm:w-1.5 sm:h-1.5" />
          <span className="text-primary-2 text-xxs xl:text-xxs lg:text-xxs md:text-xxs sm:text-xxs">{eventType}</span>
        </div>

        <div className="flex items-center mb-2">
          <img src={date_icon} alt="Date Icon" className="w-3 xl:w-5 lg:w-4 md:w-4 sm:w-3 h-3 xl:h-5 lg:h-4 md:h-4 sm:h-3" />
          <span className="ml-2 text-xxs xl:text-sm lg:text-xs md:text-xs sm:text-xxs">{date}</span>
        </div>
        
        <div className="flex items-center mb-2">
          <img src={location_icon} alt="Location Icon" className="w-3 xl:w-5 lg:w-4 md:w-4 sm:w-3 h-3 xl:h-5 lg:h-4 md:h-4 sm:h-3" />
          <span className="ml-2 text-xxs xl:text-sm lg:text-xs md:text-xs sm:text-xxs">{location}</span>
        </div>

        <div className="flex items-center mb-4">
          <img src={donate_icon} alt="Donate Icon" className="w-3 xl:w-5 lg:w-4 md:w-4 sm:w-3 h-3 xl:h-5 lg:h-4 md:h-4 sm:h-3" />
          <span className="ml-2 text-xxs xl:text-sm lg:text-xs md:text-xs sm:text-xxs">{donateNeeded}</span>
        </div>
      </div>

      <div className="mt-10 xl:mt-12 lg:mt-10 md:mt-8 sm:mt-6 mx-2 xl:mx-12 lg:mx-10 md:mx-8 sm:mx-4 max-w-full">
        <p className="font-semibold text-xxs xl:text-base lg:text-sm md:text-xs sm:text-xxs text-left text-primary-2">Event Description</p>
        <p className={`text-gray-700 text-xxs xl:text-xs lg:text-xs md:text-xs sm:text-xxs text-justify whitespace-normal break-words w-full max-w-xs xl:max-w-full`}>
  {description}
</p>



      </div>
    </div>
  );
};

export default Card2;
