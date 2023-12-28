import { events_image } from "../../assets/event-image";
import { eventsContent } from "../../constant/eventsContent";

import Container from "../../components/container";
import Filter from "../../components/filter";
import Background from "../../components/background";
import Image from "../../components/image";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

const Events = () => {
  return (
    <>
      <Navbar />
      <Container className="relative w-full min-h-800">
        <h1 className="text-3xl font-light leading-normal tracking-tight text-center text-primary-2">No upcoming events at the moment</h1>
      </Container>
      <Background src={events_image} className="min-h-200 sm:min-h-300 md:min-h-400 lg:min-h-500">
        <Filter />
        <div className="grid place-items-center">
          <h1 className="text-4xl font-light text-light-1">Our Past Events</h1>
        </div>
      </Background>
      <Container className="!max-w-screen-xl">
        <div className="grid grid-cols-1 gap-16 p-6 lg:grid-cols-2">
          {eventsContent.map((item, index) => (
            <div key={index} className={`text-center space-y-4 lg:space-y-8 text-primary-2 ${index % 2 === 1 && "lg:pt-32"}`}>
              <Image src={item.image} description={`events-${index}`} className="mx-auto lg:px-24 !w-max !h-max" />
              <h1 className="text-xl font-semibold leading-normal">{item.title}</h1>
              <p className="text-sm font-light leading-loose">{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Events;
