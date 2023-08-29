import { motion } from "framer-motion";
import { image_core_values, logo_biodiversity, logo_compassionate, logo_innovative, logo_visionary } from "../../assets/image";
import Container from "../../components/container";
import Image from "../../components/container/Image";

const iconList = [
  { name: "Compassionate", icon: logo_compassionate },
  { name: "Biodiversity Devotee", icon: logo_biodiversity },
  { name: "Innovative", icon: logo_innovative },
  { name: "Visionary", icon: logo_visionary },
];

const CoreValues = () => {
  return (
    <Container className="flex flex-col-reverse lg:flex-row">
      <div className="flex items-center justify-center gap-20 flex-col w-full h-full lg:h-[500px] shadow-none bg-[#5F5E36] flex-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="font-light text-white text-4xl hidden lg:block"
        >
          Core Values
        </motion.h1>
        <ul className="py-16 lg:py-2 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-8">
          {iconList.map((item, index) => (
            <li key={index} className="flex justify-center items-center flex-col gap-8">
              <img src={item.icon} className="w-12 lg:w-10" alt="" />
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="text-white font-light text-lg lg:text-base"
              >
                {item.name}
              </motion.p>
            </li>
          ))}
        </ul>
      </div>
      <Image src={image_core_values} className="h-[500px]">
        <div className="bg-black/20 w-full h-full grid place-items-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="font-normal text-white text-4xl block lg:hidden"
          >
            Core Values
          </motion.h1>
        </div>
      </Image>
    </Container>
  );
};

export default CoreValues;
