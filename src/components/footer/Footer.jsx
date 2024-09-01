import { Link } from "react-router-dom";

import InstagramIcon from "../../assets/instagram.svg";
import YoutubeIcon from "../../assets/youtube.svg";
import LinkedinIcon from "../../assets/linkedin.svg";

import logo_gwf from "../../assets/gwf.png";
import Image from "../image";

export default function Footer() {
  return (
    <section className="mt-12">
      <div className="flex items-center justify-center py-8">
        <Link to="/" className="pr-6 cursor-pointer">
          <Image src={logo_gwf} className="!w-32 h-32" description="logo gwf" />
        </Link>
        <div className="pl-6 border-l-2">
          <h5 className="text-2xl font-bold text-primary-2">Contact Us</h5>
          <p className="mt-3 text-sm font-medium text-primary-2">greenwelfare.id@gmail.com</p>
          <p className="mb-3 text-sm font-medium text-primary-2">+62 812 8836 1624</p>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/company/greenwelfareindonesia/" className="cursor-pointer">
              <img src={LinkedinIcon} alt="linkedin" className="w-7" />
            </a>
            <a href="https://www.youtube.com/@greenwelfareindonesia9955" className="cursor-pointer">
              <img src={YoutubeIcon} alt="youtube" className="w-7" />
            </a>
            <a href="https://www.instagram.com/greenwelfare.id/" className="cursor-pointer">
              <img src={InstagramIcon} alt="instagram" className="w-7" />
            </a>
          </div>
        </div>
      </div>
      <div className="py-2 text-xs text-center bg-primary-1 text-light-1">©2023 by Green Welfare Indonesia</div>
    </section>
  );
}
