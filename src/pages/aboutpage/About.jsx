import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { DevGoals, Header, Mission, OngoingPrograms, Vision, OurWorksNumbers } from "../../layouts/about_slice";
import Contact from "../../layouts/about_slice/Contact";

const About = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Vision />
      <Mission />
      <DevGoals />
      {/* <VideoSectionSlider /> */}
      <OngoingPrograms />
      <OurWorksNumbers />
      <Contact />
      <Footer />
    </>
  );
};
export default About;
