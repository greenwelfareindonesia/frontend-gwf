import * as React from "react";

import { motion } from "framer-motion";

import { mission_image } from "../../assets/about-image";

import Image from "../../components/image";
import Background from "../../components/background";
import Filter from "../../components/filter";

const Mission = () => {
  const [isShowBg, setShowBg] = React.useState(false);
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    if (containerRef.current == null) return;

    const observer = new ResizeObserver((entries) => {
      const container = entries[0]?.target;
      if (container == null) return;
      setShowBg(container.clientWidth < 943);
    });
    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [isShowBg]);

  return (
    <section ref={containerRef} className="relative block lg:flex">
      <Image src={mission_image} className="flex-1 hidden lg:w-600 2xl:w-800 lg:block" />
      <Background
        src={isShowBg && mission_image}
        className="flex-col flex-1 gap-8 px-8 py-24 text-center lg:px-16 text-light-1 lg:text-primary-2 lg:text-start"
      >
        {isShowBg && <Filter />}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          viewport={{ once: true }}
          className="w-full pb-4 text-3xl font-medium z-1 md:text-5xl"
        >
          Mission
        </motion.h1>
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.7, delay: 1.2 }}
          viewport={{ once: true }}
          className="text-lg font-normal z-1 drop-shadow-2xl md:text-2xl"
        >
          Our missions at Green Welfare Indonesia come in three parts:
        </motion.h4>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.9, delay: 1.4 }}
          viewport={{ once: true }}
          className="font-light z-1 text-md md:leading-relaxed"
        >
          Mobilizing youth and local communities to engage in environmental & social actions and awareness campaigns to strengthen the understanding 
          of the importance in preserving our environment and societies.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.1, delay: 1.6 }}
          viewport={{ once: true }}
          className="font-light z-1 text-md md:leading-relaxed"
        >
          Providing in-depth climate education to broaden the interdisciplinary awareness of challenges and solutions related to climate change, equipping 
          the younger generation with the theoretical knowledge needed to act efectively and contribute to the future.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.3, delay: 1.8 }}
          viewport={{ once: true }}
          className="font-light z-1 text-md md:leading-relaxed"
        >
          Promoting the use of nature-based solutions that rely on grassroots wisdom, involving youth and local communities to 
          actively participate in nature-based tools against climate change.
        </motion.p>
      </Background>
    </section>
  );
};

export default Mission;
