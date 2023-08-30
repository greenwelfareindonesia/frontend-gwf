import AseanYouth from "../assets/aseanorg.png";
import GwfLogo2 from "../assets/gwflogo2.png";
import InstagramIcon from "../assets/instagram.svg";
import YoutubeIcon from "../assets/youtube.svg";
import LinkedinIcon from "../assets/linkedin.svg";

export default function Footer() {
  return (
    <div>
      <div className="flex justify-center items-center pt-8 mb-6 ml-6">
        <img
          src={GwfLogo2}
          alt="Green Welfare Logo"
          className="border-r-2 mr-6 lg:w-[8rem] lg:h-[7rem] w-[6rem] h-[5rem]"
        />
        <div>
          <h5 className="text-[#656539] font-inter text-lg lg:text-2xl font-bold">
            Contact Us
          </h5>
          <p className="text-[#656539] text-xs lg:text-sm font-medium mt-3">
            greenwelfare.id@gmail.com
          </p>
          <p className="text-[#656539] text-xs lg:text-sm font-medium mb-3">
            +62 812 8836 1624
          </p>
          <div className="flex space-x-4">
            <img src={LinkedinIcon} alt="" className="cursor-pointer" />
            <img src={YoutubeIcon} alt="" className="cursor-pointer" />
            <img src={InstagramIcon} alt="" className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <h5 className="text-[#656539] font-inter text-lg font-bold mr-4">
          Supported By
        </h5>
        <img
          src={AseanYouth}
          alt="Asean Youth Org"
          className="w-[7rem] h-[4rem]"
        />
      </div>
      <div className="bg-[#3E3E08] font-inter text-white text-center text-xs py-2">
        ©2023 by Green Welfare Indonesia
      </div>
    </div>
  );
}
