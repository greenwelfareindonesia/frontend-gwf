import { useState, useEffect } from "react";

import { CardMobile, CardDesktop } from "../../layouts/team_slice";

import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Container from "../../components/container";

import foundingLeft from "../../assets/team-image/founding-left.png";
import foundingMiddle from "../../assets/team-image/founding-middle.png";
import foundingRight from "../../assets/team-image/founding-right.png";
import executiveLeft from "../../assets/team-image/executive-left.png";
import executiveMiddle from "../../assets/team-image/executive-middle.png";

export default function Team() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 850);

  const [hover, setHover] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 850);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cards = [
    { img: foundingLeft, nama: "Nifa Rahma", peran: "Executive Director" },
    { img: foundingMiddle, nama: "Regatta Larra", peran: "Co-Executive Director" },
    { img: foundingRight, nama: "Shahira Syifa", peran: "Secretary General" },
    { img: executiveLeft, nama: "Hanifa Rahmaliya", peran: "Vice Secretary" },
    { img: executiveMiddle, nama: "Yovinka Ignacia", peran: "Treasurer" },
  ];

  const event = [
    {
      img: foundingLeft,
      nama: "Nifa Rahma",
      peran: "Executive Director",
    },
    {
      img: foundingMiddle,
      nama: "Regatta Larra",
      peran: "Co-Executive Director",
    },
    {
      img: foundingRight,
      nama: "Shahira Syifa",
      peran: "Secretary General",
    },
    {
      img: executiveLeft,
      nama: "Hanifa Rahmaliya",
      peran: "Vice Secretary",
    },
    {
      img: executiveMiddle,
      nama: "Yovinka Ignacia",
      peran: "Treasurer",
    },
  ];

  return (
    <>
      <Navbar />
      {isMobile ? (
        <>
          <CardMobile cards={cards} title="Founding Members" className="bg-primary-1 text-light-1" />
          <CardMobile cards={cards} title="Current Executive Leads" className="bg-light-1 text-primary-1" />
          <CardMobile cards={cards} title="Board of Director" className="bg-primary-1 text-light-1" />
        </>
      ) : (
        <>
          {/* Founding Members */}
          <section className="py-16 bg-primary-1 text-light-1">
            <Container className="flex flex-col xl:flex-row gap-16 items-center justify-between !max-w-screen-xl">
              <h3 className="w-full text-5xl font-medium text-center xl:text-left xl:w-72 xl:text-7xl">Board of Director</h3>
              <div className="flex justify-end gap-16">
                {cards.slice(0, 3).map((item, index) => (
                  <CardDesktop
                    key={index}
                    job={item.peran}
                    name={item.nama}
                    pathImg={item.img}
                    isHighlight={hover === null ? index === 1 : hover === index}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(null)}
                  />
                ))}
              </div>
            </Container>
          </section>

          {/* Current Executive Leads */}
          <section className="flex flex-wrap items-center justify-center grid-cols-3 space-y-32 pb-28 min-h-600 text-primary-1 bg-light-3">
            <div className="pt-40 mx-16">
              <div className="pt-6 text-center w-72 h-72">
                <h3 className="font-semibold text-center text-7xl">Current Executive Leads</h3>
              </div>
            </div>
            {event.map((people) => (
              <div key={people.nama} className="w-72 h-72 mx-14">
                <img className="w-72 h-72 rounded-b-4xl rounded-tr-4xl" src={people.img} alt="Executive Lead"></img>
                <p className="pt-3 font-semibold text-center">{people.nama}</p>
                <p className="text-center">{people.peran}</p>
              </div>
            ))}
          </section>

          {/* Board of Director */}
          <section className="py-16 bg-primary-1 text-light-1">
            <Container className="flex flex-col xl:flex-row gap-8 items-center justify-between !max-w-screen-xl">
              <h3 className="w-full text-5xl font-medium text-center xl:text-left xl:w-72 xl:text-7xl">Board of Director</h3>
              <div className="flex justify-end gap-8">
                {cards.map((item, index) => (
                  <CardDesktop
                    isBOD
                    key={index}
                    job={item.peran}
                    name={item.nama}
                    pathImg={item.img}
                    isHighlight={hover === null ? index === 2 : hover === index}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(null)}
                  />
                ))}
              </div>
            </Container>
          </section>
        </>
      )}

      <Footer />
    </>
  );
}
