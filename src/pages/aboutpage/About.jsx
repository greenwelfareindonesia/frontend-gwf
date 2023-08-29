import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { DevGoals, Header, Mision, OngoingPrograms, Vision } from "../../layouts/about_slice";
import OurWorksNumbers from "../../layouts/about_slice/OurWorksNumbers";

const About = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Vision />
      <Mision />
      <DevGoals />
      <OngoingPrograms />
      <OurWorksNumbers />
      <Footer />
    </div>
  );
};
export default About;
