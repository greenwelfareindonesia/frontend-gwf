import { motion } from "framer-motion";
import { header_image } from "../../assets/about-image";
import Container from "../../components/container";
import Image from "../../components/container/Image";

const Header = () => {
  return (
    <Container>
      <Image src={header_image} className="h-[500px]" />
      <div className="flex flex-col items-center justify-center gap-4 mx-8 mt-10 lg:gap-8">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-[#3E3E08] text-center font-inter text-2xl md:text-4xl mb-0 md:mb-8"
        >
          About Us
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-center text-black"
        >
          Turning Goodwill Into Action
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-center text-black w-full font-light text-sm lg:w-[54rem] mb-12 leading-7 lg:leading-8"
        >
          After realising the many cruel exploitations to animals for the sake of human consumption followed up with large carbon footprints in the
          proceedings; and the countless 19.4 million homeless people in our country who are still going overnight with striking hunger pains, Green
          Welfare Indonesia tends to make an impact to overcome these ongoing issues that are occurring in our country today. Established in 2020,
          Green Welfare Indonesia is a youth-led organization driven by compassion and a strong foundation of goodwill that strives on the social and
          environmental sector. Since our launch, Green Welfare has committed to 3 prime three goals from the UN Sustainable Goals, to End hunger,
          Climate Action and ensure Responsible Consumption. Green Welfare Indonesia also aims to promote sustainable agriculture and provide
          environmental education including eco-friendly lifestyles to encourage youths and millennials to undergo a more responsible diet as well as
          executing other go-green projects that advocates for carbon neutrality.
        </motion.p>
      </div>
    </Container>
  );
};

export default Header;
