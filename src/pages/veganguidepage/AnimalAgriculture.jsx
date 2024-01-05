import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { motion } from "framer-motion";

function AnimalAgriculture() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <section className="py-20 xl:px-60 px-4">
        <h1 className="text-7xl text-primary-1 mb-20 text-center">Animal Agricultural Facts</h1>
        <div className="xl:px-8 px-4 space-y-6 xl:space-y-10">
          <div className="xl:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-[#5F5E36] xl:text-3xl text-xl xl:mb-8 mb-2"
            >
              GREENHOUSE GASES
            </motion.h2>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[#3E3E08] font-light leading-7 list-disc"
            >
              <li>
                Animal agriculture is responsible for 18 percent of greenhouse gas emissions, more than the combined exhaust from all transportation.
              </li>
              <li>
                Livestock and their byproducts account for at least 32,000 million tons of carbon dioxide (CO2) per year, or 51% of all worldwide
                greenhouse gas emissions.
              </li>
              <li>
                Animal agriculture & livestock emits a lot of methane. Methane is 25-100 times more destructive than CO2 on a 20 year time frame.
                Methane also has a global warming potential 86 times that of CO2 on a 20 year time frame.
              </li>
              <li>
                Livestock is responsible for 65% of all human-related emissions of nitrous oxide - a greenhouse gas with 296 times the global warming
                potential of carbon dioxide, and which stays in the atmosphere for 150 years.
              </li>
              <li>Emissions for agriculture projected to increase 80% by 2050.</li>
              <li>Cows produce 150 billion gallons of methane per day.</li>
              <li>Even without fossil fuels, we will exceed our 565 gigatonnes CO2e limit by 2030, all from raising animals.</li>
            </motion.ul>
          </div>
          <div className="xl:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-[#5F5E36] xl:text-3xl text-xl xl:mb-8 mb-2"
            >
              WATER USE
            </motion.h2>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[#3E3E08] font-light leading-7 list-disc"
            >
              <li>Animal agriculture water consumption ranges from 34-76 trillion gallons annually.</li>
              <li>Agriculture is responsible for 80 - 90% of water consumption.</li>
              <li>Growing feed crops for livestock consumes 56% of water.</li>
              <li>2,500 gallons of water are needed to produce 1 pound of beef.</li>
              <li>477 gallons of water are required to produce 1lb. of eggs; almost 900 gallons of water are needed for 1lb. of cheese.</li>
              <li>1,000 gallons of water are required to produce 1 gallon of milk.</li>
              <li>Animal Agriculture is responsible for 20% - 33% of all fresh water consumption in the world today.</li>
            </motion.ul>
          </div>
          <div className="xl:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-[#5F5E36] xl:text-3xl text-xl xl:mb-8 mb-2"
            >
              LAND USE
            </motion.h2>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[#3E3E08] font-light leading-7 list-disc"
            >
              <li>Livestock or livestock feed occupies 1/3 of the earth's ice-free land.</li>
              <li>Livestock covers 45% of the earth's total land.</li>
              <li>Animal agriculture is the leading cause of species extinction, ocean dead zones, water pollution, and habitat destruction.</li>
              <li>Livestock operations on land have created more than 500 nitrogen flooded deadzones around the world in our oceans.</li>
              <li>2-5 acres of land are used per cow.</li>
              <li>1/3 of the planet is desertified, with livestock as the leading driver.</li>
              <li>
                Land required to feed 1 person for 1 year; Vegan: 1/6th acre, Vegetarian: 3x as much as a vegan, Meat Eater: 18x as much as a vegan.
              </li>
              <li>1.5 acres can produce 37,000 pounds of plant-based food. 1.5 acres can produce 375 pounds of beef.</li>
            </motion.ul>
          </div>
          <div className="xl:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-[#5F5E36] xl:text-3xl text-xl xl:mb-8 mb-2"
            >
              WASTE
            </motion.h2>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[#3E3E08] font-light leading-7 list-disc"
            >
              <li>Every minute, 7 million pounds of excrement are produced by animals raised for food.</li>
              <li>A farm with 2,500 dairy cows produces the same amount of waste as a city of 411,000 people.</li>
              <li>In the U.S. alone, livestock produce 116,000 lbs of waste per second.</li>
              <li>Animals produce Enough waste to cover SF, NYC, Tokyo, etc.</li>
            </motion.ul>
          </div>
          <div className="xl:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-[#5F5E36] xl:text-3xl text-xl xl:mb-8 mb-2"
            >
              OCEANS
            </motion.h2>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[#3E3E08] font-light leading-7 list-disc"
            >
              <li>3/4 of the world's fisheries are exploited or depleted.</li>
              <li>90-100 million tons of fish are pulled from our oceans each year.</li>
              <li>As many as 2.7 trillion animals are pulled from the ocean each year.</li>
              <li>For every 1 pound of fish caught, up to 5 pounds of unintended marine species are caught and discarded as by-kill.</li>
              <li>As many as 40% (63 billion pounds) of fish caught globally every year are discarded.</li>
              <li>Scientists estimate as many as 650,000 whales, dolphins and seals are killed every year by fishing vessels.</li>
              <li>40-50 million sharks killed in fishing lines and nets.</li>
            </motion.ul>
          </div>
          <div className="xl:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-[#5F5E36] xl:text-3xl text-xl xl:mb-8 mb-2"
            >
              RAINFORESTS & WILDLIFE
            </motion.h2>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[#3E3E08] font-light leading-7 list-disc"
            >
              <li>Animal agriculture is responsible for up to 91% of Amazon destruction.</li>
              <li>
                The leading causes of rainforest destruction are livestock and feedcrops. Up to 137 plant, animal and insect species are lost every
                day due to rainforest destruction.
              </li>
              <li>136 million rainforest acres cleared for animal agriculture.</li>
              <li>
                Ten thousand years ago, 99% of biomass (i.e. zoomass) was wild animals. Today, humans and the animals that we raise as food make up
                98% of the zoomass.
              </li>
            </motion.ul>
          </div>
          <div className="xl:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-[#5F5E36] xl:text-3xl text-xl xl:mb-8 mb-2"
            >
              HUMANITY
            </motion.h2>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[#3E3E08] font-light leading-7 list-disc"
            >
              <li>70 billion farmed animals are reared annually worldwide. More than 6 million animals are killed for food every hour.</li>
              <li>
                Throughout the world, humans drink 5.2 billion gallons of water and eat 21 billion pounds of food each day. Whereas worldwide, cows
                drink 45 billion gallons of water and eat 135 billion pounds of food each day.
              </li>
              <li>Worldwide, at least 50% of grain is fed to livestock.</li>
              <li>82% of starving children live in countries where food is fed to animals, and the animals are eaten by western countries.</li>
              <li>15x more protein on any given area of land with plants, rather than cows.</li>
              <li>Dairy consumption may lead to breast lumps.</li>
              <li>
                A person who follows a vegan diet produces the equivalent of 50% less carbon dioxide, uses 1/11th oil, 1/13th water, and 1/18th land
                compared to a meat-lover for their food.
              </li>
              <li>
                Each day, a person who eats a vegan diet saves 1,100 gallons of water, 45 pounds of grain, 30 sq ft of forested land, 20 lbs CO2
                equivalent, and one animal's life
              </li>
            </motion.ul>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AnimalAgriculture;
