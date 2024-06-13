import { event1, events_image, image_events_part1, image_events_part10, image_events_part3, image_events_part2, past_events } from "../../assets/event-image";
import { eventsContent } from "../../constant/eventsContent";

import Container from "../../components/container";
import Filter from "../../components/filter";
import Background from "../../components/background";
import Image from "../../components/image";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Cards1 from "../../components/cards-event";

const Events = () => {
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
          <img src={event1} />
        </div>
      </div>
      <div className="justify-center items-center bg-primary-1 text-center py-16">
        <h1 className="text-light-1 font-semibold text-3xl">We need your contribution right now</h1>
        <p className="text-light-1 mb-10">"As you grow older, you will discover that you have two hands. One for helping yourself, the other for helping others."-Audrey Hepburn</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto mt-5 w-full max-w-5xl">
          <Cards1
            image={image_events_part1}
            title="Event Title"
            description="Description event"
            date="Date"
            location="Location"
            donateNeeded="Donate needed"
            buttonText="Join Now"
            buttonType="join"
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
          />
        </div>
      </div>
      <div className="relative">
        <img src={past_events} alt="Past Events"/>
        <h1 className="text-light-1 text-3xl absolute inset-0 flex items-center justify-center">Our Past Events</h1>
      </div>
      <div>

      </div>
      <Footer />
    </>
  );
};

export default Events;
