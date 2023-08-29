import { motion } from "framer-motion";
import Button from "../../components/button";
import Container from "../../components/container";

const Feedback = () => {
  return (
    <Container className="bg-[#5F5E36] flex flex-col items-center px-16 gap-8 py-32">
      <div className="flex flex-col justify-center items-center md:items-start max-w-screen-lg gap-4 w-full">
        <motion.h5
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-white text-center md:text-start text-3xl md:text-5xl font-light leading-9 tracking-tight"
        >
          Give Us Your Feedback!
        </motion.h5>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1 }}
          viewport={{ once: true }}
          className="text-white text-center md:text-start text-sm font-extralight leading-7"
        >
          We are always working to improve our community and would love to hear your suggestions on how to grow Green Welfare Indonesia!
        </motion.p>
      </div>
      <form className="flex flex-col items-center max-w-screen-lg gap-4 w-full">
        <input
          type="email"
          className="border bg-transparent border-transparent border-b-gray-50 text-white text-lg font-light focus:ring-gray-200 focus:border-gray-200 w-full px-2.5 py-4 hover:border-gray-50 outline-none tracking-tight"
          placeholder="Email"
          required
        />
        <textarea
          className="border bg-transparent border-transparent border-b-gray-50 text-white text-lg font-light focus:ring-gray-200 focus:border-gray-200 w-full px-2.5 py-4 hover:border-gray-50 outline-none tracking-tight"
          placeholder="How can we improve?"
          rows="6"
        />
        <Button className="hover:text-white hover:!bg-gray-500 !px-24 !py-6 !text-lg !font-extralight mt-4">Send</Button>
      </form>
    </Container>
  );
};

export default Feedback;
