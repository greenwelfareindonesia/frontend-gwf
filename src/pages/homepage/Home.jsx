import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

import {
  BenefitOfPlane,
  CarouselMessage,
  ClimateWishes,
  CoreValues,
  FAQ,
  Feedback,
  Header,
  Merch,
  OurRoots,
  PrimeGoals,
  VeganJourney,
} from "../../layouts/home_slice";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <OurRoots />
      <PrimeGoals />
      <CoreValues />
      {/* <VideoSection /> */}
      <BenefitOfPlane />
      <VeganJourney />
      <ClimateWishes />
      <CarouselMessage />
      <FAQ />
      <Merch />
      <Feedback />
      <Footer />
    </>
  );
};

export default Home;
