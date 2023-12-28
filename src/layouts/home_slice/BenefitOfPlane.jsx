import { motion } from "framer-motion";
import Background from "../../components/background";
import Filter from "../../components/filter";
import { planted_based_image } from "../../assets/home-image";

const contentList = [
  { title: "Conserve", description: "/1m² of Forest Land" },
  { title: "Save", description: "1,388L of Clean Water" },
  { title: "Reduce", description: "3 Kg of CO²" },
];

const BenefitOfPlane = () => {
  return (
    <Background src={planted_based_image} className="min-h-500 !items-end">
      <Filter />
      <div className="w-full space-y-16 md:space-y-32 z-1">
        <h1 className="px-4 mt-12 text-2xl font-normal text-center md:mt-0 text-light-1 md:text-4xl">By consuming one plant-based meal you will:</h1>
        <ul className="grid w-full grid-cols-1 md:grid-cols-3">
          {contentList.map((item, index) => (
            <li key={index} className="py-8 space-y-4 text-center text-light-1 md:py-16 bg-filter-1">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="text-2xl font-light"
              >
                {item.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="text-base font-light"
              >
                {item.description}
              </motion.p>
            </li>
          ))}
        </ul>
      </div>
    </Background>
  );
};

export default BenefitOfPlane;
