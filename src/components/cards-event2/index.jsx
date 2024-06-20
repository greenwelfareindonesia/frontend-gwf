import React from "react";
import { date_icon, donate_icon, location_icon, workshop_events_icon, campaign_events_icon } from "../../assets/icons";

const Card2 = ({ image, title, description, date, location, donateNeeded, eventType}) => {

  const eventLabel = eventType === "Campaign" ? "Campaign" : "Workshop";
  const eventIcon = eventType === "Campaign" ? campaign_events_icon : workshop_events_icon;

  return (
    <div className="flex px-16 pt-10">
      <img className="w-52 h-52 object-cover" src={image} alt="Event" />

      <div className="absolute font-bold text-2xl text-left text-primary-2 ml-64 mt-3">{title}</div>
      <div className="mx-12 mt-10">
        <div className="bg-light-3 rounded-lg w-24 p-2 my-4 flex items-center gap-1">
            <img src={eventIcon} alt={`${eventLabel} Icon`} className="w-3 h-3" />
            <span className="text-primary-2 text-xs">{eventType}</span>
        </div>

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
      </div>

      <div className="mt-16 ml-16 w-800">
        <p className="font-semibold text-lg text-left text-primary-2">Event Description</p>
        <p className="text-gray-700 text-sm text-justify">{description}</p>
      </div>


    </div>
  );
};

export default Card2;
