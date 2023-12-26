import { motion } from "framer-motion";
import Container from "../../components/container";
import Button from "../../components/button";
import { useState } from "react";
import axios from "axios";

const Article = () => {
  const BASE_URL = "https://backend-gwf-production.up.railway.app/api/article/";
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [articlemessage, setArticlemessage] = useState("");

  const handleSubmit = async (e) => {
    event.preventDefault();
    try {
      const response = await axios.post(BASE_URL, {
        FullName: fullname,
        Email: email,
        Topic: topic,
        ArticleMessage: articlemessage,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <Container className="flex flex-col items-center px-4 gap-8 py-32">
      <div className="flex flex-col justify-center items-center max-w-screen-lg gap-4 w-full">
        <motion.h5
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-[#3E3E08] text-center text-4xl md:text-5xl font-normal leading-9 tracking-tight"
        >
          Submit an Article
        </motion.h5>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1 }}
          viewport={{ once: true }}
          className="text-[#3E3E08] text-center text-base font-light leading-7"
        >
          Are you interested in writing articles on environmental or climate
          change topics? Or do you want to inspire other people to take climate
          action through literacy? Submit your article now to get featured in
          GWF&rsquo;s Eco-pedia!
        </motion.p>
      </div>
      <form
        className="flex flex-col items-center max-w-screen-lg gap-4 w-full"
        onSubmit={handleSubmit}
      >
        <div className="w-full">
          <label
            htmlFor="full_name"
            className="block mb-2 text-lg font-normal text-[#3E3E08]"
          >
            Full Name
          </label>
          <input
            id="full_name"
            type="text"
            name="FullName"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            className="border bg-transparent border-transparent border-b-[#3E3E08] text-[#3E3E08] text-lg font-light focus:ring-[#3E3E08] focus:border-[#3E3E08] w-full p-4 hover:border-[#3E3E08] outline-none tracking-tight placeholder:text-[#3E3E08]/90"
            placeholder="(or put Anonymous!)"
            required
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-normal text-[#3E3E08]"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border bg-transparent border-transparent border-b-[#3E3E08] text-[#3E3E08] text-lg font-light focus:ring-[#3E3E08] focus:border-[#3E3E08] w-full p-4 hover:border-[#3E3E08] outline-none tracking-tight"
            required
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="topic_article"
            className="block mb-2 text-lg font-normal text-[#3E3E08]"
          >
            Topic of Article
          </label>
          <input
            id="topic_article"
            type="text"
            name="Topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="border bg-transparent border-transparent border-b-[#3E3E08] text-[#3E3E08] text-lg font-light focus:ring-[#3E3E08] focus:border-[#3E3E08] w-full p-4 hover:border-[#3E3E08] outline-none tracking-tight"
            required
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="article"
            className="block mb-2 text-lg font-normal text-[#3E3E08]"
          >
            Write down your article here!
          </label>
          <textarea
            id="article"
            name="ArticleMessage"
            value={articlemessage}
            onChange={(e) => setArticlemessage(e.target.value)}
            className="border bg-transparent border-transparent border-b-[#3E3E08] text-[#3E3E08] text-lg font-light focus:ring-[#3E3E08] focus:border-[#3E3E08] w-full p-4 hover:border-[#3E3E08] outline-none tracking-tight placeholder:text-[#3E3E08]/90"
            placeholder="(Minimum words of 300)"
            rows="6"
          />
        </div>
        <div className="w-full sm:text-end">
          <Button className="!bg-[#3E3E08] text-white hover:!bg-[#3E3E08]/50 !px-8 !py-4 !text-lg !font-extralight mt-4 w-full sm:w-max">
            Submit my Article
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default Article;
