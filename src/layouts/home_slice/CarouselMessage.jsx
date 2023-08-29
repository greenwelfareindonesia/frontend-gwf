import Slider from "../../components/slider";
import Container from "../../components/container";

const CarouselMessage = () => {
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
    <Container>
      <Slider slides={slides} parentClassName="!h-[100vh]" />
    </Container>
  );
};

export default CarouselMessage;
