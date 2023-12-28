import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import Button from "../../components/button";

const Faq = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-16 py-16 bg-primary-1 md:gap-32 md:py-32 text-light-1">
      <h3 className="text-5xl font-medium">FAQ</h3>
      <div className="flex flex-col gap-12 mx-4 md:flex-row sm:mx-28 lg:mx-40">
        <div className="flex flex-col flex-1 gap-4">
          <motion.h4
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="text-2xl font-light leading-9 tracking-tight"
          >
            Where is Green Welfare&apos;s distribution Domicile?
          </motion.h4>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="text-sm leading-8 font-extralight"
          >
            Currently, Green Welfare is at a national scale and distributes around the areas of Jabodetabek. Though, we plan to broaden the areas of
            our distributions to other cities in need inside Indonesia.
          </motion.p>
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <motion.h4
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="text-2xl font-light leading-9 tracking-tight"
          >
            Where do the donations proceed to?
          </motion.h4>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="text-sm leading-8 font-extralight"
          >
            All donations that are made to Green Welfare Indonesia will be put to good use to distribute plant-based meals alongside sanitary kits or
            eco-friendly household goods to certain communities in need. Donations will also be allocated to GWF&apos;s hydroponics program to install
            sustainable hydroponics units in poverty-stricken areas to provide continuous food resources and to support Green Welfare&apos;s other
            environmental go-green projects.
          </motion.p>
        </div>
      </div>
      <Button intent="white" label="donate">
        <Link to="/donate">Donate</Link>
      </Button>
    </section>
  );
};

export default Faq;
