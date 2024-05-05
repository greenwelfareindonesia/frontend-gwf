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
  return (
    <div>
      <Navbar />
        {/* Micheline's Part */}
        {/* Founding Members */}
        <section className="bg-primary-1 flex pt-28 pb-28 min-h-600  grid-cols-4 space-x-16 justify-center items-center">
          {/* <h className="text-light-1 w-32 font-semibold pl-36 text-5xl">Founding Members</h> */}
          <div className="w-80 h-40 text-6xl p-4 text-light-1 mr-16">Founding Members</div>
        </section>

        {/* Current Executive Leads */}
        <section className="flex items-center pt-28 pb-28 min-h-600 grid-cols-3 grid-rows-2 space-x-32 justify-center">
          <section>
            <div className="w-80 h-80 text-center pt-12">
              <h className="text-7xl text-primary-1 font-semibold">Current Executive Leads</h>
            </div>
          </section>








          {/* Alyssa's Part */}
          <section>

          </section>
        </section>

        {/* Board of Director */}
        <section className="bg-primary-1 flex flex-col justify-center items-center pt-28 pb-28">

        </section>
      <Footer />
    </div>
  );
}
