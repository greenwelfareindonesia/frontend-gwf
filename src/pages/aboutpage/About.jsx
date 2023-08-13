import InstagramIcon from "../../assets/Instagram.webp";
import YoutubeIcon from "../../assets/Youtube.webp";
import LinkedinIcon from "../../assets/Linkedin.webp";

export default function About() {
  return (
    <div>
      <div>About Page</div>
      <section className="bg-[#5F5E36] pt-28 pb-28">
        <h2 className="mb-16 text-3xl text-center text-white font-inter">Our Work in Numbers</h2>
        <div className="flex flex-col justify-center ml-4 md:space-x-10 md:flex-row">
          <div>
            <h3 className="text-white font-inter text-3xl leading-[4rem] md:text-6xl md:leading-[5rem]">16,000+</h3>
            <p className="text-white font-thin md:leading-7 h-[4rem]">Social media followers</p>
            <h3 className="text-white font-inter text-3xl leading-[4rem] md:text-6xl md:leading-[5rem]">1,500+</h3>
            <p className="text-white font-thin md:leading-7 h-[4rem]">
              Sanitary & Household goods <br /> distributed
            </p>
          </div>
          <div>
            <h3 className="text-white font-inter text-3xl leading-[4rem] md:text-6xl md:leading-[5rem]">4,300+</h3>
            <p className="text-white font-thin md:leading-7 h-[4rem]">Plant-based meals distributed</p>
            <h3 className="text-white font-inter text-3xl leading-[4rem] md:text-6xl md:leading-[5rem]">20+</h3>
            <p className="text-white font-thin md:leading-7 h-[4rem]">Distribution drives</p>
          </div>
          <div>
            <h3 className="text-white font-inter text-3xl leading-[4rem] md:text-6xl md:leading-[5rem]">4,000+</h3>
            <p className="text-white font-thin md:leading-7 h-[4rem]">
              Youths spoken to about Climate <br /> Change
            </p>
            <h3 className="text-white font-inter text-3xl leading-[4rem] md:text-6xl md:leading-[5rem]">10+</h3>
            <p className="text-white font-thin md:leading-7 h-[4rem]">Environmental events curated</p>
          </div>
        </div>
      </section>
      {/* Footer */}
      <div>
        <div className="relative pt-10 pb-20">
          <h6 className="text-[#3E3E08] text-center text-lg font-bold">Green Welfare Indonesia</h6>
          <p className="text-[#3E3E08] text-center font-inter text-xs mt-5 mb-1 cursor-pointer">greenwelfare.id@gmail.com</p>
          <p className="text-[#3E3E08] text-center font-inter font-bold">Supported by ASEAN Youth Organization</p>
          <div className="flex justify-center w-full">
            <div className="absolute flex space-x-2 bottom-1 ml-">
              <img src={InstagramIcon} alt="instagram icon" className="cursor-pointer" />
              <img src={YoutubeIcon} alt="youtube icon" className="cursor-pointer" />
              <img src={LinkedinIcon} alt="linkedin icon" className="cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="bg-[#3E3E08] font-inter text-white text-center text-xs py-2">©2023 by Green Welfare Indonesia</div>
      </div>
    </div>
  );
}
