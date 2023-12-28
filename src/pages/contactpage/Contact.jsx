import { motion } from "framer-motion";

import image_contact from "../../assets/contact.webp";

import Container from "../../components/container";
import Image from "../../components/image";
import Button from "../../components/button";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Container className="!max-w-screen-xl flex flex-col !my-8 md:flex-row-reverse">
        <div className="flex-1 w-full h-full">
          <Image src={image_contact} className="min-h-400 md:min-h-500 !bg-top" />
        </div>
        <div className="flex-1 px-4 py-16 space-y-16 bg-primary-2">
          <div className="w-full gap-4 px-0 space-y-8 md:px-8">
            <motion.h5
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="text-2xl font-normal leading-9 text-center text-light-1 md:text-4xl md:leading-normal"
            >
              Contact Green Welfare Indonesia
            </motion.h5>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 1 }}
              viewport={{ once: true }}
              className="text-sm font-light leading-7 text-center text-light-1"
            >
              Get in touch with Green Welfare Indonesia to learn more about our work, how you can get involved and for collaborations or partnerships.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 1 }}
              viewport={{ once: true }}
              className="space-y-2 text-sm font-light text-center text-light-1"
            >
              <p>info@greenwelfare.org</p>
              <p>+62 812 8836 1624</p>
            </motion.div>
          </div>
          <form className="flex flex-col items-center w-full max-w-screen-lg gap-4 px-0 md:px-8">
            <div className="w-full">
              <input
                type="text"
                className="border bg-transparent border-transparent border-b-white text-light-1 text-base font-light focus:ring-white focus:border-white w-full p-2.5 hover:border-white outline-none tracking-tight placeholder:text-light-1"
                placeholder="Name"
                required
              />
            </div>
            <div className="w-full">
              <input
                type="email"
                className="border bg-transparent border-transparent border-b-white text-light-1 text-base font-light focus:ring-white focus:border-white w-full p-2.5 hover:border-white outline-none tracking-tight placeholder:text-light-1"
                placeholder="Email"
                required
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                className="border bg-transparent border-transparent border-b-white text-light-1 text-base font-light focus:ring-white focus:border-white w-full p-2.5 hover:border-white outline-none tracking-tight placeholder:text-light-1"
                placeholder="Subject"
                required
              />
            </div>
            <div className="w-full">
              <textarea
                className="border bg-transparent border-transparent border-b-white text-light-1 text-base font-light focus:ring-white focus:border-white w-full py-2.5 px-4 hover:border-white outline-none tracking-tight placeholder:text-light-1"
                placeholder="Type your message here"
                rows="6"
              />
            </div>
            <div className="w-full sm:text-end">
              <Button intent="white" className="!w-full">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
