import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/logo.png";
import Modal from "../main/Modal";

const Header = () => {
  const [color, setColor] = useState(false);
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === "") {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change

  useEffect(() => {
    const handleOnScroll = () => {
      if (window.innerWidth <= 767) setColor(true);
      else window.scrollY >= 90 ? setColor(true) : setColor(false);
    };

    window.addEventListener("scroll", handleOnScroll);
  }, []);

  return (
    <>
      <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm fixed top-0 ">
        <nav
          className={`relative w-full  py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto ${
            color
              ? `dark:bg-[#151515] dark:border-[#151515] transition duration-300 ease-in-out`
              : `dark:bg-transparent dark:border-transparent transition duration-300 ease-in-out  `
          }`}
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex text-xl font-semibold dark:text-white tracking-widest justify-center items-center"
            >
              <img className="h-[50px] md:h-[80px] text-white" src={logo} />
              RUSSELL <br /> OBSEQUIO
            </Link>
            <div className="md:hidden">
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden w-4 h-4"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden w-4 h-4"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7">
              <Link
                className="font-medium text-gray-200  md:py-6 hover:text-blue-600"
                to="/#home"
              >
                Home
              </Link>
              <Link
                className="font-medium text-gray-200  md:py-6 hover:text-blue-600"
                to="/#about"
              >
                About
              </Link>
              <Link
                className="font-medium text-gray-200  md:py-6 hover:text-blue-600"
                to="/#portfolio"
              >
                Portfolio
              </Link>
              <Link
                className="font-medium text-gray-200 md:py-6 hover:text-blue-600"
                to="/#inquiries"
              >
                Inquiries
              </Link>
              <button
                className="flex items-center gap-x-2 font-medium text-gray-200 hover:text-blue-600 md:border-l md:border-gray-300 md:my-6 md:pl-6   "
                data-hs-overlay="#hs-modal-signin"
              >
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                </svg>
                Log in
              </button>
            </div>
          </div>
        </nav>
      </header>
      <Modal />
    </>
  );
};

export default Header;
