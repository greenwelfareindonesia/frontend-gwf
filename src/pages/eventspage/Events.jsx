import React, { useState } from "react";
import { event1, past_events, image_events_part1, image_events_part2, image_events_part3, image_events_part4 } from "../../assets/event-image";
import {workshop_events_icon, campaign_events_icon } from "../../assets/icons";

import Navbar from "../../components/navbar/Navbar";
import Cards1 from "../../components/cards-event";
import Cards2 from "../../components/cards-event2";
import Footer from "../../components/footer/Footer";

const Events = () => {
  const [selectedEventType, setSelectedEventType] = useState("All");

  const handleButtonClick = (eventType) => {
    setSelectedEventType(eventType);
  };

  const renderCurrentEvents = () => {
    return (
      <>
        <Cards1
          image={image_events_part1}
          title="Event Title"
          description="Description event"
          date="Date"
          location="Location"
          donateNeeded="Donate needed"
          buttonText="Join Now"
          buttonType="join"
          eventType="Workshop"
        />
        <Cards1
          image={image_events_part2}
          title="Event Title"
          description="Description event"
          date="Date"
          location="Location"
          donateNeeded="Donate needed"
          buttonText="Coming Soon"
          buttonType="soon"
          eventType="Campaign"
        />
        <Cards1
          image={image_events_part3}
          title="Event Title"
          description="Description event"
          date="Date"
          location="Location"
          donateNeeded="Donate needed"
          buttonText="Coming Soon"
          buttonType="soon"
          eventType="Campaign"
        />
      </>
    );
  };

  const renderPastEvents = () => {
    if (selectedEventType === "Workshop") {
      return (
        <>
          <div>
            <Cards2
              image={image_events_part1}
              title="Pajak Karbon Sebagai Solusi Krisis Iklim: Rencana dan Tantangan di Indonesia"
              description="The implementation of carbon taxes raises questions such as: Is this policy framework appropriate to provide a disincentive to dirty energy? And how can the practice of other jurisdictions that have regulated and implemented the value of the carbon economy be a lesson for Indonesia? This public discussion entitled 'Carbon Tax as a Solution to the Climate Crisis: Challenges & Plans in Indonesia' explore the core solutions and challenges towards these issues."
              date="Date"
              location="Location"
              donateNeeded="Donate needed"
              eventType="Workshop"
            />
            <Cards2
              image={image_events_part2}
              title="GYT #5: Achieving Eco-Leadership & Climate Justice Wins 2022 Environmental Plans"
              description="The implementation of carbon taxes raises questions such as: Is this policy framework appropriate to provide a disincentive to dirty energy? And how can the practice of other jurisdictions that have regulated and implemented the value of the carbon economy be a lesson for Indonesia? This public discussion entitled 'Carbon Tax as a Solution to the Climate Crisis: Challenges & Plans in Indonesia' explore the core solutions and challenges towards these issues."
              date="Date"
              location="Location"
              donateNeeded="Donate needed"
              eventType="Workshop"
            />
          </div>
        </>
      );
    } else if (selectedEventType === "Campaign"){
      return (
      <div>
        <Cards2
              image={image_events_part3}
              title="Does Our Wellbeing Depend On The Health of The Planet?"
              description="The implementation of carbon taxes raises questions such as: Is this policy framework appropriate to provide a disincentive to dirty energy? And how can the practice of other jurisdictions that have regulated and implemented the value of the carbon economy be a lesson for Indonesia? This public discussion entitled 'Carbon Tax as a Solution to the Climate Crisis: Challenges & Plans in Indonesia' explore the core solutions and challenges towards these issues."
              date="Date"
              location="Location"
              donateNeeded="Donate needed"
              eventType="Campaign"
            />
        <Cards2
              image={image_events_part4}
              title="TEDxGreenWelfare Countdown Summit: We can change Climate Change"
              description="The implementation of carbon taxes raises questions such as: Is this policy framework appropriate to provide a disincentive to dirty energy? And how can the practice of other jurisdictions that have regulated and implemented the value of the carbon economy be a lesson for Indonesia? This public discussion entitled 'Carbon Tax as a Solution to the Climate Crisis: Challenges & Plans in Indonesia' explore the core solutions and challenges towards these issues."
              date="Date"
              location="Location"
              donateNeeded="Donate needed"
              eventType="Campaign"
            />
      </div>
      )
    }
  };

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-2 gap-x-20 items-center m-8">
        <div className="m-4">
          <h1 className="text-4xl font-semibold mb-2">A little of your time can go a long way for the others.</h1>
          <p className="text-xl">You give but little when you give of your possessions, it's when you give of yourself that you truly give</p>
          <button className="bg-primary-2 text-light-1 p-3 px-7 mr-4 mt-5 rounded-lg">Become a Volunteer</button>
          <button className="border-primary-1 border-2 text-primary-1 p-3 px-7 rounded-lg">About Us</button>
        </div>
        <div>
          <img src={event1} alt="Event" />
        </div>
      </div>
      <div className="justify-center items-center bg-primary-1 text-center py-16">
        <h1 className="text-light-1 font-semibold text-3xl">We need your contribution right now</h1>
        <p className="text-light-1 mb-10">"As you grow older, you will discover that you have two hands. One for helping yourself, the other for helping others." - Audrey Hepburn</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto mt-5 w-full max-w-5xl">
          {renderCurrentEvents()}
        </div>
      </div>
      <div className="relative">
        <img src={past_events} alt="Past Events" />
        <h1 className="text-light-1 text-3xl absolute inset-0 flex items-center justify-center">Our Past Events</h1>
        <div className="grid grid-cols-2 absolute bottom-0 left-1/2 transform -translate-x-1/2 gap-14">
          <button
            className={`w-96 h-12 rounded-t-2xl mx-2 text-primary-2 font-bold text-2xl bg-light-1 ${selectedEventType === "Campaign" ? "opacity-100" : "opacity-70"}`}
            onClick={() => handleButtonClick("Campaign")}
          >
            <div className="absolute bg-light-5 w-7 h-7 left-24 top-1/4 rounded-full">
              <img src={campaign_events_icon} className="p-2"/>
            </div>
            Campaign
          </button>
          <button
            className={`w-96 h-12 rounded-t-2xl mx-2 text-primary-2 font-bold text-2xl bg-light-1 ${selectedEventType === "Workshop" ? "opacity-100" : "opacity-70"}`}
            onClick={() => handleButtonClick("Workshop")}
          >
            <div className="absolute bg-light-5 w-7 h-7 ml-24 rounded-full">
              <img src={workshop_events_icon} className="p-2"/>
            </div>
            Workshop
          </button>
        </div>
      </div>
        {renderPastEvents()} {/* Render Cards2 based on selectedEventType */}
      <Footer />
    </>
  );
};

export default Events;
