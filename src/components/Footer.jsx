import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoPinterestAlt,
  BiLogoTwitter,
} from "react-icons/bi";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#10100E] pb-16 pt-60 sm:pt-52">
      <div className="container flex flex-col md:flex-row justify-between gap-14 md:gap-0">
        <div className="max-w-[220px] lg:max-w-[230px]">
          <img src={Logo} alt="DTravel" />
          <p className="mt-8 text-white/50">
            There are many variations of passages of available
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-6 lg:gap-x-12 gap-y-5 max-w-md">
          <a className="flex items-center gap-3" href="#">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-lg text-[#1778F2]">
              <BiLogoFacebook />
            </span>
            <span className="font-medium text-white">Facebook</span>
          </a>
          <a className="flex items-center gap-3" href="#">
            <span className="text-md flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#0A7BBA]">
              <BiLogoLinkedin />
            </span>
            <span className="font-medium text-white">Linkedin</span>
          </a>
          <a className="flex items-center gap-3" href="#">
            <span className="text-md flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#55ACEE]">
              <BiLogoTwitter />
            </span>
            <span className="font-medium text-white">Twitter</span>
          </a>
          <a className="flex items-center gap-3" href="#">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-lg text-[#CC2127]">
              <BiLogoPinterestAlt />
            </span>
            <span className="font-medium text-white">Pinterest</span>
          </a>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white mb-5">Recent Post</h2>
          <div className="flex flex-col gap-3">
            <p className="text-white/50">Top 5 Himalayan Treks</p>
            <p className="text-white/50">May 17,2021</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
