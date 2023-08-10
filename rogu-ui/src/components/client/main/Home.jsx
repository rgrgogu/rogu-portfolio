import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useAnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: {
    opacity: 2,
    y: 0,
    transition: { duration: 1.0 },
  },
  hidden: {
    opacity: 0,
    y: 10,
    transition: { duration: 0 },
  },
};

const Home = () => {
  const { pathname, hash, key } = useLocation();
  const control = useAnimationControls();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

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

  return (
    <>
      {/* Hero */}
      <motion.div
        id="home"
        className="h-screen flex justify-center items-center"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <div className="">
          <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
            {/* Title */}
            <div className="max-w-3xl text-center mx-auto">
              <h1 className="block font-semibold text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                JACK OF ALL TRADES, MASTERS OF NONE
              </h1>
            </div>
            {/* End Title */}
            <div className="max-w-3xl text-center mx-auto">
              <p className="text-lg text-gray-300">
                Maybe master of integration? life? future? or opportunity?
              </p>
            </div>
            {/* Buttons */}
            <div className="text-center">
              <Link
                className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
                to="/#about"
              >
                Get started
                <svg
                  className="w-2.5 h-2.5"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                </svg>
              </Link>
            </div>
            {/* End Buttons */}
          </div>
        </div>
      </motion.div>
      {/* End Hero */}
    </>
  );
};

export default Home;
