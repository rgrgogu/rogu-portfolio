import { Link } from "react-router-dom";
import resume from "../../../assets/Resume.pdf";
import img from "../../../assets/about_img3.png";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7 },
  },
  hidden: { opacity: 0, scale: 0 },
};
const About = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <>
      {/* Card Blog */}
      <AnimatePresence>
        <motion.div
          className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-16 mx-auto"
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
          id="about"
        >
          {/* Title */}
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight ">
              Get Ready With Me
            </h2>
            <p className="mt-1 ">
              Welcome to my space, buddy. Get to know my tracks within my
              version of life.
            </p>
          </div>
          {/* End Title */}
          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card */}
            <a
              href={resume}
              target="_blank"
              className="group rounded-xl overflow-hidden"
            >
              <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                <img
                  className="w-full h-full absolute top-0 left-0 object-center object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                  src={img}
                  alt="Image Description"
                />
                <span className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
                  MY VERSION
                </span>
              </div>
              <div className="mt-7">
                <h3 className="text-xl font-semibold ">Me, Myself and I</h3>
                <p className="mt-3 ">
                  Read my latest Me, Myself and I and see what I can do to my
                  greatest portfolio that I have earned in this society.
                </p>
                <p className="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
                  Read more
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
                </p>
              </div>
            </a>
            {/* End Card */}
            {/* Card */}
            <Link to="/behind" className="group rounded-xl overflow-hidden">
              <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                <img
                  className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                  src="https://images.unsplash.com/photo-1643225710726-17a312cef9d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&w=1000&q=80"
                  alt="Image Description"
                />
              </div>
              <div className="mt-7">
                <h3 className="text-xl font-semibold ">Behind The Quote</h3>
                <p className="mt-3 ">
                  Explore what's behind the quote "Jack of all trades, Masters
                  of none" and why I'm captivated to learn and applying to my
                  life.
                </p>
                <p className="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
                  Read more
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
                </p>
              </div>
            </Link>
            {/* End Card */}
            {/* Card */}
            <Link
              to="/gallery"
              className="group relative flex flex-col w-full min-h-[15rem] bg-center bg-cover rounded-xl hover:shadow-lg transition bg-[url('https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-6/305121877_635082617960917_3927028365383473436_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEU7FB7DlDo1yEzSy5EuA6nNjbjIVuH_1U2NuMhW4f_VaNM6qnwZHsUN9DSW5vVEtfJj_TS0Z_Gcum8WO-UcVhA&_nc_ohc=j-_LqV71g5AAX-9xTn_&_nc_ht=scontent.fmnl8-1.fna&_nc_e2o=s&oh=00_AfDFKPZUiLPGO3tlmdAAbVbatBtfzsk1dRQXOtXTUOCOAg&oe=64D8E87D')]"
            >
              <div className="flex-auto p-4 md:p-6">
                <h3 className=" text-white/[.9] group-hover:text-white">
                  <span className="font-bold text-xl">Gallery</span>
                  <br />
                  <span className="text-sm">
                    See my capture moments in my life.
                  </span>
                </h3>
              </div>
              <div className="pt-0 p-4 md:p-6">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/[.7]">
                  Visit the page
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
                </div>
              </div>
            </Link>
            {/* End Card */}
          </div>
          {/* End Grid */}
        </motion.div>
        {/* End Card Blog */}
      </AnimatePresence>
    </>
  );
};

export default About;
