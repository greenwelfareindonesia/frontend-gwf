import InstagramIcon from "../../assets/instagram.svg";
import YoutubeIcon from "../../assets/youtube.svg";
import LinkedinIcon from "../../assets/linkedin.svg";
import asean_youth_logo from "../../assets/asean-youth.svg";
import gwf_logo from "../../assets/gwf.png";

export default function Footer() {
  return (
    <section className="mt-12">
      <div className="flex items-center justify-center py-8">
        <a href="/" className="cursor-pointer">
          <img src={gwf_logo} alt="Green Welfare Logo" className="max-w-[130px]" />
        </a>
        <div className="pl-6 border-l-2 border-">
          <h5 className="text-2xl font-bold text-primary-2 font-inter">Contact Us</h5>
          <p className="mt-3 text-sm font-medium text-primary-2">greenwelfare.id@gmail.com</p>
          <p className="mb-3 text-sm font-medium text-primary-2">+62 812 8836 1624</p>
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
      <div className="flex items-center justify-center">
        <h5 className="mr-4 text-lg font-bold text-primary-2 font-inter">Supported By</h5>
        <img src={asean_youth_logo} alt="Asean Youth Org" className="max-w-[130px]" />
      </div>
      <div className="py-2 text-xs text-center bg-primary-1 font-inter text-light-1">©2023 by Green Welfare Indonesia</div>
    </section>
  );
}
