import { image_header } from "../../assets/image";

const Header = () => {
  return (
    <div className="w-full h-[70vw] bg-fixed bg-center bg-cover" style={{ backgroundImage: `url('${image_header}')` }}>
      <div className="flex items-center justify-center w-full h-full bg-opacity-50 lg:justify-end bg-black/10">
        <div className="mx-20 text-center bg-[#6B6B0E]/30 py-32 px-10 max-w-xl w-full">
          <h1 className="text-2xl font-light leading-1 text-white md:text-7xl">Green Welfare Indonesia</h1>
          <p className="py-2 mt-10 text-xl leading-10 text-white font-extralight">
            Connecting youth-led climate solutions through food security, climate education and sustainable agriculture
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
