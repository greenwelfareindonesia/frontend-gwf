import React, { useState } from "react";
import foundingLeft from "../../assets/team-image/founding-left.png";
import foundingMiddle from "../../assets/team-image/founding-middle.png";
import foundingRight from "../../assets/team-image/founding-right.png";
import executiveLeft from "../../assets/team-image/executive-left.png";
import executiveMiddle from "../../assets/team-image/executive-middle.png";
import executiveRight from "../../assets/team-image/executive-right.png";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

export default function Team() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const handleMouseEnter = (element) => {
    if (element === 1) {
      setIsHovered1(true);
      setIsHovered2(true);
      setIsHovered3(false);
    } else if (element === 2) {
      setIsHovered1(false);
      setIsHovered2(false);
      setIsHovered3(false);
    } else if (element === 3) {
      setIsHovered1(false);
      setIsHovered2(true);
      setIsHovered3(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered1(false);
    setIsHovered2(false);
    setIsHovered3(false);
  };

  const [event, setEvent] = React.useState([
    {
      img: foundingLeft,
      nama: 'Nifa Rahma',
      peran: 'Executive Director',
    },
    {
      img: foundingMiddle,
      nama: 'Regatta Larra',
      peran: 'Co-Executive Director',
    },
    {
      img: foundingRight,
      nama: 'Shahira Syifa',
      peran: 'Secretary General',
    },
    {
      img: executiveLeft,
      nama: 'Hanifa Rahmaliya',
      peran: 'Vice Secretary',
    },
    {
      img: executiveMiddle,
      nama: 'Yovinka Ignacia',
      peran: 'Treasurer',
    },
  ]);

  return (
    <div>
      <Navbar />
      {/* Founding Members */}
      <section className="bg-primary-1 flex pt-28 pb-28 min-h-600 grid-cols-4 space-x-16 justify-center items-center text-light-1">
        <div className="w-80 h-40 text-6xl p-4 mr-16">Founding Members</div>

        <div
          className={`w-40 h-96 rounded-3xl duration-500 ${isHovered1 ? 'w-80' : 'w-40'}`}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`absolute mt-60 mr-1 text-light-1 text-left text-xl font-semibold ${isHovered1 ? 'rotate-0 pl-24 pt-20 text-center' : '-rotate-90 pl-6'} duration-500`}>
            <p>Shahira Syifa</p>
            <p className="text-sm font-normal">Secretary General</p>
          </div>
          <img src={foundingLeft} className="w-full h-full rounded-3xl object-cover" alt="Founding Member" />
        </div>

        <div
          className={`w-40 h-96 rounded-3xl duration-500 ${isHovered2 ? 'w-40' : 'w-80'}`}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`absolute text-center justify-center text-light-1 text-xl font-semibold ${isHovered2 ? '-rotate-90 ml-4 mt-60' : 'rotate-0 ml-24 mt-80'} duration-500`}>
            <p className="font-semibold">Nifa Rahma</p>
            <p className="text-sm font-normal">Executive Director</p>
          </div>
          <img src={foundingMiddle} className="w-full h-full rounded-3xl object-cover" alt="Founding Member" />
        </div>

        <div
          className={`w-40 h-96 rounded-3xl duration-500 ${isHovered3 ? 'w-80' : 'w-40'}`}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`absolute mt-56 text-light-1 text-left text-xl font-semibold ${isHovered3 ? 'rotate-0 pl-24 pt-20 text-center' : '-rotate-90 '} duration-500`}>
            <p>Reggata Lara</p>
            <p className="text-sm font-normal">CO-Executive Director</p>
          </div>
          <img src={foundingRight} className="w-full h-full rounded-3xl object-cover" alt="Founding Member" />
        </div>
      </section>

      {/* Current Executive Leads */}
      <section className="flex flex-wrap items-center pb-28 min-h-600 grid-cols-3 space-y-32 justify-center text-primary-1 bg-light-3">
        <div className="pt-40 mx-16">
          <div className="w-72 h-72 text-center pt-6">
            <h className="text-7xl font-semibold text-center">Current Executive Leads</h>
          </div>
        </div>
        {event.map((people) => (
          <div key={people.nama} className="w-72 h-72 mx-14">
            <img className="w-72 h-72 rounded-b-4xl rounded-tr-4xl" src={people.img} alt="Executive Lead"></img>
            <p className="text-center pt-3 font-semibold">{people.nama}</p>
            <p className="text-center">{people.peran}</p>
          </div>
        ))}
      </section>

      {/* Board of Director */}
      <section className="bg-primary-1 flex pt-28 pb-28 min-h-600 grid-cols-4 space-x-16 justify-center items-center text-light-1 relative">
        <div className="w-8 h-96 text-6xl p-4 mr-16 absolute left-0">Board of Director</div>

        <div className="w-32 h-96 rounded-3xl transition-all duration-300 ease-linear"></div>
        <div className="w-32 h-96 rounded-3xl transition-all duration-300 ease-linear transform hover:w-96 origin-right relative">
          <img src={foundingLeft} className="w-full h-full rounded-3xl object-cover" alt="Founding Member"></img>
          <div className="absolute inset-0 flex items-center justify-center bg-transparent transition-all duration-300 ease-linear">
            <div className="vertical-text flex items-center justify-center"></div>
            <p className="m-0">Afifah Vanya</p>
          </div>
          <div className="text-center text-white hidden hover:block absolute bottom-0 w-full pb-2">
            <p className="m-0">Afifah Vanya</p>
            <p className="m-0">Jabatan</p>
          </div>
        </div>

        <div className="w-32 h-96 rounded-3xl transition-all duration-300 ease-linear transform hover:w-96 origin-right relative">
          <img src={foundingMiddle} className="w-full h-full rounded-3xl object-cover" alt="Founding Member"></img>
          <p className="">Raihan Alfarisi</p>
          <p>Technology</p>
        </div>
        <div className="w-32 h-96 rounded-3xl transition-all duration-300 ease-linear transform hover:w-96 origin-right relative">
          <img src={foundingRight} className="w-full h-full rounded-3xl object-cover" alt="Founding Member"></img>
          <p>Afifah Vanya</p>
          <p className="">Jabatan</p>
        </div>
        <div className="w-32 h-96 rounded-3xl transition-all duration-300 ease-linear transform hover:w-96 origin-right relative">
          <img src={foundingRight} className="w-full h-full rounded-3xl object-cover" alt="Founding Member"></img>
          <p>Ayundha Sachi</p>
          <p className="">Jabatan</p>
        </div>
        <div className="w-32 h-96 rounded-3xl transition-all duration-300 ease-linear transform hover:w-96 origin-right relative">
          <img src={foundingRight} className="w-full h-full rounded-3xl object-cover" alt="Founding Member"></img>
          <p>Bartholomew Jordan</p>
          <p className="">Jabatan</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
