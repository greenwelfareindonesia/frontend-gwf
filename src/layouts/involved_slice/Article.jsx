import { motion } from "framer-motion";
import Container from "../../components/container";
import Button from "../../components/button";
import Input from "../../components/input";
import { useForm } from "react-hook-form";
import { useAddArticleInMainPage } from "../../features/article/service";

const Article = () => {
  const { register, handleSubmit } = useForm();

  const { mutate: addArticle, isPending } = useAddArticleInMainPage();

  const onSubmit = (data) => {
    const { email, topic, articleMessage, fullName } = data;

    addArticle({ email, topic, articleMessage, fullName });
  };

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
          Are you interested in writing articles on environmental or climate change topics? Or do you want to inspire other people to take climate
          action through literacy? Submit your article now to get featured in GWF&rsquo;s Eco-pedia!
        </motion.p>
      </div>
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <Input
          model="article"
          register={register}
          labelClassName="!text-lg !font-normal"
          type="email"
          name="email"
          title="Email"
          placeholder="(or put Anonymous!)"
        />
        <Input model="article" register={register} labelClassName="!text-lg !font-normal" type="text" name="fullName" title="Full Name" />
        <Input model="article" register={register} labelClassName="!text-lg !font-normal" type="text" name="topic" title="Topic" />
        <div className="w-full">
          <label htmlFor="article" className="block mb-2 text-lg font-normal text-primary-2">
            Write down your article here!
          </label>
          <textarea
            id="article"
            className="w-full p-4 text-lg font-light tracking-tight bg-transparent border border-transparent outline-none border-b-primary-2 text-primary-2 focus:ring-primary-2 focus:border-primary-2 hover:border-primary-2 placeholder:text-primary-2/90"
            placeholder="(Minimum words of 300)"
            rows="6"
            {...register("articleMessage")}
          />
        </div>
        <Button size="large" className={`!px-8 block ${isPending && "animate-pulse"}`}>
          Submit my Article
        </Button>
      </form>
    </Container>
  );
};

export default Article;
