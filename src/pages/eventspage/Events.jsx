import { useState } from "react";
import Slider from 'react-slick';

import {
  event1,
  past_events,
  image_events_part1,
  image_events_part2,
  image_events_part3,
  image_events_part4,
} from "../../assets/event-image";
import { workshop_events_icon, campaign_events_icon } from "../../assets/icons";

import Navbar from "../../components/navbar/Navbar";
import Cards1 from "../../components/cards-event";
import Cards2 from "../../components/cards-event2";
import Footer from "../../components/footer/Footer";

const Events = () => {
  const [selectedEventType, setSelectedEventType] = useState("Workshop");

  const handleButtonClick = (eventType) => {
    setSelectedEventType(eventType);
  };

  const getSliderSettings = () => ({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          className: "center",
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '70px',
          infinite: true,
          swipeToSlide: true,
        },
      },
    ],
    cssEase: 'linear',
  });

  const eventCards1Data = [
    { image: image_events_part1, title: "Event Title", description: "Description event", date: "Date", location: "Location", donateNeeded: "Donate needed", buttonText: "Join Now", buttonType: "join", eventType: "Workshop" },
    { image: image_events_part2, title: "Event Title", description: "Description event", date: "Date", location: "Location", donateNeeded: "Donate needed", buttonText: "Coming Soon", buttonType: "soon", eventType: "Campaign" },
    { image: image_events_part3, title: "Event Title", description: "Description event", date: "Date", location: "Location", donateNeeded: "Donate needed", buttonText: "Coming Soon", buttonType: "soon", eventType: "Campaign" },
  ];

  const renderCurrentEvents = () => (
    <Slider {...getSliderSettings()} className="mx-10 max-w-5xl items-center">
      {eventCards1Data.map((event, index) => (
        <div className="px-2" key={index}>
          <Cards1 {...event} />
        </div>
      ))}
    </Slider>
  );

  const pastEventsData = {
    Workshop: [
      { image: image_events_part1, title: "Pajak Karbon Sebagai Solusi Krisis Iklim: Rencana dan Tantangan di Indonesia", description: "The implementation of carbon taxes raises questions such as: Is this policy framework appropriate to provide a disincentive to dirty energy? And how can the practice of other jurisdictions that have regulated and implemented the value of the carbon economy be a lesson for Indonesia? This public discussion entitled 'Carbon Tax as a Solution to the Climate Crisis: Challenges & Plans in Indonesia' explore the core solutions and challenges towards these issues.", date: "Date", location: "Location", donateNeeded: "Donate needed", eventType: "Workshop" },
      { image: image_events_part2, title: "GYT #5: Achieving Eco-Leadership & Climate Justice Wins 2022 Environmental Plans", description: "The implementation of carbon taxes raises questions such as: Is this policy framework appropriate to provide a disincentive to dirty energy? And how can the practice of other jurisdictions that have regulated and implemented the value of the carbon economy be a lesson for Indonesia? This public discussion entitled 'Carbon Tax as a Solution to the Climate Crisis: Challenges & Plans in Indonesia' explore the core solutions and challenges towards these issues.", date: "Date", location: "Location", donateNeeded: "Donate needed", eventType: "Workshop" },
    ],
    Campaign: [
      { image: image_events_part3, title: "Does Our Wellbeing Depend On The Health of The Planet?", description: "The implementation of carbon taxes raises questions such as: Is this policy framework appropriate to provide a disincentive to dirty energy? And how can the practice of other jurisdictions that have regulated and implemented the value of the carbon economy be a lesson for Indonesia? This public discussion entitled 'Carbon Tax as a Solution to the Climate Crisis: Challenges & Plans in Indonesia' explore the core solutions and challenges towards these issues.", date: "Date", location: "Location", donateNeeded: "Donate needed", eventType: "Campaign" },
      { image: image_events_part4, title: "TEDxGreenWelfare Countdown Summit: We can change Climate Change", description: "The implementation of carbon taxes raises questions such as: Is this policy framework appropriate to provide a disincentive to dirty energy? And how can the practice of other jurisdictions that have regulated and implemented the value of the carbon economy be a lesson for Indonesia? This public discussion entitled 'Carbon Tax as a Solution to the Climate Crisis: Challenges & Plans in Indonesia' explore the core solutions and challenges towards these issues.", date: "Date", location: "Location", donateNeeded: "Donate needed", eventType: "Campaign" },
    ]
  };

  const renderPastEvents = () => (
    <div>
      {pastEventsData[selectedEventType].map((event, index) => (
        <Cards2 key={index} {...event} />
      ))}
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="">
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:ml-48 justify-center items-center">
          <div className="m-4 py-10">
            <h1 className="xl:text-4xl md:text-3xl sm:text-2xl text-2xl font-semibold mb-2">A little of your time can go a long way for the others.</h1>
            <div className="sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 justify-center items-center">
              <p className="xl:text-xl md:text-lg sm:text-lg mt-6">You give but little when you give of your possessions, it&quot;s when you give of yourself that you truly give</p>
              <img src={event1} alt="Event" className="xl:w-0 md:w-96 sm:w-96"/>
            </div>
            <button className="bg-primary-2 text-light-1 p-3 px-7 mr-4 mt-5 rounded-lg">Become a Volunteer</button>
            <button className="border-primary-1 border-2 text-primary-1 p-3 px-7 rounded-lg">About Us</button>
          </div>
          <div className="flex sm:w-0 md:w-0 xl:w-400 xl:h-64 w-0 my-auto">
            <img src={event1} alt="Event"/>
          </div>
        </div>
      </div>

      <div className="justify-center items-center bg-primary-1 text-center py-16">
        <h1 className="text-light-1 font-semibold xl:text-3xl md:text-2xl sm:text-xl text-xl">We need your contribution right now</h1>
        <p className="text-light-1 mb-10 xl:text-xl md:text-lg sm:text-sm text-sm">  &quot;As you grow older, you will discover that you have two hands. One for helping yourself, the other for helping others.&quot; - Audrey Hepburn
        </p>
        <div className="mx-auto mt-5 w-full max-w-5xl">
          {renderCurrentEvents()}
        </div>
      </div> 
      
      <div className="relative">
        <img src={past_events} alt="Past Events" />
        <h1 className="text-light-1 xl:text-3xl md:text-3xl sm:text-2xl absolute inset-0 flex items-center justify-center">Our Past Events</h1>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center w-full">
       <div className="grid grid-cols-2">
          <button
            className={`flex items-center w-36 h-8 xl:w-96 xl:h-12 md:w-52 md:h-10 sm:w-36 sm:h-10 rounded-t-2xl mx-2 text-primary-2 font-bold xl:text-2xl lg:text-xl md:text-lg sm:text-md bg-light-1 justify-center transition-all duration-500 ease-in-out ${selectedEventType === "Campaign" ? "opacity-100" : "opacity-70"}`}
            onClick={() => handleButtonClick("Campaign")}
          >
            <div className="bg-light-5 xl:w-7 xl:h-7 lg:w-6 lg:h-6 md:w-5 md:h-5 sm:w-5 sm:h-5 w-5 h-5 rounded-full flex items-center justify-center mr-2">
              <img src={campaign_events_icon} className="xl:p-2 lg:p-1.5 md:p-1 sm:p-1 p-1" alt="Campaign Icon" />
            </div>
            Campaign
          </button>
          <button
            className={`flex items-center w-36 justify-center h-8 xl:w-96 xl:h-12 md:w-52 md:h-10 sm:w-36 sm:h-10 rounded-t-2xl mx-2 text-primary-2 font-bold xl:text-2xl lg:text-xl md:text-lg sm:text-md bg-light-1 transition-all duration-500 ease-in-out ${selectedEventType === "Workshop" ? "opacity-100" : "opacity-70"}`}
            onClick={() => handleButtonClick("Workshop")}
          >
            <div className="bg-light-5 xl:w-7 xl:h-7 lg:w-6 lg:h-6 md:w-5 md:h-5 sm:w-5 sm:h-5 w-5 h-5 rounded-full flex items-center justify-center mr-2">
              <img src={workshop_events_icon} className="xl:p-2 lg:p-1.5 md:p-1 sm:p-1 p-1" alt="Workshop Icon" />
            </div>
            Workshop
          </button>
        </div>
        </div>
      </div>
      <div className="xl:justify-center lg:justify-center md:justify-center sm:justify-center xl:px-32 flex">
        {renderPastEvents()}
      </div>

      <Footer />
    </>
  );
};

export default Events;
