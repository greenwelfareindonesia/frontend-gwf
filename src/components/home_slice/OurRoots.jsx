import { image_our_roots } from "../../assets/image";

const OurRoots = () => {
  return (
    <div className="w-full h-screen bg-center bg-cover" style={{ backgroundImage: `url('${image_our_roots}')` }}>
      <div className="flex items-center justify-center w-full h-full bg-opacity-50 bg-black/30">
        <div className="mx-20 bg-[#6B6B0E] p-16 max-w-screen-lg w-full">
          <h5 className="font-light text-white text-md md:text-lg">Our Roots</h5>
          <h1 className="mt-2 text-xl font-light text-white md:mt-8 md:text-4xl">Who We Are</h1>
          <p className="py-2 mt-2 text-sm leading-5 text-white md:leading-7 md:mt-8 font-extralight">
            Here at Green Welfare Indonesia, we know that sometimes all it takes to change the world is a little step of action. Since our founding on
            the 3rd of May 2020, our non-profit organization has been determined to make an impact on a social scale as well as the environment. The
            core of our efforts is to bring young people to step down and lend a helping hand to eco-social issues while being conscious of our
            climate and environment. Through all of our endeavors, we hope to display the conviction behind our beliefs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurRoots;
