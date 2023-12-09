import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import VeganDietCard from "./VeganDietCard";
import { motion } from "framer-motion";

function VeganDiet() {
  const card = [
    {
      title: "Whole-food Vegan Diet",
      desc: "A diet based on a wide variety of whole plant foods such as fruits, vegetables, whole grains, legumes, nuts, and seeds.",
    },
    {
      title: "Raw-food Vegan Diet",
      desc: "A vegan diet based on raw fruits, vegetables, nuts, seeds or plant foods cooked at temperatures below 118°F (48°C) (1Trusted Source).",
    },
    {
      title: "80/10/10",
      desc: "The 80/10/10 diet is a raw-food vegan diet that limits fat-rich plants such as nuts and avocados and relies mainly on raw fruits and soft greens instead. Also referred to as the low-fat, raw-food vegan diet or fruitarian diet.",
    },
    {
      title: "The Starch Solution",
      desc: "A low-fat, high-carb vegan diet similar to the 80/10/10 but that focuses on cooked starches like potatoes, rice and corn instead of fruit.",
    },
    {
      title: "The Thrive Diet",
      desc: "The thrive diet is a raw-food vegan diet. Followers eat plant-based, whole foods that are raw or minimally cooked at low temperatures.",
    },
    {
      title: "Junk-food Vegan Diet",
      desc: "A vegan diet lacking in whole plant foods that relies heavily on mock meats and cheeses, fries, vegan desserts and other heavily processed vegan foods.",
    },
    {
      title: "Raw till 4",
      desc: "A low-fat vegan diet inspired by the 80/10/10 and starch solution. Raw foods are consumed until 4 p.m., with the option of a cooked plant-based meal for dinner.",
    },
  ];
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Header Section */}
      <section className="py-12 px-4 xl:px-0 flex flex-col justify-center xl:items-center space-y-8 mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[#5F5E36] text-4xl xl:text-7xl"
        >
          What is a Vegan Diet?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[#3E3E08] font-medium xl:w-[48rem] leading-7"
        >
          Veganism is defined as a way of living that attempts to exclude all
          forms of animal exploitation and cruelty, whether for food, clothing
          or any other purpose. For these reasons, the vegan diet is devoid of
          all animal products, including meat, eggs and dairy. People choose to
          follow a vegan diet for various reasons. These usually range from
          ethics to environmental concerns, but they can also stem from a desire
          to improve health.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[#3E3E08] font-medium xl:w-[48rem] leading-7"
        >
          A vegan diet excludes all animal products. Many people choose to eat
          this way for ethical, environmental or health reasons. A vegan diet
          excludes all animal products. Many people choose to eat this way for
          ethical, environmental or health reasons.
        </motion.p>
      </section>
      {/* Card Section */}
      <section className="flex flex-col items-center">
        <h2 className="text-[#5F5E36] text-2xl xl:text-5xl xl:w-[45rem]">
          Different Types of Vegan Diets
        </h2>
        <h4 className="text-[#3E3E08] xl:text-lg xl:w-[44.5rem] mt-4 text-center">
          There are different varieties of vegan diets. The most common include
        </h4>
        <div className="flex flex-wrap flex-col xl:flex-row items-center py-14 gap-[1.2rem] w-[75.7rem]">
          {card.map((item, index) => (
            <VeganDietCard
              key={index}
              title={item.title}
              desc={item.desc}
              onClick={item.onClick}
            />
          ))}
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default VeganDiet;
