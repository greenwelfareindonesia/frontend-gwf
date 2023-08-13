import bottomLeft from "../../assets/about-image/bottom-left.png";
import bottomMiddle from "../../assets/about-image/bottom-middle.png";
import bottomRight from "../../assets/about-image/bottom-right.png";
import middleRight from "../../assets/about-image/middle-right.png";
import middleMiddle from "../../assets/about-image/middle-middle.png";
import middleLeft from "../../assets/about-image/middle-left.png";
import topLeft from "../../assets/about-image/top-left.png";
import topMiddle from "../../assets/about-image/top-middle.png";
import topRight from "../../assets/about-image/top-right.png";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div>
      <div>About Page</div>
      {/* Ongoing Programs */}
      <section className="pb-16">
        <div className="flex flex-col items-center ">
          <h2 className="mb-9 text-[#5F5E36] text-center font-inter text-2xl">
            Ongoing Programs
          </h2>
          <h3 className="text-center text-[#3E3E08] mb-7 font-bold">
            GWF Monthly Distribution Drives
          </h3>
          <p className="text-center text-[#3E3E08] w-[90%] text-sm lg:w-[54rem] mb-12 leading-6">
            To support our mission of achieving zero hunger through responsible
            consumption, Green Welfare Indonesia performs a monthly distribution
            drive in by allocating plant-based meals, eco-friendly household
            goods and sanitary kits to various communities in need whilst
            educating awareness about livestock agriculture and it&apos;s
            massive carbon footprint through these plant-based approaches.
          </p>
        </div>
        <div className="flex-col lg:flex lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-6 mb-20 w-fit mx-auto">
          <img
            src={topLeft}
            alt=""
            className="lg:w-[29rem] lg:h-[25rem] w-[26rem] h-[21rem]"
          />
          <img
            src={topMiddle}
            alt=""
            className="lg:w-[29rem] lg:h-[25rem] w-[26rem] h-[21rem]"
          />
          <img
            src={topRight}
            alt=""
            className="lg:w-[29rem] lg:h-[25rem] w-[26rem] h-[21rem]"
          />
        </div>
        <div className="flex flex-col items-center ">
          <h3 className="text-center text-[#3E3E08] mb-7 font-bold">
            GWF Sustainable Hydroponics Waqaf Program
          </h3>
          <p className="text-center text-[#3E3E08] w-[90%] text-sm lg:w-[54rem] mb-12 leading-6">
            Green Welfare Indonesia aims to broaden their area of work by not
            only providing people with their necessities in the short term, but
            to also provide them with resources to be able to sustain themselves
            in the long run. We aim to carry this out through donating
            hydroponics units as a resource of food whilst also promoting
            sustainable urban agriculture to underprivileged communities. This
            program is also the first to introduce the concept of Waqf
            Hydroponics (Islamic endowment). So far,{" "}
            <span className="font-bold">
              Green Welfare Indonesia has successfully installed 6 hydroponics
              stations
            </span>{" "}
            in Kuningan, Jakarta and Tapos, Depok.
          </p>
        </div>
        <div className="flex-col lg:flex lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-6 mb-20 w-fit mx-auto">
          <img
            src={middleLeft}
            alt=""
            className="lg:w-[29rem] lg:h-[25rem] w-[26rem] h-[21rem]"
          />
          <img
            src={middleMiddle}
            alt=""
            className="lg:w-[29rem] lg:h-[25rem] w-[26rem] h-[21rem]"
          />
          <img
            src={middleRight}
            alt=""
            className="lg:w-[29rem] lg:h-[25rem] w-[26rem] h-[21rem]"
          />
        </div>
        <div className="flex flex-col items-center ">
          <h3 className="text-center text-[#3E3E08] mb-7 font-bold">
            GWF Climate Education Initiatives
          </h3>
          <p className="text-center text-[#3E3E08] w-[90%] text-sm lg:w-[54rem] mb-12 leading-6">
            Green Welfare Indonesia highly prioritizes Climate Education as we
            believe it is a crucial first step on climate action. We execute
            this by providing programs that involves peer-to-peer climate
            educational workshops to local schools & communities (online &
            offline), as well as providing informal & accessible diverse
            environmental dialogues through virtual seminars, social media post
            toolkits and Op-Eds.
          </p>
        </div>
        <div className="flex-col lg:flex lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-6 w-fit mx-auto">
          <img
            src={bottomLeft}
            alt=""
            className="lg:w-[29rem] lg:h-[25rem] w-[26rem] h-[21rem]"
          />
          <img
            src={bottomMiddle}
            alt=""
            className="lg:w-[29rem] lg:h-[25rem] w-[26rem] h-[21rem]"
          />
          <img
            src={bottomRight}
            alt=""
            className="lg:w-[29rem] lg:h-[25rem] w-[26rem] h-[21rem]"
          />
        </div>
      </section>
      {/* Work In Numbers */}
      <section className="bg-[#5F5E36] pt-28 pb-28">
        <h2 className="text-white text-center font-inter text-3xl mb-16">
          Our Work in Numbers
        </h2>
        <div className="flex flex-col justify-center ml-4 md:space-x-10 md:flex-row">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="text-white font-inter text-3xl leading-[4rem] md:text-6xl md:leading-[5rem]"
            >
              16,000+
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.2 }}
              className="text-white font-thin md:leading-7 h-[4rem]"
            >
              Social media followers
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="text-white font-inter text-3xl leading-[4rem] md:text-6xl md:leading-[5rem]"
            >
              1,500+
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.2 }}
              className="text-white font-thin md:leading-7 h-[4rem]"
            >
              Sanitary & Household goods <br /> distributed
            </motion.p>
          </div>
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="text-white font-inter text-3xl leading-[4rem] md:text-6xl md:leading-[5rem]"
            >
              4,300+
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.2 }}
              className="text-white font-thin md:leading-7 h-[4rem]"
            >
              Plant-based meals distributed
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="text-white font-inter text-3xl leading-[4rem] md:text-6xl md:leading-[5rem]"
            >
              20+
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.2 }}
              className="text-white font-thin md:leading-7 h-[4rem]"
            >
              Distribution drives
            </motion.p>
          </div>
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="text-white font-inter text-3xl leading-[4rem] md:text-6xl md:leading-[5rem]"
            >
              4,000+
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.2 }}
              className="text-white font-thin md:leading-7 h-[4rem]"
            >
              Youths spoken to about Climate <br /> Change
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="text-white font-inter text-3xl leading-[4rem] md:text-6xl md:leading-[5rem]"
            >
              10+
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.2 }}
              className="text-white font-thin md:leading-7 h-[4rem]"
            >
              Environmental events curated
            </motion.p>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}
