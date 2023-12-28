import React, { useState } from "react";
import Popup from "reactjs-popup";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Header from "../../assets/veganguide-image/header2.jpeg";
import VeganGuideCard from "./VeganGuideCard";
import { useNavigate } from "react-router-dom";
import Cross from "../../assets/veganguide-image/cross.svg";

function VeganGuide() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
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
      onClick: () => navigate("/veganmenuforaweek"),
    },
    {
      title: "Foods to Eat",
      desc: "Foods to eat as a vegan",
      onClick: () => navigate("/foodstoeat"),
    },
    {
      title: "17 Environmental Benefits Of Veganism",
      desc: "As proven by science",
      onClick: () => navigate("/environmentalbenefits"),
    },
    {
      title: "Top Tips for Going Vegan",
      desc: "To boost your transition",
      onClick: () => navigate("/toptipsforgoingvegan"),
    },
    {
      title: "Vegetarian Dishes in Indonesia",
      desc: "15 types of Indonesia vegetarian food",
      onClick: () => navigate("/vegandishesinindo"),
    },
    {
      title: "Vegan Books",
      desc: "20 books every vegan should read",
      onClick: () => navigate("/veganbooks"),
    },
    {
      title: "Vegan & Animal Agriculture Movies",
      desc: "The films sure to turn meat-eaters vegan",
      onClick: () => navigate("/veganmovies"),
    },
    {
      title: "Plant-based F&B Directory",
      desc: "Must-try vegan restaurants & eateries in Jakarta",
      onClick: () => setIsOpen((prevState) => !prevState),
    },
    {
      title: "Health Benefits of Eating Plant-based",
      desc: "6 science-based reasons",
      onClick: () => navigate("/healthbenefits"),
    },
    {
      title: "Animal Agriculture Facts",
      desc: "The environmental & social doom of animal agriculture",
      onClick: () => navigate("/animalagriculturefacts"),
    },
  ];
  const Modal = () => (
    <Popup open={isOpen} closeOnEscape overlayStyle={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }} className="">
      <div className="bg-white py-6 px-12 rounded-md flex flex-col text-primary-1 text-center underline font-light relative">
        <img src={Cross} alt="cross" className="w-[40px] absolute top-2 left-2 cursor-pointer" onClick={() => setIsOpen((prevState) => !prevState)} />
        <a href="https://www.instagram.com/burgreens/" target="_blank" rel="noopener noreferrer" className="">
          Burgreens
        </a>
        <a href="https://www.instagram.com/honueats/" target="_blank" rel="noopener noreferrer">
          Honu Eats
        </a>
        <a href="https://www.instagram.com/raysbottleofjoe/" target="_blank" rel="noopener noreferrer">
          Ray's Bottle of Joy
        </a>
        <a href="https://www.instagram.com/therootsid/" target="_blank" rel="noopener noreferrer">
          The Roots
        </a>
        <a href="https://www.instagram.com/rumahjulietid/" target="_blank" rel="noopener noreferrer">
          Rumah Juliet
        </a>
        <a href="https://www.instagram.com/green.grills/" target="_blank" rel="noopener noreferrer">
          Green Grills
        </a>
        <a href="https://www.instagram.com/eath.plantbased/" target="_blank" rel="noopener noreferrer">
          EATH Plant-based
        </a>
        <a href="https://www.instagram.com/feelgoodfood.id/" target="_blank" rel="noopener noreferrer">
          Feel Good Food
        </a>
        <a href="https://www.instagram.com/tiasa.plantbased/" target="_blank" rel="noopener noreferrer">
          Tiasa Plant-based
        </a>
        <a href="https://www.instagram.com/thehenrebellion/" target="_blank" rel="noopener noreferrer">
          The Hen Rebellion
        </a>
        <a href="https://www.instagram.com/veganbaby.id/" target="_blank" rel="noopener noreferrer">
          Vegan Baby
        </a>
        <a href="https://www.instagram.com/piringsayur/" target="_blank" rel="noopener noreferrer">
          Piring Sayur
        </a>
        <a href="https://www.instagram.com/seedjkt/" target="_blank" rel="noopener noreferrer">
          Seed
        </a>
        <a href="https://www.instagram.com/treatvegan_id/" target="_blank" rel="noopener noreferrer">
          Treat Vegan
        </a>
        <a href="https://www.instagram.com/bakmivegan99/" target="_blank" rel="noopener noreferrer">
          Bakmi Vegan 99
        </a>
        <a href="https://www.instagram.com/lokapadang_officialstore/" target="_blank" rel="noopener noreferrer">
          Loka Padang
        </a>
        <a href="https://www.instagram.com/nutsybowl/" target="_blank" rel="noopener noreferrer">
          Nutsy Bowl
        </a>
        <a href="https://www.instagram.com/iveganpizza/" target="_blank" rel="noopener noreferrer">
          iVegan Pizza
        </a>
        <a href="https://www.instagram.com/sematjam_id/" target="_blank" rel="noopener noreferrer">
          Sematjam
        </a>
        <a href="https://www.instagram.com/sproutsparlor/" target="_blank" rel="noopener noreferrer">
          Sprouts Noodle Parlor
        </a>
        <a href="https://www.instagram.com/plantful.id/" target="_blank" rel="noopener noreferrer">
          Plantful
        </a>
        <a href="https://www.instagram.com/fedwelljkt/" target="_blank" rel="noopener noreferrer">
          Fedwell Jakarta
        </a>
        <a href="https://www.instagram.com/bluezone.id/" target="_blank" rel="noopener noreferrer">
          Bluezone
        </a>
        <a href="https://www.instagram.com/vowgroup.id/" target="_blank" rel="noopener noreferrer">
          Vegan On Bowl
        </a>
        <a href="https://www.instagram.com/thesupergrain/" target="_blank" rel="noopener noreferrer">
          Supergrain
        </a>
        <a href="https://www.instagram.com/herbox.jkt/" target="_blank" rel="noopener noreferrer">
          Herbox Jakarta
        </a>
      </div>
    </Popup>
  );
  return (
    <div>
      <Navbar />
      {/* Header */}
      <section className="h-[31rem] bg-no-repeat bg-cover bg-center py-28 xl:px-[22rem]" style={{ backgroundImage: `url(${Header})` }}>
        <h1 className="text-center text-light-1 font-medium text-3xl lg:text-4xl mb-8">GWF Plant-based Hub</h1>
        <h3 className="text-center text-light-1 font-light mb-10">Your guide to a plant-based lifestyle</h3>
        <p className="text-center text-light-1 font-light">
          <span className="font-bold">
            Did you know? Eating a vegan diet could be the “single biggest way” to reduce your environmental impact on earth.
          </span>{" "}
          Researchers at the University of Oxford found that cutting meat and dairy products from your diet could reduce an individual`&lsquo;`s
          carbon footprint from food by up to 73 per cent.
        </p>
        <Modal />
      </section>
      {/* Card Section */}
      <section className="flex flex-wrap justify-center py-20 gap-x-[9rem] gap-y-[3.5rem]">
        {card.map((item, index) => (
          <VeganGuideCard key={index} title={item.title} desc={item.desc} onClick={item.onClick} />
        ))}
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default VeganGuide;
