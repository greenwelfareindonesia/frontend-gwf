import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import FoodsToEatCard from "../veganguidepage/FoodsToEatCard";
import algae from "../../assets/veganguide-image/foodstoeat/algae.webp";
import bread from "../../assets/veganguide-image/foodstoeat/bread.webp";
import fruits from "../../assets/veganguide-image/foodstoeat/fruits.webp";
import grains from "../../assets/veganguide-image/foodstoeat/grains.webp";
import legumes from "../../assets/veganguide-image/foodstoeat/legumes.webp";
import nuts from "../../assets/veganguide-image/foodstoeat/nuts.webp";
import seeds from "../../assets/veganguide-image/foodstoeat/seeds.webp";
import tempeh from "../../assets/veganguide-image/foodstoeat/tempeh.webp";
import yeast from "../../assets/veganguide-image/foodstoeat/yeast.webp";
import yogurts from "../../assets/veganguide-image/foodstoeat/yogurts.webp";

function FoodsToEat() {
  const card = [
    {
      title: "Tofu, Tempeh, & Seitan",
      desc: "These provide a versatile protein-rich alternative to meat, fish, poultry and eggs in many recipes.",
      img: tempeh,
    },
    {
      title: "Legumes",
      desc: "Foods such as beans, lentils, and peas are excellentsources of many nutrients and beneficial plantcompounds. Sprouting, fermenting and proper cooking can increase nutrient absorption (34Trusted Source).",
      img: legumes,
    },
    {
      title: "Nuts & Nut Butters",
      desc: "Especially unblanched and unroasted varieties, which are good sources of iron, fiber, magnesium, zinc, selenium, and vitamin E (35Trusted Source).",
      img: nuts,
    },
    {
      title: "Seeds",
      desc: "Especially hemp, chia and flaxseeds, which contain a good amount of protein and beneficial omega-3 fatty acids.",
      img: seeds,
    },
    {
      title: "Calcium-fortified Plant Milks and Yogurts",
      desc: "These help vegans achieve their recommended dietary calcium intake. Opt for varieties also fortified with vitamins B12 and D whenever possible.",
      img: yogurts,
    },
    {
      title: "Algae",
      desc: "Spirulina and chlorella are good sources of complete protein. Other varieties are great sources of iodine.",
      img: algae,
    },
    {
      title: "Nutritional Yeast",
      desc: "This is an easy way to increase the protein content of vegan dishes and add an interesting cheesy flavor. Pick vitamin B12-fortified varieties whenever possible.",
      img: yeast,
    },
    {
      title: "Whole Grains, Cereals & Pseudocereals",
      desc: "These are a great source of complex carbs, fiber, iron, B-vitamins and several minerals. Spelt, teff, amaranth and quinoa are especially high-protein options.",
      img: grains,
    },
    {
      title: "Sprouted & Fermented Plant Foods",
      desc: "Ezekiel bread, tempeh, miso, natto, sauerkraut, pickles, kimchi and kombucha often contain probiotics and vitamin K2. Sprouting and fermenting can also help improve mineral absorption (34Trusted Source, 43Trusted Source).",
      img: bread,
    },
    {
      title: "Fruits & Vegetables",
      desc: "Both are great foods to increase your nutrient intake. Leafy greens such as bok choy, spinach, kale, watercress and mustard greens are particularly high in iron and calcium.",
      img: fruits,
    },
  ];
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <section className="py-16">
        <h1 className="text-primary-1 text-center xl:text-5xl text-3xl mb-8">
          Foods to Eat
        </h1>
        <h2 className="text-primary-2 text-center xl:text-xl text-lg font-light mb-20">
          Health-conscious vegans substitute animal products with plant-based
          replacements, such as:
        </h2>
        <div className="xl:grid xl:grid-cols-2 xl:px-20 xl:gap-y-32 xl:gap-x-10 px-8">
          {card.map((item, index) => (
            <FoodsToEatCard
              key={index}
              title={item.title}
              desc={item.desc}
              img={item.img}
            />
          ))}
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default FoodsToEat;
