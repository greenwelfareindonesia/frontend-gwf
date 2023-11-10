import { motion } from "framer-motion";
import Container from "../../components/container";
import Button from "../../components/button";
import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <Container className="bg-[#5F5E36] flex flex-col justify-center items-center gap-16 md:gap-32 py-16 md:py-32">
      <h3 className="text-4xl text-white">FAQ</h3>
      <div className="flex flex-col md:flex-row gap-12 mx-4 sm:mx-28 lg:mx-40">
        <div className="flex flex-col gap-4 flex-1">
          <motion.h4
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="text-2xl text-white font-light leading-9 tracking-tight"
          >
            Where is Green Welfare&apos;s distribution Domicile?
          </motion.h4>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="text-sm font-extralight text-white leading-8"
          >
            Currently, Green Welfare is at a national scale and distributes
            around the areas of Jabodetabek. Though, we plan to broaden the
            areas of our distributions to other cities in need inside Indonesia.
          </motion.p>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <motion.h4
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="text-2xl text-white font-light leading-9 tracking-tight"
          >
            Where do the donations proceed to?
          </motion.h4>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="text-sm font-extralight text-white leading-8"
          >
            All donations that are made to Green Welfare Indonesia will be put
            to good use to distribute plant-based meals alongside sanitary kits
            or eco-friendly household goods to certain communities in need.
            Donations will also be allocated to GWF&apos;s hydroponics program
            to install sustainable hydroponics units in poverty-stricken areas
            to provide continuous food resources and to support Green
            Welfare&apos;s other environmental go-green projects.
          </motion.p>
        </div>
      </div>
      <Button className="w-max hover:text-[#3E3E08]/80 hover:!bg-gray-400">
        <Link to="/donate">Donate</Link>
      </Button>
    </Container>
  );
};

export default Faq;
