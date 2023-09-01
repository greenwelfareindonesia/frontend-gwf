import {
  image_events,
  image_events_part1,
  image_events_part10,
  image_events_part11,
  image_events_part12,
  image_events_part13,
  image_events_part14,
  image_events_part15,
  image_events_part16,
  image_events_part17,
  image_events_part2,
  image_events_part3,
  image_events_part4,
  image_events_part5,
  image_events_part6,
  image_events_part7,
  image_events_part8,
  image_events_part9,
} from "../../assets/event-image";
import Container from "../../components/container";
import Image from "../../components/container/Image";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

const eventContent = [
  {
    image: image_events_part1,
    title: "Pajak Karbon Sebagai Solusi Krisis Iklim: Rencana dan Tantangan di Indonesia",
    desc: "The implementation of carbon taxes raises questions such as: Is this policy framework appropriate to provide a disincentive to dirty energy? And how can the practice of other jurisdictions that have regulated and implemented the value of the carbon economy be a lesson for Indonesia? This public discussion entitled “Carbon Tax as a Solution to the Climate Crisis: Challenges & Plans in Indonesia” explore the core solutions and challenges towards these issues.",
  },
  {
    image: image_events_part2,
    title: "GYT #5: Achieving Eco-Leadership & Climate Justice Wins 2022 Environmental Plans By University Student Organizers",
    desc: "With the rise of environmental issues, Indonesian youths are more proactive in voicing and taking roles for environmental sustainability. Together with 6 universities from various regions in Indonesia, Green YOUth Talks #5 has invited university student organizations to share, learn and discuss the important role of students in eco-leadership and climate advocacy.",
  },
  {
    image: image_events_part3,
    title: "Does Our Wellbeing Depend On The Health of The Planet?",
    desc: "Human health and the health of the planet Earth are an inseparable relationship. Together with the global Climate Justice Now movement and in the context of the upcoming Global Climate Strike, we have invited 3 prominent speakers to share their insights and views regarding the impact of climate change from medical and human health aspects.",
  },
  {
    image: image_events_part4,
    title: "TEDxGreenWelfare Countdown Summit: We can change Climate Change",
    desc: "With the ongoing global emergence of climate change affecting every aspect of life on Earth, Countdown is a half-day event organized by TEDxGreenWelfare as a global initiative to champion and accelerate solutions to the climate crisis, turning ideas into action by showcasing 10 TEDx Talks and Speakers. This year’s TEDxGreenWelfare Countdown initiative is focused on five subject pillars: energy, transport, materials, food and nature.",
  },
  {
    image: image_events_part5,
    title: "GYT #4: The Role of Youths in Maximizing Indonesia’s COP26 Climate Commitments",
    desc: "With the recent 26th UN Conference of Parties concluding this year, Green YOUth Talks #4 sheds upon Indonesia’s NDC Targets and pledges made in COP26 as well as the nation’s plan in achieving these targets through Green Sukuk.",
  },
  {
    image: image_events_part6,
    title: "GYT #3: Gerakan Menuju Sekolah yang Ramah Lingkungan",
    desc: "Green Youth Talks #3 talks about the urgency and importance in implementing environmental friendly schools in this determining era and aims to create a space for young student council leaders to discuss their roles in shifting their schools to become more eco-friendly.",
  },
  {
    image: image_events_part7,
    title: "UN Food Systems Summit Independent Dialogue: The Role of Youths in building a Regenerative Food Systems",
    desc: "An independent dialogue convened by Green Welfare Indonesia in the pathway of the UN Food Systems Summit 2021 with two keynote sessions showcasing how we can build regenerative food systems and the role of youths in the process, followed by a youth panel session to spark conversations and inputs around the UNFSS’s Action Tracks.",
  },
  {
    image: image_events_part8,
    title: "Fostering Sustainable Activism in the Climate Movement: Overcoming Anxiety & Burnouts",
    desc: "“Fostering Sustainable Activism in the Climate Movement: Overcoming Anxiety & Burnouts,” is a collaborative webinar organized by With Youth ID together and Green Welfare Indonesia. The first session highlighted the speaker’s personal journey and breakthrough of becoming an activist in their prospective movements followed with an interactive discussion revolving the anxiety & burnouts that they have experienced and how they got around their ups and downs.",
  },
  {
    image: image_events_part9,
    title: "GYT #2: The Future of Youth Entrepreneurship in Eco-businesses",
    desc: "In the pathway to net-zero emissions, championing young leaders to shift to a more sustainable economical supply chain as well as prioritising environmental development is crucial. How can we refocus youth entrepreneurship in eco-businesses to be the future of green economy?",
  },
  {
    image: image_events_part10,
    title: "GWF Earth Day 2021 Environmental Education Initiative: School Version",
    desc: "In honor of Earth Day 2021, Green Welfare has visited 20+ local schools virtually around the greater area of Jakarta to teach fundamental and basic environmental education to classrooms and students about our alarming climate emergency and how they can contribute individually as students.",
  },
  {
    image: image_events_part11,
    title: "The Intersection of Environmental Protection & Women",
    desc: "A virtual panel exploring the depths of Intersectionality between Environmental Protection and Women’s role in Climate policy and solutions making along with discovering the importance of pertaining an eco-friendly Feminine Health. Ladies, this one’s for you!",
  },
  {
    image: image_events_part12,
    title: "Seaspiracy: Movie Screening & Discussion",
    desc: "In collaboration with Jakarta Vegan Guide, Tune in to our movie screening of the newly released ocean-focused documentary “Seaspiracy” to explore the deep shocking secrets of oceanic unsustainability and the post-panel discussion to hear our panelists talk about their experiences, activism, their knowledge regarding oceanic destruction, as well as how YOU can make a change to rebuild our oceans. Remember, a healthy ocean means a healthy planet!",
  },
  {
    image: image_events_part13,
    title: "GWFestival 02 - A Fight for our Climate Future",
    desc: "Advancing from GWFestival 01, GWFestival 02 is Green Welfare Indonesia’s second virtual go-green educational webinar workshop containing interactive panel discussions and educational single-presentations from Youth Speakers and Experts. The theme for this season’s festival is “A Fight for Our Climate Future” striving to shed light on environmental protection, intersectional environmentalism, responsible consumption and achieving a sustainable future.",
  },
  {
    image: image_events_part14,
    title: "GYT #1: Breaking the Myths of Climate Change & Activism",
    desc: "GYT will be featuring young, inspirational activists and their youth-led causes every month in a dialogue to showcase changemaking for a sustainable future as well as inspiring YOU to become a changemaker; with this season’s theme - Breaking the Myths of Climate Change & Activism",
  },
  {
    image: image_events_part15,
    title: "Webinar: A Sustainable Lifestyle in Indonesia",
    desc: "A mini-workshop webinar highlighting the importance of education in fighting the climate crisis with three critical sessions about Veganism, Sustainability & Fast Fashion as well as equipping them with practical steps they can take to create change.",
  },
  {
    image: image_events_part16,
    title: "GWFestival 01 - Zero Waste, Climate Change and Plastic Pollution",
    desc: "A two-day online webinar workshop that seeks to educate about various current climate & environmental issues and how they can contribute to the situation from the perspectives of various environmental changemakers.",
  },
  {
    image: image_events_part17,
    title: "Movie Discussion: Cowspiracy",
    desc: "An insightful and brief webinar uncovering the secrets behind the meat industry and sustainability showcased in the underrated documentary: Cowspiracy, followed by tips and tricks about adjusting to the Vegan World by Olivina Maskan and Fiza Khan.",
  },
];

console.log(eventContent);

const Events = () => {
  return (
    <>
      <Navbar />
      <Container className="w-full !h-[40vh] lg:!h-screen relative">
        <h1 className="text-[#3E3E08] font-light text-3xl tracking-tight text-center absolute left-1/2 top-32 -translate-x-1/2 leading-normal">
          No upcoming events at the moment
        </h1>
      </Container>
      <Container className="my-24">
        <Image src={image_events} className="h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
          <div className="w-full h-full bg-[#3E3E08]/30 grid place-items-center">
            <h1 className="font-light text-4xl text-white">Our Past Events</h1>
          </div>
        </Image>
      </Container>
      <Container className="my-8 px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 p-6 gap-8">
          {eventContent.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center gap-4">
              <img src={item.image} alt="" className="w-full h-full md:w-max md:h-max" />
              <h1 className="text-[#3E3E08] text-2xl font-normal leading-normal">{item.title}</h1>
              <p className="text-[#3E3E08] text-base font-light leading-loose">{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Events;
