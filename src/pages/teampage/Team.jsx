import React from "react";
import foundingLeft from "../../assets/team-image/founding-left.png";
import foundingMiddle from "../../assets/team-image/founding-middle.png";
import foundingRight from "../../assets/team-image/founding-right.png";
import executiveLeft from "../../assets/team-image/executive-left.png";
import executiveMiddle from "../../assets/team-image/executive-middle.png";
import executiveRight from "../../assets/team-image/executive-right.png";
import Footer from "../../components/footer/Footer";
import { motion } from "framer-motion";
import Navbar from "../../components/navbar/Navbar";

export default function Team() {
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
        <section className="bg-primary-1 flex pt-28 pb-28 min-h-600  grid-cols-4 space-x-16 justify-center items-center text-light-1">
          <div className="w-80 h-40 text-6xl p-4 mr-16">Founding Members</div>
          <div className="w-40 h-96 rounded-3xl hover:w-80">
            <img src={foundingLeft} className="w-full h-full rounded-3xl object-cover" alt="Founding Member"></img>
            <p className="">Shahira Syifa</p>
            <p>Secretary General</p>
          </div>
          <div className="w-80 h-96 rounded-3xl default:w-80">
            <img src={foundingMiddle} className="w-full h-full rounded-3xl object-cover" alt="Founding Member"></img>            
            <p className="">Nifa Rahma</p>
            <p>Executive Director</p>
          </div>
          <div className="w-40 h-96 rounded-3xl hover:w-80">
            <img src={foundingRight} className="w-full h-full rounded-3xl object-cover" alt="Founding Member"></img>
            <p>Reggata Lara</p>
            <p>CO-Executive Director</p>
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
        <section className="bg-primary-1 flex pt-28 pb-28 min-h-600  grid-cols-4 space-x-16 justify-center items-center text-light-1 ">
        <div className="w-80 h-40 text-6xl p-4 mr-16">Board of Director</div>
          <div className="w-32 h-96 rounded-3xl hover:w-96">
            <img src={foundingLeft} className="w-full h-full rounded-3xl object-cover" alt="Founding Member"></img>
            <p className="">Afifah Vanya</p>
            <p>Jabatan</p>
          </div>
          <div className="w-32 h-96 rounded-3xl hover:w-80">
            <img src={foundingMiddle} className="w-full h-full rounded-3xl object-cover" alt="Founding Member"></img>            
            <p className="">Raihan Alfarisi</p>
            <p>Technology</p>
          </div>
          <div className="w-32 h-96 rounded-3xl hover:w-80">
            <img src={foundingRight} className="w-full h-full rounded-3xl object-cover" alt="Founding Member"></img>
            <p>Afifah Vanya</p>
            <p className="">Jabatan</p>
          </div>
          <div className="w-32 h-96 rounded-3xl hover:w-80">
            <img src={foundingRight} className="w-full h-full rounded-3xl object-cover" alt="Founding Member"></img>
            <p>Ayundha Sachi</p>
            <p className="">Jabatan</p>
          </div>
          <div className="w-32 h-96 rounded-3xl hover:w-80">
            <img src={foundingRight} className="w-full h-full rounded-3xl object-cover" alt="Founding Member"></img>
            <p>Bartholomew Jordan</p>
            <p className="">Jabatan</p>
          </div>

        </section>
      <Footer />
    </div>
  );
}
