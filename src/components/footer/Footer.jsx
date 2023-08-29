import InstagramIcon from "../../assets/instagram.svg";
import YoutubeIcon from "../../assets/youtube.svg";
import LinkedinIcon from "../../assets/linkedin.svg";
import { logo_aseanorg, logo_gwf } from "../../assets/image";
import Container from "../container";

export default function Footer() {
  return (
    <Container>
      <div className="flex justify-center items-center py-8">
        <a href="/" className="cursor-pointer">
          <img src={logo_gwf} alt="Green Welfare Logo" className="max-w-[130px]" />
        </a>
        <div className="border-l-2 pl-6 border-">
          <h5 className="text-[#656539] font-inter text-2xl font-bold">Contact Us</h5>
          <p className="text-[#656539] text-sm font-medium mt-3">greenwelfare.id@gmail.com</p>
          <p className="text-[#656539] text-sm font-medium mb-3">+62 812 8836 1624</p>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/company/greenwelfareindonesia/" className="cursor-pointer">
              <img src={LinkedinIcon} alt="" className="w-7" />
            </a>
            <a href="https://www.youtube.com/@greenwelfareindonesia9955" className="cursor-pointer">
              <img src={YoutubeIcon} alt="" className="w-7" />
            </a>
            <a href="https://www.instagram.com/greenwelfare.id/" className="cursor-pointer">
              <img src={InstagramIcon} alt="" className="w-7" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <h5 className="text-[#656539] font-inter text-lg font-bold mr-4">Supported By</h5>
        <img src={logo_aseanorg} alt="Asean Youth Org" className="max-w-[130px]" />
      </div>
      <div className="bg-[#3E3E08] font-inter text-white text-center text-xs py-2">©2023 by Green Welfare Indonesia</div>
    </Container>
  );
}
