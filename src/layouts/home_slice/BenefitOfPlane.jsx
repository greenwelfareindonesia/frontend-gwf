import { image_planebased } from "../../assets/image";
import { motion } from "framer-motion";
import Container from "../../components/container";
import Image from "../../components/container/Image";

const contentList = [
  { title: "Conserve", description: "/1m² of Forest Land" },
  { title: "Save", description: "1,388L of Clean Water" },
  { title: "Reduce", description: "3 Kg of CO²" },
];

const BenefitOfPlane = () => {
  return (
    <Container>
      <Image src={image_planebased} className="flex items-center flex-col gap-8">
        <h1 className="font-normal text-white text-2xl text-center px-4 pt-12 md:pt-32 md:text-4xl">By consuming one plant-based meal you will:</h1>
        <ul className="grid md:grid-cols-3 grid-cols-1 w-full mt-0 md:mt-32">
          {contentList.map((item, index) => (
            <li key={index} className="flex flex-col items-center py-8 md:py-16 gap-4 bg-[#5F5E36]/40 border-b border-[#3E3E08]">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="text-white font-light text-2xl"
              >
                {item.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="text-white font-extralight text-base"
              >
                {item.description}
              </motion.p>
            </li>
          ))}
        </ul>
      </Image>
    </Container>
  );
};

export default BenefitOfPlane;
