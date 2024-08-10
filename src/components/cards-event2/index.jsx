import { date_icon, donate_icon, location_icon, workshop_events_icon, campaign_events_icon } from "../../assets/icons";
import convertDateValue from "../../utils/ConvertDate";

const Card2 = ({ image, title, description, date, eventType }) => {
  const eventLabel = eventType === "Campaign" ? "Campaign" : "Workshop";
  const eventIcon = eventType === "Campaign" ? campaign_events_icon : workshop_events_icon;

  return (
    <div className="flex flex-col justify-center gap-8 pt-10 sm:gap-6 md:gap-16 sm:justify-start sm:flex-row">
      <img className="object-cover w-40 h-40 mx-auto lg:w-60 lg:h-60" src={image} alt="Event" />
      <div className="flex-grow space-y-4">
        <div className="text-base font-bold text-left xl:text-2xl sm:text-xl text-primary-2">{title}</div>
        <div className="flex gap-8 sm:gap-8 md:gap-28">
          <div className="space-y-2 whitespace-nowrap">
            <div className="flex items-center gap-1 p-1 mt-1 rounded-lg sm:px-4 bg-light-3 w-max">
              <img src={eventIcon} alt={`${eventLabel} Icon`} className="w-2.5 h-2.5 flex-grow" />
              <span className="text-xs text-primary-2 sm:text-sm">{eventType}</span>
            </div>

            <div className="flex items-center">
              <img src={date_icon} alt="Date Icon" className="w-3 h-3 xl:w-5 xl:h-5" />
              <span className="ml-2 text-xs md:text-base sm:text-sm">{convertDateValue(date)}</span>
            </div>

            <div className="flex items-center">
              <img src={location_icon} alt="Location Icon" className="w-3 h-3 xl:w-5 xl:h-5" />
              <span className="ml-2 text-xs md:text-base sm:text-sm">Jakarta</span>
            </div>

            <div className="flex items-center">
              <img src={donate_icon} alt="Donate Icon" className="w-3 h-3 xl:w-5 xl:h-5" />
              <span className="ml-2 text-xs md:text-base sm:text-sm">Donate needed</span>
            </div>
          </div>

          <div className="w-full">
            <p className="text-xs font-semibold text-left xl:text-lg md:text-base sm:text-sm text-primary-2">Event Description</p>
            <p className="w-full text-xs text-justify text-gray-700 break-words whitespace-normal line-clamp-5 xl:text-base lg:text-base sm:text-sm">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
