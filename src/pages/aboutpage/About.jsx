import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import {
  DevGoals,
  Header,
  Mision,
  OngoingPrograms,
  Vision,
  OurWorksNumbers,
  VideoSectionSlider,
} from "../../layouts/about_slice";

const About = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Vision />
      <Mision />
      <DevGoals />
      <VideoSectionSlider />
      <OngoingPrograms />
      <OurWorksNumbers />
      <Footer />
    </div>
  );
};
export default About;
