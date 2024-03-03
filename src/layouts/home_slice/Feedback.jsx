import { motion } from "framer-motion";
import Button from "../../components/button";
import Container from "../../components/container";
import axios from "axios";
import { useState } from "react";

const Feedback = () => {
  const BASE_URL =
    "https://backend-gwf-production.up.railway.app/api/feedback/";
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    event.preventDefault();
    try {
      const response = await axios.post(BASE_URL, { Email: email, Text: text });
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <section className="flex flex-col items-center gap-8 px-16 py-32 bg-primary-1">
      <Container className="!max-w-screen-lg text-center md:items-start !p-0 !m-0 space-y-4">
        <motion.h5
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-3xl font-light leading-9 tracking-tight text-center text-light-1 md:text-start md:text-5xl"
        >
          Give Us Your Feedback!
        </motion.h5>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1 }}
          viewport={{ once: true }}
          className="text-sm leading-7 text-center text-light-1 md:text-start font-extralight"
        >
          We are always working to improve our community and would love to hear
          your suggestions on how to grow Green Welfare Indonesia!
        </motion.p>
      </div>
      <form
        className="flex flex-col items-center max-w-screen-lg gap-4 w-full"
        onSubmit={handleSubmit}
      >
        <input
          id="Email"
          type="email"
          className="border bg-transparent border-transparent border-b-light-2 text-light-1 text-lg font-light focus:ring-light-2 focus:border-light-2 w-full px-2.5 py-4 hover:border-light-2 outline-none"
          placeholder="Email"
          required
          name="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          id="Text"
          type="text"
          className="border bg-transparent border-transparent border-b-gray-50 text-white text-lg font-light focus:ring-gray-200 focus:border-gray-200 w-full px-2.5 py-4 hover:border-gray-50 outline-none tracking-tight"
          placeholder="How can we improve?"
          rows="6"
          name="Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button className="hover:text-white hover:!bg-gray-500 !px-24 !py-6 !text-lg !font-extralight mt-4">
          Send
        </Button>
      </form>
    </section>
  );
};

export default Feedback;
