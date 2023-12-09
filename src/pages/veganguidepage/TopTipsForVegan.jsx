import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import EnvironmentalCard from "./EnvironmentalCard";

function TopTipsForVegan() {
  const card = [
    {
      title: "Don't Worry About What Other People Think",
      desc: "Veganism is becoming more and more popular, but some people still think it's extreme and/or unhealthy. Some people may make fun of your decision, while others may be concerned that you aren't going to be getting all the nutrients you need. You can try to explain your decision to them, but I find it easiest to not argue, and just try to block out any negativity. You know that you are doing what you want to do, and that's what matters.",
    },
    {
      title: "Stock Your Pantry",
      desc: "Once you know what food items you can eat as a vegan, it's a good idea to stock up on plenty of vegan foods so that you always have food available when you're hungry. If you are fully committed, you may even want to get rid of the non-vegan foods you have. If you choose to do this, I recommend giving it away to friends or family members so that you don't waste any food. If you live with someone who isn't vegan, it may be more challenging for you, but if you have all your vegan food stocked, it will be easier to stick with it.",
    },
    {
      title: "Plant Your Meals",
      desc: "Some people do just fine without planning their meals, but in the beginning, this could really help you stay on track. Even just writing down a rough idea of what you're going to eat would be helpful. For example, tofu scramble for breakfast, collard wraps for lunch, veggies and hummus for a snack, and chickpea curry for dinner. Then you can buy everything you need at the beginning of each week and batch cook some meals.",
    },
    {
      title: "Don't Be Too Hard On Yourself",
      desc: "If you do happen to get off track and eat some non-vegan food, don't beat yourself up. Many people who are vegan now, tried going vegan and failed at some point.",
    },
    {
      title: "Read Up On Plant-Based Nutrition",
      desc: "A lot of people dive into being vegan without knowing what nutrients they need and what supplements they should take. It you aren't eating well-rounded meals, you could end up with deficiencies no matter what kind of diet you eat.",
    },
    {
      title: "Get Blood Work Done So That You Know What To Supplement",
      desc: "A lot of people wonder what supplements they should take when they are vegan. You will likely need a B12 supplement, but you won't know if you need anything else unless you get blood work done. If you have any deficiencies, start taking supplements and get your blood checked again in 3 months or so, to ensure that the supplements are working.",
    },
    {
      title: "Watch A Documentary When You Lose Motivation",
      desc: "Even though you're probably going vegan because you care about animal well-being, you may lose motivation at some point. Maybe you'll have some non-vegan cravings, or you'll really want to buy those leather shoes. When this happens, it may help to watch some documentaries to remind yourself of why you started this in the first place.",
    },
    {
      title: "Education & Outreach",
      desc: "Most of our efforts pertaining to this program involve studying new approaches and developing innovative ways to implement them. We evaluate our success in this field by gathering qualitative and quantitative data, and using that information to measure shifts and changes from our baseline measurements.",
    },
    {
      title: "Community Development",
      desc: "We see every challenge as an opportunity, and this initiative helps us ensure that our partners are better prepared to manage the unique situations they find themselves in. We are invested in an innovative approach that empowers our community and delivers the support they need, when they need it.",
    },
  ];
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <section className="py-20 xl:px-44 px-4">
        <h1 className="text-primary-1 text-4xl text-center mb-7">
          Top Tips For Going Vegan
        </h1>
        <h2 className="text-center text-primary-1 font-light">
          As mentioned, going vegan for beginners is challenging. Here are some
          tips to keep in mind while you transition to veganism:
        </h2>
        <div className="space-y-10 mt-20">
          {card.map((item, index) => (
            <EnvironmentalCard
              key={index}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default TopTipsForVegan;
