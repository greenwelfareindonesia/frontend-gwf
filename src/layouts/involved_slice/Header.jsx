import { image_getinvolved } from "../../assets/involved-image";
import Container from "../../components/container";
import Image from "../../components/container/Image";

const Header = () => {
  return (
    <Container>
      <Image src={image_getinvolved} className="h-[500px] flex justify-center items-center flex-col gap-8 lg:flex-col-reverse">
        <h1 className="text-3xl font-light text-white lg:text-4xl">Get Involved</h1>
        <h6 className="text-xl text-white font-extralight">Make Your Mark</h6>
      </Image>
    </Container>
  );
};

export default Header;
