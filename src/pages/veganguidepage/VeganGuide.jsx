import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Header from "../../assets/veganguide-image/header2.jpeg";
import VeganGuideCard from "./VeganGuideCard";
import { useNavigate } from "react-router-dom";

function VeganGuide() {
  const navigate = useNavigate();
  const card = [
    {
      title: "What is a Vegan Diet?",
      desc: "Different types of vegan diets",
      onClick: () => navigate("/vegandiet"),
    },
    {
      title: "Foods to Avoid",
      desc: "Foods to avoid as a vegan",
      onClick: () => navigate("/foodstoavoid"),
    },
    {
      title: "A Vegan Sample Menu for One Week",
      desc: "A simple plan covering a week's worth of vegan meals",
    },
    {
      title: "Foods to Eat",
      desc: "Foods to eat as a vegan",
    },
    {
      title: "17 Environmental Benefits Of Veganism",
      desc: "As proven by science",
    },
    {
      title: "Top Tips for Going Vegan",
      desc: "To boost your transition",
    },
    {
      title: "Vegetarian Dishes in Indonesia",
      desc: "15 types of Indonesia vegetarian food",
    },
    {
      title: "Vegan Books",
      desc: "20 books every vegan should read",
    },
    {
      title: "Vegan & Animal Agriculture Movies",
      desc: "The films sure to turn meat-eaters vegan",
    },
    {
      title: "Plant-based F&B Directory",
      desc: "Must-try vegan restaurants & eateries in Jakarta",
    },
    {
      title: "Health Benefits of Eating Plant-based",
      desc: "6 science-based reasons",
    },
    {
      title: "Animal Agriculture Facts",
      desc: "The environmental & social doom of animal agriculture",
    },
  ];
  return (
    <div>
      <Navbar />
      {/* Header */}
      <section
        className="h-[31rem] bg-center lg:bg-contain bg-no-repeat py-28 xl:px-[22rem]"
        style={{ backgroundImage: `url(${Header})` }}
      >
        <h1 className="text-center text-white font-medium text-3xl lg:text-4xl mb-8">
          GWF Plant-based Hub
        </h1>
        <h3 className="text-center text-white font-light mb-10">
          Your guide to a plant-based lifestyle
        </h3>
        <p className="text-center text-white font-light">
          <span className="font-bold">
            Did you know? Eating a vegan diet could be the “single biggest way”
            to reduce your environmental impact on earth.
          </span>{" "}
          Researchers at the University of Oxford found that cutting meat and
          dairy products from your diet could reduce an individual`&lsquo;`s
          carbon footprint from food by up to 73 per cent.
        </p>
      </section>
      {/* Card Section */}
      <section className="flex flex-wrap justify-center py-20 gap-x-[9rem] gap-y-[3.5rem]">
        {card.map((item, index) => (
          <VeganGuideCard
            key={index}
            title={item.title}
            desc={item.desc}
            onClick={item.onClick}
          />
        ))}
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default VeganGuide;
