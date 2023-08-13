import tumblrImage from "../../assets/tumblr-image2.webp";
import ImageSlider from "../../components/ImageSlider";
import ClimateWishesBg from "../../assets/ClimateWishesBg.png";
import InstagramIcon from "../../assets/Instagram.webp";
import YoutubeIcon from "../../assets/Youtube.webp";
import LinkedinIcon from "../../assets/Linkedin.webp";
import { CoreValues, Header, Navbar, OurRoots, PrimeGoals } from "../../components";

const Home = () => {
  const slides = [
    {
      title: "Maria, 16, Canberra",
      desc: "I hope that in 2021, everyone takes more action and rewires the negative mindset of believing that their effort does not matter. By everyone, I do not simply just mean world leaders and organizations, but all individuals. It is hard to believe that our actions may mean a lot in a world with more than 7 billion people, but it truly does. Whether it be as simple as having a “meat-free week” or picking up more rubbish, every effort we make counts: it’s one less animal prevented from getting slaughtered and one cleaner, unpolluted environment. Ultimately, I hope that we can all encourage one another to do our very best for the sake of the Earth.",
    },
    {
      title: "Danya, 14, Tangerang",
      desc: "With less than a decade left before climate change is irreversible, I hope that we can all start making a change, both systematically and individually. Because climate damage and the environmental regression is no longer our future, but has been and still is our present. With our obligation to protect and save the earth and all its people, especially those gravely affected environmentally, taking the step individually and also pressuring change systematically, I hope that we will win the war against climate change.",
    },
    {
      title: "Fiza, 20, Jakarta",
      desc: "I hope for 2021 to be a year of change. For it to be a year filled with climate action and public awareness. We’ve made great progress over the last few years. From environmentalists being mocked and called “tree huggers” in the 90s and early 2000s to it becoming the new normal. I hope for 2021 to be the year where action is taken not only by the people, but also by politicians; for regulations to be implemented and improved. It is what is needed.",
    },
    {
      title: "Hanum, 20, Bandung",
      desc: "With the current trajectory and also as a by-product of COVID-19, I believe that 2021 will be a pivotal moment for us in terms of climate action and global change. As an activist, I hope that the action we take will inspire others to be aware and also fight to preserve our only planet to live, Earth. We must stand and fight to make a difference. We can't stagnate or just hope things get better on their own because they won't. So, we have to recruit as many people as we can to join and voice our concern for our planet. However, there are limitations on what we, as a youth environmental activist, can do to drive forth change, so we must press all world leaders and politicians who have the authorities to adopt climate legislation. I hope that this year we will be able to implement policies that really have a significant impact on our current climate in the hope of a better future for the next generation.",
    },
    {
      title: "Nala, 16, Bekasi",
      desc: "Sometimes I wonder why people believe in science when it comes to COVID-19, but not the climate crisis. This year, i hope to see a global mobalization towards the climate crisis not only from ourselves, but from every country and every world leader. We cannot afford to make debts of solidarity and work separately in the fight for a climate-safe future below 1.5 degrees. I can’t enforce people to take action, but I can tell them that if in 30 years time we haven’t acted on this climate issue, we will look back to today as we stand on a ruined and uninhabitable planet; and we will wish that we took more action.",
    },
    {
      title: "Mora, 16, Bogor",
      desc: "To be completely honest, my knowledge about climate change is very limited. I was not aware that this is a serious problem for our earth until last year; however, I really hope that this year we could together take an action to the environmental issues surrounding us and take this matter seriously. We are in no position to wait to make a change and to protect our planet and so I wish 2021 could be a great start for us to defend our earth.",
    },
    {
      title: "Anya, 13, Jakarta",
      desc: "I believe that for the environment, 2021 will be different. The winds of political change will continue to shake up the environment and make up for the multitude of actions against the environment, but not entirely. It is the start of a journey, but the end goal is coming, and the end goal is evident as well. It is for a green, sustainable future where the environment, with the people, thrive, coexisting with one another. For this future to become a reality, what we need is to continue spreading the message that the environment will one day get better, to connect the dots, and communicate so that in the end, we can form a picture: a picture for a better 2021 and that all starts with a better environment.",
    },
    {
      title: "Nessa, 18, Bekasi",
      desc: "2020 was a tough year for all of us, but that does not justify that we should treat 2021 the same. I hope that in 2021, all of us will be more caring towards our environment, be it through campaigning for climate issues or simply by adopting a more eco-friendly lifestyle. Although difficult, I believe that we can all create positive change for the betterment of the future if we all have the willingness to do so. No race, language, ethnicity, gender, or age should stop us to create a better world for all in 2021 and the years to come.",
    },
    {
      title: "Martha, 19, Bandung",
      desc: "I hope it doesn't require more hazardous climate events to make every single person ditch their environment-destructing habits. I believe that everyone should have a sense of climate emergency and give maximum effort to help each other in this crisis, namely the ones who are affected the most. Treating this crisis as an urgent matter should be mandatory not only for stakeholders, but also for all of us as decent human beings.",
    },
    {
      title: "Nifa, 16, Cikarang",
      desc: "I believe and hope that 2021 will be a year where many people will start to open their views and take action on environmental management. Not only the government or the initiation of social movements, i hope everyone on earth will take part and contribute in overcoming climate change because this earth will soon be damaged if we all do not take care or even care about it. Start with yourself and become a changemaker.",
    },
  ];

  return (
    <>
      <Navbar />
      <Header />
      <OurRoots />
      <PrimeGoals />
      <CoreValues />
      {/* <VideoSection /> */}
      {/* Climate Wishes Header */}
      <section style={{ backgroundImage: `url(${ClimateWishesBg})` }} className="h-[25rem] bg-cover bg-center">
        <div className="flex flex-col justify-center h-full">
          <h3 className="mb-5 text-center text-white">Youth Climate Advocates Share Their Hopes For 2021</h3>
          <h2 className="text-4xl text-center text-white font-inter">My Climate Wishes</h2>
        </div>
      </section>
      {/* Carousel Section */}
      <section className="pb-16 pt-28">
        <div className="w-full h-[280px] mx-auto my-0">
          <ImageSlider slides={slides} parentWidth={1519} />
        </div>
      </section>
      {/* FAQ Section */}
      <section className="bg-[#5F5E36] flex flex-col justify-center pt-8 pb-4 lg:pt-28 lg:pb-24">
        <h3 className="mb-6 text-4xl text-center text-white lg:mb-24">FAQ</h3>
        <div className="lg:flex lg:justify-center mb-28">
          <div className="ml-2 mb-8 lg:mb-0 mr-8 lg:h-[18rem]">
            <h4 className="text-xl mb-2 text-white lg:mb-8 w-[21rem]">Where is Green Welfare&apos;s distribution Domicile?</h4>
            <p className="w-[26.5rem] text-xs text-white lg:text-sm leading-7">
              Currently, Green Welfare is at a national scale and distributes around the areas of Jabodetabek. Though, we plan to broaden the areas of
              our distributions to other cities in need inside Indonesia.
            </p>
          </div>
          <div className="ml-2 lg:ml-8 lg:h-[18rem]">
            <h4 className="text-xl h-14 text-white lg:mb-8 w-[21rem]">Where do the donations proceed to?</h4>
            <p className="w-[26.5rem] text-xs text-white lg:text-sm leading-7">
              All donations that are made to Green Welfare Indonesia will be put to good use to distribute plant-based meals alongside sanitary kits
              or eco-friendly household goods to certain communities in need. Donations will also be allocated to GWF&apos;s hydroponics program to
              install sustainable hydroponics units in poverty-stricken areas to provide continuous food resources and to support Green Welfare&apos;s
              other environmental go-green projects.
            </p>
          </div>
        </div>
        <button
          className="text-[#3E3E08] bg-white rounded-sm w-fit mx-auto px-5 py-2 cursor-pointer 
          hover:bg-[#3E3E08] hover:text-white transition duration-500 ease-in-out"
        >
          Donate
        </button>
      </section>
      {/* Merch Section */}
      <section className="pt-12 lg:pt-24 lg:pb-20">
        <div>
          <h4 className="text-[#5F5E36] text-center font-inter text-2xl mb-8">Get our Merch</h4>
          <p className="text-[#3E3E08] text-center font-inter text-base mb-20">
            Spend it for what it&apos;s worth - 100% of the revenue will be directed to <br /> support our non-profit programs and operational costs!
          </p>
        </div>
        <div className="relative flex flex-col lg:justify-center lg:flex-row">
          <div>
            <img src={tumblrImage} alt="Tumblr Image" className="lg:w-[42rem] lg:h-[40rem] lg:mr-3" />
            <button
              className="bg-white px-5 py-2 rounded-sm text-[#3E3E08] cursor-pointer 
          hover:bg-[#3E3E08] hover:text-white transition duration-500 ease-in-out absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
           lg:static lg:hidden"
            >
              Buy now
            </button>
          </div>
          <div className="w-[42rem] h-[40rem] bg-[#3E3E08] ml-3  justify-center items-center hidden lg:flex lg:visible">
            <button
              className="bg-white px-5 py-2 rounded-sm text-[#3E3E08] cursor-pointer 
          hover:bg-[#3E3E08] hover:text-white transition duration-500 ease-in-out"
            >
              Buy now
            </button>
          </div>
        </div>
      </section>
      {/* Feedback Form */}
      <div className="bg-[#5F5E36] pb-44 pt-28 flex flex-col items-center">
        <div className="w-[57rem] flex flex-col justify-center items-center">
          <h5 className="mb-4 text-2xl text-center text-white font-inter md:text-4xl md:text-left md:mb-6">Give Us Your Feedback!</h5>
          <p className="mb-6 text-sm text-center text-white w-60 font-inter md:w-full md:text-base">
            We are always working to improve our community and would love to hear your suggestions on how to grow Green Welfare Indonesia!
          </p>
        </div>
        <form className="flex flex-col items-center">
          <div>
            <input
              className="w-[15rem] md:w-[57rem] placeholder-white bg-[#5F5E36] pb-3 pl-2 border-b-2"
              type="email"
              name="email"
              maxLength={250}
              placeholder="Email"
            />
          </div>
          <div>
            <textarea
              className="w-[15rem] h-[5rem] text-white md:w-[57rem] md:h-[11.5rem] bg-[#5F5E36] border-b-2 placeholder:text-white pt-4"
              placeholder="How can we improve?"
            />
          </div>
        </form>
        <button
          className="bg-white px-10 py-3 md:px-20 md:py-5 rounded-sm text-[#5F5E36] font-inter mt-5 cursor-pointer 
          hover:bg-[#3E3E08] hover:text-white transition duration-500 ease-in-out"
          type="submit"
        >
          Send
        </button>
      </div>
      {/* Footer */}
      <div>
        <div className="relative pt-10 pb-20">
          <h6 className="text-[#3E3E08] text-center font-inter text-lg font-bold">Green Welfare Indonesia</h6>
          <p className="text-[#3E3E08] text-center font-inter text-xs mt-5 mb-1 cursor-pointer">greenwelfare.id@gmail.com</p>
          <p className="text-[#3E3E08] text-center font-inter font-bold">Supported by ASEAN Youth Organization</p>
          <div className="flex justify-center w-full">
            <div className="absolute flex space-x-2 bottom-1 ml-">
              <img src={InstagramIcon} alt="instagram icon" className="cursor-pointer" />
              <img src={YoutubeIcon} alt="youtube icon" className="cursor-pointer" />
              <img src={LinkedinIcon} alt="linkedin icon" className="cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="bg-[#3E3E08] font-inter text-white text-center text-xs py-2">©2023 by Green Welfare Indonesia</div>
      </div>
    </>
  );
};

export default Home;
