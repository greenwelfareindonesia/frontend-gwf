import { Typography } from "@material-tailwind/react";
import { image_core_values, logo_biodiversity, logo_compassionate, logo_innovative, logo_visionary } from "../../assets/image";

const iconList = [
  { name: "Compassionate", icon: logo_compassionate },
  { name: "Biodiversity Devotee", icon: logo_biodiversity },
  { name: "Innovative", icon: logo_innovative },
  { name: "Visionary", icon: logo_visionary },
];

const CoreValues = () => {
  return (
    <div className="w-full h-screen bg-[#6B6B0E]">
      <div className="flex items-center justify-center w-full h-full bg-opacity-50 bg-black/30">
        <div className="flex items-center justify-center gap-20 flex-col mx-20 w-1/2 h-full">
          <h1 className="font-light text-white text-md md:text-4xl">Core Values</h1>
          <ul className="py-2 grid grid-cols-2 gap-8">
            {iconList.map((item, key) => (
              <Typography key={key} as="li" variant="small" color="blue-gray" className="flex justify-center items-center flex-col gap-4">
                <img src={item.icon} className="w-10" alt="" />
                <p className="text-white font-extralight">{item.name}</p>
              </Typography>
            ))}
          </ul>
        </div>
        <div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: `url('${image_core_values}')` }}>
          <div className="flex items-center justify-center w-full h-full bg-opacity-50 lg:justify-end bg-black/10"></div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
