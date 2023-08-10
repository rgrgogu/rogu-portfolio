import logo from "../../../assets/logo.png";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoGithub,
  BiLogoTwitter,
} from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="mt-auto w-full py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-[#151515]">
      {/* Grid */}
      <div className="text-center flex flex-col justify-center items-center">
        <div className="">
          <a className="" href="#" aria-label="Brand">
            <img className="h-[80px]" src={logo} />
          </a>
        </div>
        {/* End Col */}
        <div className="mt-3">
          <p className="text-gray-300">
            Thank you for visiting{" "}
            <span className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400">
              Rogu's
            </span>{" "}
            Portfolio
          </p>
          <p className="text-gray-300">
            © Russell Obsequio. 2023. All rights reserved.
          </p>
        </div>
        {/* Social Brands */}
        <div className="mt-3 space-x-2">
          <a
            className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-200 hover:bg-gray-900 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition"
            href="https://facebook.com/russell.obsequio.3"
            target="_blank"
          >
            <BiLogoFacebook size={20} className="" />
          </a>
          <a
            className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-200 hover:bg-gray-900 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition"
            href="https://twitter.com/rogu_comms"
            target="_blank"
          >
            <BiLogoTwitter size={20} className="" />
          </a>
          <a
            className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-200 hover:bg-gray-900 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition"
            href="https://www.instagram.com/rroguuu/"
            target="_blank"
          >
            <BiLogoInstagram size={20} className="" />
          </a>
          <a
            className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-200 hover:bg-gray-900 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition"
            href="https://github.com/rgrgogu"
            target="_blank"
          >
            <BiLogoGithub size={20} className="" />
          </a>
        </div>
        {/* End Social Brands */}
      </div>
      {/* End Grid */}
    </footer>
  );
};

export default Footer;
