import {
  bottom_left,
  bottom_middle,
  bottom_right,
  middle_left,
  middle_middle,
  middle_right,
  top_left,
  top_middle,
  top_right,
} from "../../assets/about-image";
import Container from "../../components/container";

const listPrograms = [
  {
    title: "GWF Monthly Distribution Drives",
    description:
      "To support our mission of achieving zero hunger through responsible consumption, Green Welfare Indonesia performs a monthly distribution drive in by allocating plant-based meals, eco-friendly household goods and sanitary kits to various communities in need whilst educating awareness about livestock agriculture and it's massive carbon footprint through these plant-based approaches.",
    image: [top_left, top_middle, top_right],
  },
  {
    title: "GWF Sustainable Hydroponics Waqaf Program",
    description:
      "Green Welfare Indonesia aims to broaden their area of work by not only providing people with their necessities in the short term, but to also provide them with resources to be able to sustain themselves in the long run. We aim to carry this out through donating hydroponics units as a resource of food whilst also promoting sustainable urban agriculture to underprivileged communities. This program is also the first to introduce the concept of Waqf Hydroponics (Islamic endowment). So far, Green Welfare Indonesia has successfully installed 6 hydroponics stations in Kuningan, Jakarta and Tapos, Depok.",
    image: [middle_left, middle_middle, middle_right],
  },
  {
    title: "GWF Climate Education Initiatives",
    description:
      "Green Welfare Indonesia highly prioritizes Climate Education as we believe it is a crucial first step on climate action. We execute this by providing programs that involves peer-to-peer climate educational workshops to local schools & communities (online & offline), as well as providing informal & accessible diverse environmental dialogues through virtual seminars, social media post toolkits and Op-Eds.",
    image: [bottom_left, bottom_middle, bottom_right],
  },
];

const OngoingPrograms = () => {
  return (
    <Container className="grid py-16 place-items-center">
      <div className="flex flex-col items-center justify-center h-full max-w-screen-xl mx-4">
        <h1 className="text-[#3E3E08] text-2xl font-light md:text-4xl">Ongoing Programs</h1>
        <div className="flex flex-col items-center mt-12 gap-28">
          {listPrograms.map((item, index) => (
            <div className="flex flex-col items-center gap-10" key={index}>
              <h2 className="text-center text-[#3E3E08] font-bold">{item.title}</h2>
              <p className="text-center text-[#3E3E08] w-full text-sm leading-6">{item.description}</p>
              <div className="flex flex-col items-center justify-center gap-10 mt-12 lg:flex-row">
                {item.image.map((item, index) => (
                  <img key={index} src={item} alt="" className="w-full h-full max-w-[300px]" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default OngoingPrograms;
