import { motion } from "framer-motion";
import Background from "../../components/background";
import { biodiversity_svg, compassionate_svg, core_values_image, innovative_svg, visionary_svg } from "../../assets/home-image";

const iconList = [
  { name: "Compassionate", icon: compassionate_svg },
  { name: "Biodiversity Devotee", icon: biodiversity_svg },
  { name: "Innovative", icon: innovative_svg },
  { name: "Visionary", icon: visionary_svg },
];

const CoreValues = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row">
      <div className="flex flex-col items-center justify-center flex-1 gap-20 lg:min-h-500 bg-primary-1">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="hidden text-4xl font-light text-light-1 lg:block"
        >
          Core Values
        </motion.h1>
        <ul className="grid grid-cols-1 gap-16 py-16 lg:py-2 md:grid-cols-2 lg:gap-8">
          {iconList.map((item, index) => (
            <li key={index} className="flex flex-col items-center justify-center gap-8">
              <img src={item.icon} className="w-12 lg:w-10" alt="" />
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="text-lg font-light text-light-1 lg:text-base"
              >
                {item.name}
              </motion.p>
            </li>
          ))}
        </ul>
      </div>
      <Background src={core_values_image} className="flex-1 min-h-400 lg:min-h-600">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="block text-4xl font-normal text-light-1 lg:hidden"
        >
          Core Values
        </motion.h1>
      </Background>
    </section>
  );
};

export default CoreValues;
