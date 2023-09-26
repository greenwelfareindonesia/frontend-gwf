import Container from "../../components/container";
import Image from "../../components/container/Image";
import image_contact from "../../assets/image_contact.png";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <>
      <Navbar />
      <Container className="flex flex-col md:flex-row-reverse px-0 md:px-16 my-16">
        <div className="w-full h-full flex-1">
          <Image src={image_contact} className="h-[400px] md:h-[150vh] !bg-top" />
        </div>
        <div className="bg-[#5F5E36] px-4 py-16 flex-1 flex flex-col justify-center items-center gap-8">
          <div className="flex flex-col justify-center items-center max-w-screen-lg gap-4 w-full px-0 md:px-8">
            <motion.h5
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="text-white text-center text-2xl md:text-4xl font-normal leading-9 md:leading-normal tracking-wider"
            >
              Contact Green Welfare Indonesia
            </motion.h5>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 1 }}
              viewport={{ once: true }}
              className="text-white text-center text-sm font-light leading-7"
            >
              Get in touch with Green Welfare Indonesia to learn more about our work, how you can
              get involved and for collaborations or partnerships.
            </motion.p>
          </div>
          <form className="flex flex-col items-center max-w-screen-lg gap-4 w-full px-0 md:px-8">
            <div className="w-full">
              <input
                type="text"
                className="border bg-transparent border-transparent border-b-white text-white text-base font-light focus:ring-white focus:border-white w-full p-2.5 hover:border-white outline-none tracking-tight placeholder:text-white"
                placeholder="Name"
                required
              />
            </div>
            <div className="w-full">
              <input
                type="email"
                className="border bg-transparent border-transparent border-b-white text-white text-base font-light focus:ring-white focus:border-white w-full p-2.5 hover:border-white outline-none tracking-tight placeholder:text-white"
                placeholder="Email"
                required
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                className="border bg-transparent border-transparent border-b-white text-white text-base font-light focus:ring-white focus:border-white w-full p-2.5 hover:border-white outline-none tracking-tight placeholder:text-white"
                placeholder="Subject"
                required
              />
            </div>
            <div className="w-full">
              <textarea
                className="border bg-transparent border-transparent border-b-white text-white text-base font-light focus:ring-white focus:border-white w-full py-2.5 px-4 hover:border-white outline-none tracking-tight placeholder:text-white"
                placeholder="Type your message here"
                rows="6"
              />
            </div>
            <div className="w-full sm:text-end">
              <Button className="hover:text-white hover:!bg-gray-300 !py-4 !text-lg !font-light mt-4 w-full">
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
