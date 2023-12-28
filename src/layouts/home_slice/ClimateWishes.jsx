import { climate_wishes_image } from "../../assets/home-image";
import Background from "../../components/background";
import Filter from "../../components/filter";

const ClimateWishes = () => {
  return (
    <Background src={climate_wishes_image} className="min-h-300 md:min-h-500">
      <Filter />
      <div className="flex flex-col-reverse justify-center gap-8 md:flex-col z-1">
        <h3 className="font-light text-center text-light-1">Youth Climate Advocates Share Their Hopes For 2021</h3>
        <h2 className="text-4xl tracking-tight text-center text-light-1">My Climate Wishes</h2>
      </div>
    </Background>
  );
};

export default ClimateWishes;
