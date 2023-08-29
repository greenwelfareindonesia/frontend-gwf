import { motion } from "framer-motion";
import { logo_climateaction, logo_endhunger, logo_responsible } from "../../assets/about-image";
import Container from "../../components/container";
import Button from "../../components/button";

const iconList = [
  { name: "End Hunger", icon: logo_endhunger },
  { name: "Climate Action", icon: logo_climateaction },
  { name: "Responsible Consumption and Production", icon: logo_responsible },
];

const DevGoals = () => {
  return (
    <Container className="bg-[#5F5E36] py-32 grid place-items-center">
      <div className="grid max-w-screen-lg gap-16 place-items-center">
        <h1 className="mx-8 mb-0 text-2xl text-center text-white lg:mx-0 font-inter md:text-4xl md:mb-8">
          UN Sustainable Development Goals Green Welfare is focusing on:
        </h1>
        <ul className="flex flex-col gap-16 mb-8 lg:gap-32 lg:flex-row">
          {iconList.map((item, key) => (
            <li key={key} className="flex flex-col items-center flex-1 gap-16">
              <img src={item.icon} className={`${item.name === "End Hunger" ? "w-16 h-10" : "w-10 h-10"}`} alt="" />
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="text-xl text-center text-white font-extralight"
              >
                {item.name}
              </motion.p>
            </li>
          ))}
        </ul>
        <Button className="hover:bg-gray-400">Know more about UNSDGs</Button>
      </div>
    </Container>
  );
};

export default DevGoals;
