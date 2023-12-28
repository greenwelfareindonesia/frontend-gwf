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
      {/* Founding Members */}
      <section className="bg-[#5F5E36] flex flex-col justify-center items-center pt-28 pb-28">
        <div>
          <h2 className="mb-10 text-xl text-light-1 lg:mb-24">Founding Members</h2>
        </div>
        <div className="justify-center space-y-16 lg:flex lg:space-x-40 lg:space-y-0">
          <div className="flex flex-col items-center text-light-1 lg:space-y-10">
            <img src={foundingLeft} alt="Nala Amirah" className="rounded-full" />
            <motion.a
              href="https://www.linkedin.com/in/nalaamirah/"
              target="_blank"
              rel=""
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="mt-8 text-lg lg:mt-0 hover:underline"
            >
              Nala Amirah
            </motion.a>
            <motion.h4
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-2 font-light lg:mt-0"
            >
              Founder & Board of Director
            </motion.h4>
          </div>
          <div className="flex flex-col items-center text-light-1 lg:space-y-10">
            <img src={foundingMiddle} alt="Daniel Filgo" className="rounded-full" />
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="mt-8 text-lg lg:mt-0"
            >
              Daniel Filgo
            </motion.h3>
            <motion.h4
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-2 font-light lg:mt-0"
            >
              Co-Founder
            </motion.h4>
          </div>
          <div className="flex flex-col items-center text-light-1 lg:space-y-10">
            <img src={foundingRight} alt="Fiza Khan" className="rounded-full" />
            <motion.a
              href="https://www.linkedin.com/in/fiza-khan-096476218/"
              target="_blank"
              rel=""
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="mt-8 text-lg lg:mt-0 hover:underline"
            >
              Fiza Khan
            </motion.a>
            <motion.h4
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-2 font-light lg:mt-0"
            >
              Co-Founder & Chief of Finance
            </motion.h4>
          </div>
        </div>
      </section>
      {/* Executive Leads */}
      <section className="flex flex-col items-center justify-center pt-28 pb-28">
        <div>
          <h2 className="text-[#5F5E36] text-xl mb-10 lg:mb-24">Current Executive Leads</h2>
        </div>
        <div className="justify-center space-y-16 lg:flex lg:space-x-40 lg:space-y-0">
          <div className="flex flex-col items-center lg:space-y-10">
            <img src={executiveLeft} alt="Nifa Rahma" className="rounded-full" />
            <motion.a
              href="https://www.linkedin.com/in/nifa-rahma/"
              target="_blank"
              rel=""
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="mt-8 text-lg lg:mt-0 hover:underline"
            >
              Nifa Rahma
            </motion.a>
            <motion.h4
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-2 font-light lg:mt-0"
            >
              Executive Director
            </motion.h4>
          </div>
          <div className="flex flex-col items-center lg:space-y-10">
            <img src={executiveMiddle} alt="Regatta Lara" className="rounded-full" />
            <motion.a
              href="https://www.linkedin.com/in/regatta-lara-kurusetra-993b90161/"
              target="_blank"
              rel=""
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="mt-8 text-lg lg:mt-0 hover:underline"
            >
              Regatta Lara
            </motion.a>
            <motion.h4
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-2 font-light lg:mt-0"
            >
              Co-Executive Director
            </motion.h4>
          </div>
          <div className="flex flex-col items-center lg:space-y-10">
            <img src={executiveRight} alt="Shahira Syifa" className="rounded-full" />
            <motion.a
              href="https://www.linkedin.com/in/shahira-syifa-putri-irwanto-5a4b9b157/"
              target="_blank"
              rel=""
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="mt-8 text-lg lg:mt-0 hover:underline"
            >
              Shahira Syifa
            </motion.a>
            <motion.h4
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-2 font-light lg:mt-0"
            >
              Secretary General
            </motion.h4>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}
