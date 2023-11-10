import { image_climatewishes } from "../../assets/image";
import Container from "../../components/container";
import Image from "../../components/container/Image";

const ClimateWishes = () => {
  return (
    <Container>
      <Image src={image_climatewishes} className="h-[50vh] md:h-[75vh]">
        <div className="flex flex-col-reverse md:flex-col justify-center h-full w-full bg-[#3E3E08]/30 gap-8">
          <h3 className="text-center text-white font-light">
            Youth Climate Advocates Share Their Hopes For 2021
          </h3>
          <h2 className="text-center text-white text-4xl tracking-tight">My Climate Wishes</h2>
        </div>
      </Image>
    </Container>
  );
};

export default ClimateWishes;
