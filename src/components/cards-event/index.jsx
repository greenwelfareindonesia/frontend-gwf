import React from "react";
import { date_icon, donate_icon, location_icon } from "../../assets/icons";

const Card = ({ image, title, description, date, location, donateNeeded, buttonText, buttonType }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-52 object-cover" src={image} alt="Event" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl text-left text-filter-4">{title}</div>
        <p className="text-gray-700 text-md text-left">{description}</p>
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
        <button className={`${buttonType === 'join' ? 'bg-primary-2' : 'bg-filter-5'} text-light-1 font-bold py-2 w-64 rounded`}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
