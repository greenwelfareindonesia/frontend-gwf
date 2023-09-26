import { motion } from "framer-motion";
import { image_farming, image_human, image_vegetables } from "../../assets/resource-image";
import Button from "../../components/button";
import Container from "../../components/container";
import Image from "../../components/container/Image";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

const resourceContent = [
  {
    image: image_vegetables,
    title: "Plant-based hub",
    desc: "Everything you need to know about becoming a plant-based hero and transitioning to a vegan diet!",
  },
  {
    image: image_human,
    title: "Climate Action Hub",
    desc: "Confused on where to start your climate activism? We have the perfect guide to help you begin your climate action!",
  },
  {
    image: image_farming,
    title: "Urban Agriculture Hub",
    desc: "Your basic 101 guide to urban agriculture and hydroponics! Easy home and DIY resources.",
  },
];

const Resource = () => {
  return (
    <>
      <Navbar />
      <section className="my-8 lg:my-20">
        <div className="flex flex-col gap-4 lg:gap-8 px-8">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0 }}
            viewport={{ once: true }}
            className="font-normal text-[#3E3E08] tracking-wide text-2xl text-center lg:text-5xl"
          >
            Resource Hub
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 1 }}
            viewport={{ once: true }}
            className="text-base lg:text-lg text-black text-center leading-6 font-light"
          >
            We&apos;re here to help you with the basic resources you need to start your climate
            journey!
          </motion.p>
        </div>
        <Container className="flex flex-col lg:flex-row my-12 lg:mt-24">
          {resourceContent.map((item, key, last) => (
            <div key={key}>
              <Image
                src={item.image}
                className="flex-col h-[400px] lg:h-[800px] bg-top text-center px-16 lg:px-0 lg:justify-end"
              >
                <div className="flex flex-col gap-4 bg-transparent px-0 py-0 lg:gap-8 lg:px-12 lg:py-32 lg:bg-[#5F5E36]/50">
                  <motion.h3
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0 }}
                    viewport={{ once: true }}
                    className="text-white text-2xl font-light"
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, delay: 1 }}
                    viewport={{ once: true }}
                    className="text-white text-base font-extralight leading-8"
                  >
                    {item.desc}
                  </motion.p>
                  <Button className="hover:!bg-gray-300 w-max mx-auto">
                    {last.length === key + 1 ? "IN PROGRESS" : "View"}
                  </Button>
                </div>
              </Image>
            </div>
          ))}
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Resource;
