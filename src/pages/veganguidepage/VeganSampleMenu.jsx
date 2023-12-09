import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Juice from "../../assets/veganguide-image/juice.webp";
import omelette from "../../assets/veganguide-image/omelette.webp";
import rolls from "../../assets/veganguide-image/rolls.webp";
import sandwich from "../../assets/veganguide-image/sandwich.webp";
import spaghetti from "../../assets/veganguide-image/spaghetti.webp";
import sushi from "../../assets/veganguide-image/sushi.webp";
import tofu from "../../assets/veganguide-image/tofu.webp";
import { motion } from "framer-motion";

function VeganSampleMenu() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <section className="py-14">
        <h1 className="text-[#5F5E36] text-5xl text-center mb-28">
          A Vegan Sample Menu For a Week
        </h1>
        <div className="xl:flex-row flex flex-col mb-16 justify-center items-center gap-x-16">
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[#5F5E36] text-2xl font-semibold"
            >
              Monday
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[#3E3E08] w-[28rem] leading-8"
            >
              Breakfast: Vegan breakfast sandwich with tofu, lettuce, tomato,
              turmeric, and a plant-milk chai latte. <br /> Lunch: Spiralized
              zucchini and quinoa salad with peanut dressing. <br /> Dinner: Red
              lentil and spinach dal over wild rice.
            </motion.p>
          </div>
          <img src={sandwich} alt="sandwich" className="mt-8 xl:mt-0" />
        </div>
        <div className="xl:flex-row flex flex-col mb-16 justify-center items-center gap-x-16">
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[#5F5E36] text-2xl font-semibold"
            >
              Tuesday
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[#3E3E08] w-[28rem] leading-8"
            >
              Breakfast: Overnight oats made with fruit, fortified plant milk,
              chia seeds and nuts. <br /> Lunch: Seitan sauerkraut sandwich.
              <br />
              Dinner: Pasta with a lentil bolognese sauce and a side salad.
            </motion.p>
          </div>
          <img src={spaghetti} alt="spaghetti" className="mt-8 xl:mt-0" />
        </div>
        <div className="xl:flex-row flex flex-col mb-16 justify-center items-center gap-x-16">
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[#5F5E36] text-2xl font-semibold"
            >
              Wednesday
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[#3E3E08] w-[28rem] leading-8"
            >
              Breakfast: Mango and spinach smoothie made with fortified plant
              milk and a banana-flaxseed-walnut muffin. <br /> Lunch: Baked tofu
              sandwich with a side of tomato salad. <br /> Dinner: Vegan chili
              on a bed of amaranth.
            </motion.p>
          </div>
          <img src={Juice} alt="Juice" className="mt-8 xl:mt-0" />
        </div>
        <div className="xl:flex-row flex flex-col mb-16 justify-center items-center gap-x-16">
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[#5F5E36] text-2xl font-semibold"
            >
              Thursday
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[#3E3E08] w-[28rem] leading-8"
            >
              Breakfast: Whole-grain toast with hazelnut butter, banana and a
              fortified plant yogurt. <br /> Lunch: Tofu noodle soup with
              vegetables. <br />
              Dinner: Jacket sweet potatoes with lettuce, corn, beans, cashews
              and guacamole.
            </motion.p>
          </div>
          <img src={tofu} alt="sandwich" className="mt-8 xl:mt-0" />
        </div>
        <div className="xl:flex-row flex flex-col mb-16 justify-center items-center gap-x-16">
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[#5F5E36] text-2xl font-semibold"
            >
              Friday
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[#3E3E08] w-[28rem] leading-8"
            >
              Breakfast: Vegan chickpea and onion omelet and a cappuccino made
              with fortified plant milk. <br /> Lunch: Vegan tacos with
              mango-pineapple salsa. <br /> Dinner: Tempeh stir-fry with bok
              choy and broccoli.
            </motion.p>
          </div>
          <img src={omelette} alt="sandwich" className="mt-8 xl:mt-0" />
        </div>
        <div className="xl:flex-row flex flex-col mb-16 justify-center items-center gap-x-16">
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[#5F5E36] text-2xl font-semibold"
            >
              Saturday
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[#3E3E08] w-[28rem] leading-8"
            >
              Breakfast: Spinach and scrambled tofu wrap and a glass of
              fortified plant milk. <br /> Lunch: Spiced red lentil, tomato and
              kale soup with whole-grain toast and hummus. <br /> Dinner: Veggie
              sushi rolls, miso soup, edamame and wakame salad.
            </motion.p>
          </div>
          <img src={sushi} alt="sandwich" className="mt-8 xl:mt-0" />
        </div>
        <div className="xl:flex-row flex flex-col justify-center items-center gap-x-16">
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[#5F5E36] text-2xl font-semibold"
            >
              Sunday
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[#3E3E08] w-[28rem] leading-8"
            >
              Breakfast: Chickpea pancakes, guacamole and salsa and a glass of
              fortified orange juice. <br /> Lunch: Tofu vegan quiche with a
              side of sautéed mustard greens. <br /> Dinner: Vegan spring rolls.
            </motion.p>
          </div>
          <img src={rolls} alt="sandwich" className="mt-8 xl:mt-0" />
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default VeganSampleMenu;
