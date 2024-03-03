import { motion } from "framer-motion";
import Container from "../../components/container";
import Button from "../../components/button";
import Input from "../../components/input";
import { useForm } from "react-hook-form";

const Article = () => {
  const { register } = useForm();

  return (
    <Container className="px-4 py-32 space-y-8">
      <div className="space-y-4 text-center">
        <motion.h5
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-4xl font-normal leading-9 tracking-tight text-primary-2 md:text-5xl"
        >
          Submit an Article
        </motion.h5>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1 }}
          viewport={{ once: true }}
          className="text-base font-light leading-7 text-primary-2"
        >
          Are you interested in writing articles on environmental or climate
          change topics? Or do you want to inspire other people to take climate
          action through literacy? Submit your article now to get featured in
          GWF&rsquo;s Eco-pedia!
        </motion.p>
      </div>
      <form className="space-y-8">
        <Input
          model="article"
          register={register}
          labelClassName="!text-lg !font-normal"
          type="email"
          name="Email"
          title="Email"
          placeholder="(or put Anonymous!)"
        />
        <Input model="article" register={register} labelClassName="!text-lg !font-normal" type="text" name="FullName" title="Full Name" />
        <Input model="article" register={register} labelClassName="!text-lg !font-normal" type="text" name="Topic" title="Topic" />
        <div className="w-full">
          <label htmlFor="article" className="block mb-2 text-lg font-normal text-primary-2">
            Write down your article here!
          </label>
          <textarea
            id="article"
            className="w-full p-4 text-lg font-light tracking-tight bg-transparent border border-transparent outline-none border-b-primary-2 text-primary-2 focus:ring-primary-2 focus:border-primary-2 hover:border-primary-2 placeholder:text-primary-2/90"
            placeholder="(Minimum words of 300)"
            rows="6"
          />
        </div>
        <Button size="large" className="!px-8 block">
          Submit my Article
        </Button>
      </form>
    </Container>
  );
};

export default Article;
