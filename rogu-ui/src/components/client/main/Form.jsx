import InquiryForm from "./InquiryForm";
import { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, },
  },
  hidden: {
    opacity: 0,
    y: -100,
    transition: { duration: 0, },
  },
};

const Form = () => {
  const control = useAnimationControls();
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
      {/* Hire Us */}
      <motion.div
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        id="inquiries"
        className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
      >
        {/* Grid */}
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div>
            <h1 className="text-3xl font-bold text-black sm:text-4xl lg:text-5xl lg:leading-tight">
              Hire me
            </h1>
            <p className="mt-1 md:text-lg text-black">
              I can help brands and platforms turn big ideas into beautiful
              digital products and experiences.
            </p>
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-black">
                What can you expect?
              </h2>
              <ul className="mt-2 space-y-2">
                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-black "
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="text-black ">Industry-leading design</span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-black "
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="text-black ">
                    Developer community support
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-black "
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="text-black ">Simple and affordable</span>
                </li>
              </ul>
            </div>
          </div>
          {/* End Col */}
          <div className="relative">
            {/* Card */}
            <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-10 border-black ">
              <h2 className="text-xl font-semibold ">Fill in the form</h2>

              <InquiryForm />
              <div className="mt-3 text-center">
                <p className="text-sm ">
                  We'll get back to you in 1-2 business days.
                </p>
              </div>
            </div>
            {/* End Card */}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </motion.div>
      {/* End Hire Us */}
    </>
  );
};

export default Form;
