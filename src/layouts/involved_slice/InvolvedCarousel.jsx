import React from "react";
import Container from "../../components/container";
import Slider from "../../components/slider";
import { image_donate, image_glasshoping, image_shakinghands } from "../../assets/involved-image";
import Button from "../../components/button";

const slides = [
  { image: image_shakinghands, title: "Partner Up", desc: "Work together to make a bigger impact with Green Welfare Indonesia" },
  { image: image_donate, title: "Volunteer", desc: "Make an Impact" },
  { image: image_glasshoping, title: "Brand Collaboration", desc: "Support us through your local business or brand" },
];

const InvolvedCarousel = () => {
  const [index, setIndex] = React.useState(0);
  return (
    <Container className="py-16">
      <Slider
        slides={slides}
        parentClassName="!h-[100vh] !py-8"
        childrenClassName="!flex-col-reverse md:!flex-row !px-0 lg:!px-40"
        setCurrentIndex={setIndex}
        currentIndex={index}
      >
        <div className="flex-1 flex flex-col justify-center items-center">
          <img src={slides[index].image} alt={slides[index].title} className="h-[300px] md:h-[400px] w-full" />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 w-full">
          <h1 className="text-[#3E3E08] w-full font-normal italic text-xl">{slides[index].title}</h1>
          <p className="text-[#3E3E08] w-full font-light italic text-base leading-8">{slides[index].desc}</p>
          <Button className="!bg-[#3E3E08] text-white hover:!bg-[#3E3E08]/50 !py-2.5 !px-4 !text-sm !font-extralight">Get in Touch</Button>
        </div>
      </Slider>
    </Container>
  );
};

export default InvolvedCarousel;
