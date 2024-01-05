import { involved_image } from "../../assets/involved-image";

import Background from "../../components/background";
import Filter from "../../components/filter";

const Header = () => {
  return (
    <Background src={involved_image} className="flex flex-col items-center justify-center gap-8 min-h-500 lg:flex-col-reverse">
      <Filter />
      <h1 className="text-3xl font-light text-light-1 lg:text-4xl">Get Involved</h1>
      <h6 className="text-xl text-light-1 font-extralight">Make Your Mark</h6>
    </Background>
  );
};

export default Header;
