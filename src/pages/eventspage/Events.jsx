import { useState } from "react";
import Slider from "react-slick";

import { event1, past_events } from "../../assets/event-image";
import { workshop_events_icon, campaign_events_icon } from "../../assets/icons";

import Navbar from "../../components/navbar/Navbar";
import Cards1 from "../../components/cards-event";
import Cards2 from "../../components/cards-event2";
import Footer from "../../components/footer/Footer";
import { useGetWorkshops } from "../../features/workshop/service";
import { useGetEvents } from "../../features/events/service";
import Container from "../../components/container";
import Button from "../../components/button";
import Background from "../../components/background";
import { Link } from "react-router-dom";

const Events = () => {
  const [selectedEventType, setSelectedEventType] = useState("Campaign");

  const { data: dataWorkshops } = useGetWorkshops();
  const { data: dataEvents } = useGetEvents();

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
          centerPadding: "70px",
          infinite: true,
          swipeToSlide: true,
        },
      },
    ],
    cssEase: "linear",
  });

  const renderCurrentEvents = () => (
    <Slider arrows={false} {...getSliderSettings()} className="items-center max-w-5xl mx-10">
      {dataEvents?.map((event, index) => (
        <div className="px-2" key={index}>
          <Cards1
            buttonText="coming soon"
            image={event.FileName}
            description={event.EventMessage}
            date={event.Date}
            location={event.Location}
            title={event.Title}
          />
        </div>
      ))}
    </Slider>
  );

  const renderPastEvents = () => (
    <>
      {selectedEventType === "Campaign" ? (
        <>
          {dataEvents?.map((item, index) => (
            <Cards2
              key={index}
              title={item.Title}
              description={item.EventMessage}
              image={item.FileName}
              eventType="Campaign"
              date={item.Date}
              location={item.Location}
            />
          ))}
        </>
      ) : (
        <>
          {dataWorkshops?.map((item, index) => (
            <Cards2
              key={index}
              title={item.Title}
              description={item.Desc}
              image={item.Image}
              eventType="Workshop"
              date={item.Date}
              location={item.IsOpen}
            />
          ))}
        </>
      )}
    </>
  );

  return (
    <>
      <Navbar />
      <div className="">
        <div className="grid items-center justify-center grid-cols-1 xl:grid-cols-2 xl:ml-48">
          <div className="py-10 m-4">
            <h1 className="mb-2 text-2xl font-semibold xl:text-4xl md:text-3xl sm:text-2xl">
              A little of your time can go a long way for the others.
            </h1>
            <div className="items-center justify-center sm:grid sm:grid-cols-2 md:grid md:grid-cols-2">
              <p className="mt-6 xl:text-xl md:text-lg sm:text-lg">
                You give but little when you give of your possessions, it&quot;s when you give of yourself that you truly give
              </p>
              <img src={event1} alt="Event" className="xl:w-0 md:w-96 sm:w-96" />
            </div>
            <div className="flex items-center justify-center gap-4 mt-4 md:justify-start">
              <Button intent="primary" className="rounded-xl">
                Become a Volunteer
              </Button>
              <Link to="/about">
                <Button intent="white" className="border-2 rounded-xl border-primary-2 hover:!bg-primary-2 hover:text-light-1">
                  About Us
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex w-0 my-auto sm:w-0 md:w-0 xl:w-400 xl:h-64">
            <img src={event1} alt="Event" />
          </div>
        </div>
      </div>

      <div className="items-center justify-center py-16 text-center bg-primary-1">
        <h1 className="text-xl font-semibold text-light-1 xl:text-3xl md:text-2xl sm:text-xl">We need your contribution right now</h1>
        <p className="max-w-screen-lg mx-auto mt-4 mb-10 text-sm text-light-1 xl:text-xl md:text-lg sm:text-sm">
          &quot;As you grow older, you will discover that you have two hands. One for helping yourself, the other for helping others.&quot; - Audrey
          Hepburn
        </p>
        <div className="w-full max-w-5xl mx-auto mt-5">{renderCurrentEvents()}</div>
      </div>

      <Background src={past_events} className="min-h-300 sm:min-h-400 !justify-between flex-col">
        <h4 className="pt-8 text-2xl font-medium text-light-1 sm:text-3xl">Our Past Events</h4>
        <div className="grid grid-cols-2">
          <button
            className={`flex items-center w-36 h-8 xl:w-96 xl:h-12 md:w-52 md:h-10 sm:w-36 sm:h-10 rounded-t-2xl mx-2 text-primary-2 font-bold xl:text-2xl lg:text-xl md:text-lg sm:text-md bg-light-1 justify-center transition-all duration-500 ease-in-out ${
              selectedEventType === "Campaign" ? "opacity-100" : "opacity-70"
            }`}
            onClick={() => handleButtonClick("Campaign")}
          >
            <div className="flex items-center justify-center w-5 h-5 mr-2 rounded-full bg-light-5 xl:w-7 xl:h-7 lg:w-6 lg:h-6 md:w-5 md:h-5 sm:w-5 sm:h-5">
              <img src={campaign_events_icon} className="xl:p-2 lg:p-1.5 md:p-1 sm:p-1 p-1" alt="Campaign Icon" />
            </div>
            Campaign
          </button>
          <button
            className={`flex items-center w-36 justify-center h-8 xl:w-96 xl:h-12 md:w-52 md:h-10 sm:w-36 sm:h-10 rounded-t-2xl mx-2 text-primary-2 font-bold xl:text-2xl lg:text-xl md:text-lg sm:text-md bg-light-1 transition-all duration-500 ease-in-out ${
              selectedEventType === "Workshop" ? "opacity-100" : "opacity-70"
            }`}
            onClick={() => handleButtonClick("Workshop")}
          >
            <div className="flex items-center justify-center w-5 h-5 mr-2 rounded-full bg-light-5 xl:w-7 xl:h-7 lg:w-6 lg:h-6 md:w-5 md:h-5 sm:w-5 sm:h-5">
              <img src={workshop_events_icon} className="xl:p-2 lg:p-1.5 md:p-1 sm:p-1 p-1" alt="Workshop Icon" />
            </div>
            Workshop
          </button>
        </div>
      </Background>

      <Container className="!max-w-screen-xl flex flex-col gap-8 justify-center my-10">{renderPastEvents()}</Container>

      <Footer />
    </>
  );
};

export default Events;
