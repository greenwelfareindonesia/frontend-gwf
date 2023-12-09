import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import VeganMoviesCard from "./VeganMoviesCard";
import cowspiracy from "../../assets/veganguide-image/veganmovies/cowspiracy.webp";
import earthlings from "../../assets/veganguide-image/veganmovies/earthlings.webp";
import foodinc from "../../assets/veganguide-image/veganmovies/foodinc.webp";
import forkoverknifes from "../../assets/veganguide-image/veganmovies/forkoverknifes.webp";
import okja from "../../assets/veganguide-image/veganmovies/okja.webp";
import raw from "../../assets/veganguide-image/veganmovies/raw.webp";
import seaspiracy from "../../assets/veganguide-image/veganmovies/seaspiracy.webp";
import supersizeme from "../../assets/veganguide-image/veganmovies/supersizeme.webp";
import thegamechangers from "../../assets/veganguide-image/veganmovies/thegamechangers.webp";
import vegucated from "../../assets/veganguide-image/veganmovies/vegucated.webp";
import wth from "../../assets/veganguide-image/veganmovies/wth.webp";

function VeganMovies() {
  const card = [
    {
      title: "Cowspiracy",
      img: cowspiracy,
    },
    {
      title: "What The Health",
      img: wth,
    },
    {
      title: "Earthlings",
      img: earthlings,
    },
    {
      title: "The Game Changers",
      img: thegamechangers,
    },
    {
      title: "Okja",
      img: okja,
    },
    {
      title: "Seaspiracy",
      img: seaspiracy,
    },
    {
      title: "Super Size Me",
      img: supersizeme,
    },
    {
      title: "Food Inc",
      img: foodinc,
    },
    {
      title: "Fork Over Knifes",
      img: forkoverknifes,
    },
    {
      title: "Raw",
      img: raw,
    },
    {
      title: "Vegucated",
      img: vegucated,
    },
  ];
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <section className="flex flex-col items-center px-2 xl:px-0">
        <h1 className="xl:text-4xl text-primary-1 text-center py-12 text-2xl">
          Vegan & Animal Agricultural Movies
        </h1>
        <p className="text-center text-primary-2 xl:w-[65rem] leading-8 font-light mb-20 text-sm xl:text-base">
          We've all seen films that scare us, make us laugh, and bring us to
          tears, but how often do you see a film that totally changes your life?
          Veganism is on the rise all over the world and, for many people, the
          decision to go meat and dairy-free has been in some way influenced by
          the world of film. So if you're looking for powerful movies to
          recommend to friends and family, or if you're thinking of giving up
          meat yourself, these are the films sure to make meat-eaters turn
          vegan.
        </p>
        <div className="flex flex-col items-center xl:items-start xl:flex-row xl:flex-wrap xl:gap-6 gap-4 xl:w-[92.5rem]">
          {card.map((item, index) => (
            <VeganMoviesCard key={index} title={item.title} img={item.img} />
          ))}
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default VeganMovies;
