import { motion } from "framer-motion";

import { header_image } from "../../assets/about-image";
import Background from "../../components/background";
import Container from "../../components/container";

const Header = () => {
  return (
    <section className="space-y-8 md:space-y-16">
      <Background src={header_image} className="min-h-400 md:min-h-600" />
      <Container className="mx-8 space-y-4 text-center md:space-y-8 !px-8 !mb-32">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-3xl text-center text-primary-2 font-inter md:text-5xl"
        >
          About Us
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-xl font-light text-center text-dark"
        >
          Turning Goodwill Into Action
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="w-full mb-12 font-light leading-7 text-center text-dark lg:leading-8"
        >
          After releasing the many cruel exploitations to animals for the sake of human consumption followed up with large carbon footprints in the
          proceedings; and the countless 19.4 million homeless people in our country who are still going overnight with striking hunger pains, Green
          Welfare Indonesia tends to make an impact to overcome these ongoing issues that are occurring in our country today. Established in 2020,
          Green Welfare Indonesia is a youth-led organization driven by compassion and a strong foundation of goodwill that strives on the social and
          environmental sector. Since our launch, Green Welfare has committed to 3 prime three goals from the UN Sustainable Goals, to End hunger,
          Climate Action and ensure Responsible Consumption. Green Welfare Indonesia also aims to promote sustainable agriculture and provide
          environmental education including eco-friendly lifestyles to encourage youths and millennials to undergo a more responsible diet as well as
          executing other go-green projects that advocates for carbon neutrality.
        </motion.p>
      </Container>
    </section>
  );
};

export default Header;
