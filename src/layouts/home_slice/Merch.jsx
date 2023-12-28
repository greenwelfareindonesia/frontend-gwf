import { our_merch_image } from "../../assets/home-image";
import Background from "../../components/background";
import Button from "../../components/button";
import Container from "../../components/container";

const Merch = () => {
  return (
    <Container className="!max-w-screen-xl">
      <div className="flex flex-col gap-8 py-8 mx-8 text-center md:py-16">
        <h4 className="text-3xl tracking-tight text-primary-2 md:text-6xl">Get our Merch</h4>
        <p className="text-base leading-8 text-primary-2 md:text-lg">
          Spend it for what it&apos;s worth - 100% of the revenue will be directed to <br /> support our non-profit programs and operational costs!
        </p>
      </div>
      <div className="flex flex-col md:flex-row">
        <Background src={our_merch_image} className="grid min-h-400 md:min-h-600 place-items-center">
          <Button intent="white" label="buy-now-mobile" className="block md:hidden">
            Buy now
          </Button>
        </Background>
        <div className="items-center justify-center hidden w-full ml-3 bg-primary-2 md:flex lg:visible">
          <Button intent="white" label="buy-now-desktop">
            Buy now
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Merch;
