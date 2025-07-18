import { useState, useEffect } from "react";

import { CardMobile, CardDesktop } from "../../layouts/team_slice";

import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Container from "../../components/container";

import foundingLeft from "../../assets/team-image/founding-left.png";
import foundingMiddle from "../../assets/team-image/founding-middle.png";
import foundingRight from "../../assets/team-image/founding-right.png";

import { hanifah, nifa, regatta, sahira, yovinka, ory, abigail, iklima, alif, aulia, aurellia, saskia, revina, hanna, gamma, nazkya } from "../../assets/team-image";

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

  const foundingMembers = [
    { img: foundingLeft, nama: "Nala Amirah", peran: "Founder" },
    { img: foundingMiddle, nama: "Daniel Figo", peran: "Co-Founder" },
    { img: foundingRight, nama: "Fiza Khan", peran: "Co-Founder" },
  ];

  const currentLeads = [
    { img: nifa, nama: "Nifa Rahma", peran: "Executive Director" },
    { img: regatta, nama: "Regatta Larra", peran: "Co-Executive Director" },
    { img: sahira, nama: "Sahira", peran: "Secretary" },
    { img: hanifah, nama: "Hanifah", peran: "Vice Secretary" },
    { img: yovinka, nama: "Yovinka", peran: "Treasurer" },
  ];

  const boardOfDirector = [
    { img: ory, nama: "Ory Praka Revikansha K", peran: "Human Resources and General Affairs" },
    { img: abigail, nama: "Abigail Gabriella Aditamma", peran: "Community Services" },
    { img: iklima, nama: "Iklima Green", peran: "Education" },
    { img: alif, nama: "Alif Syams Agiputra", peran: "Media Communication" },
  ];

  const head = [
    { img: aulia, nama: "Aulia Sarah Andraina", peran: "Head of Social Media" },
    { img: aurellia, nama: "Aurellia Nezza Widarko", peran: "Head of Graphic Design" },
    { img: saskia, nama: "Saskia Novtarisa Putri", peran: "Head of Website Development" },
    { img: revina, nama: "Revina Syifa Tiara", peran: "Head of Climate Education" },
    { img: hanna, nama: "Hanna Novrelin Purba", peran: "Co-Head of Climate Education" },
    { img: gamma, nama: "Gamma Farrel", peran: "Head of CSR" },
    { img: nazkya, nama: "Nazkya Raahiil Ramandha", peran: "Head of Business Development" },
  ];

  return (
    <>
      <Navbar />
      {isMobile ? (
        <>
          <CardMobile cards={foundingMembers} title="Founding Members" className="bg-primary-1 text-light-1" />
          <CardMobile cards={currentLeads} title="Current Executive Leads" className="bg-light-1 text-primary-1" />
          <CardMobile cards={boardOfDirector} title="Board of Director" className="bg-primary-1 text-light-1" />
          <CardMobile cards={head} title="Head" className="bg-light-1 text-primary-1" />
        </>
      ) : (
        <>
          {/* Founding Members */}
          <section className="py-16 bg-primary-1 text-light-1">
            <Container className="flex flex-col xl:flex-row gap-16 items-center justify-between !max-w-screen-xl">
              <h3 className="w-full text-5xl font-medium text-center xl:text-left xl:w-72 xl:text-7xl">Founding Members</h3>
              <div className="flex justify-end gap-16">
                {foundingMembers.slice(0, 3).map((item, index) => (
                  <CardDesktop
                    key={index}
                    job={item.peran}
                    name={item.nama}
                    pathImg={item.img}
                    isHighlight={hover === null ? index === 0 : hover === index}
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
            {currentLeads.map((people) => (
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
                {boardOfDirector.map((item, index) => (
                  <CardDesktop
                    isBOD
                    key={index}
                    job={item.peran}
                    name={item.nama}
                    pathImg={item.img}
                    isHighlight={hover === null ? index === 0 : hover === index}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(null)}
                  />
                ))}
              </div>
            </Container>
          </section>

          {/* Head */}
          <section className="flex flex-wrap items-center justify-center grid-cols-3 space-y-32 pb-28 min-h-600 text-primary-1 bg-light-3">
            <div className="pt-40 mx-16">
              <div className="pt-6 text-center w-72 h-72">
                <h3 className="font-semibold text-center text-7xl">Heads</h3>
              </div>
            </div>
            {head.map((people) => (
              <div key={people.nama} className="w-72 h-72 mx-14">
                <img className="w-72 h-72 rounded-b-4xl rounded-tr-4xl" src={people.img} alt="Executive Lead"></img>
                <p className="pt-3 font-semibold text-center">{people.nama}</p>
                <p className="text-center">{people.peran}</p>
              </div>
            ))}
          </section>
        </>
      )}
      <Footer />
    </>
  );
}
