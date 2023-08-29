import { image_tumblr } from "../../assets/image";
import Button from "../../components/button";
import Container from "../../components/container";
import Image from "../../components/container/Image";

const Merch = () => {
  return (
    <Container className="p-0 md:p-16">
      <div className="flex flex-col gap-8 py-16 mx-8 text-center">
        <h4 className="text-[#3E3E08] text-3xl font-medium md:text-5xl tracking-tight">Get our Merch</h4>
        <p className="text-[#3E3E08] text-base leading-8 md:text-lg">
          Spend it for what it&apos;s worth - 100% of the revenue will be directed to <br /> support our non-profit programs and operational costs!
        </p>
      </div>
      <div className="flex flex-col md:flex-row">
        <Image src={image_tumblr} className="h-[400px] grid place-items-center">
          <Button className="hover:text-[#3E3E08]/80 hover:!bg-gray-400 block md:hidden">Buy now</Button>
        </Image>
        <div className="bg-[#3E3E08] ml-3 justify-center items-center hidden md:flex lg:visible w-full">
          <Button className="hover:text-[#3E3E08]/80 hover:!bg-gray-400">Buy now</Button>
        </div>
      </div>
    </Container>
  );
};

export default Merch;
