import { motion } from "framer-motion";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Meat from "../../assets/veganguide-image/meatpoultry.webp";
import Animalbased from "../../assets/veganguide-image/animalbased.webp";
import Beeproducts from "../../assets/veganguide-image/beeproducts.webp";
import Dairy from "../../assets/veganguide-image/dairy.webp";
import Eggs from "../../assets/veganguide-image/eggs.webp";
import Fishseafood from "../../assets/veganguide-image/fishseafood.webp";

function FoodsToAvoid() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Page Title / Header */}
      <section className="flex flex-col items-center py-14 gap-y-8">
        <h1 className="text-[#5F5E36] text-5xl">Foods To Avoid</h1>
        <h2 className="text-[#3E3E08] font-semibold text-center">
          Vegans avoid eating any animal foods, as well as any foods containing
          ingredients derived from animals. <br /> These include:
        </h2>
      </section>
      {/* Ingredients List  */}
      <section className="xl:grid xl:grid-cols-2 flex flex-col gap-y-14 xl:px-[12rem]">
        <div className="flex flex-col items-center space-y-6">
          <img src={Meat} alt="" className="w-fit" />
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-[#5F5E36] text-center font-semibold text-xl"
          >
            Meat & Poultry
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#3E3E08] w-[26rem] text-center font-light"
          >
            Beef, lamb, pork, veal, horse, organ meat, wild meat, chicken,
            turkey, goose, duck, quail, etc.
          </motion.p>
        </div>
        <div className="flex flex-col items-center space-y-6">
          <img src={Fishseafood} alt="" className="w-fit mb-auto" />
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-[#5F5E36] text-center font-semibold text-xl"
          >
            Fish & Seafood
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#3E3E08] w-[26rem] text-center font-light"
          >
            All types of fish, anchovies, shrimp, squid, scallops, calamari,
            mussels, crab, lobster, etc.
          </motion.p>
        </div>
        <div className="flex flex-col items-center space-y-6">
          <img src={Dairy} alt="" className="w-fit mb-auto" />
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-[#5F5E36] text-center font-semibold text-xl"
          >
            Dairy
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#3E3E08] w-[26rem] text-center font-light"
          >
            Milk, yogurt, cheese, butter, cream, ice cream, etc.
          </motion.p>
        </div>
        <div className="flex flex-col items-center space-y-6">
          <img src={Eggs} alt="" className="w-fit" />
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-[#5F5E36] text-center font-semibold text-xl"
          >
            Eggs
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#3E3E08] w-[26rem] text-center font-light"
          >
            From chickens, quails, ostriches, fish, etc.
          </motion.p>
        </div>
        <div className="flex flex-col items-center space-y-6">
          <img src={Beeproducts} alt="" className="w-fit" />
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-[#5F5E36] text-center font-semibold text-xl"
          >
            Bee Products
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#3E3E08] w-[26rem] text-center font-light"
          >
            Honey, bee pollen, royal jelly, etc.
          </motion.p>
        </div>
        <div className="flex flex-col items-center space-y-6">
          <img src={Animalbased} alt="" className="w-fit" />
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-[#5F5E36] text-center font-semibold text-xl"
          >
            Animal-based Products
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#3E3E08] w-[26rem] text-center font-light"
          >
            Whey, casein, lactose, egg white albumen, gelatin, cochineal or
            carmine, isinglass, shellac, L-cysteine, animal-derived vitamin D3
            and fish-derived omega-3 fatty acids
          </motion.p>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default FoodsToAvoid;
