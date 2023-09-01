import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { Article, Header, InvolvedCarousel, PlantedBased } from "../../layouts/involved_slice";

const Involved = () => {
  return (
    <>
      <Navbar />
      <Header />
      <InvolvedCarousel />
      <PlantedBased />
      <Article />
      <Footer />
    </>
  );
};

export default Involved;
