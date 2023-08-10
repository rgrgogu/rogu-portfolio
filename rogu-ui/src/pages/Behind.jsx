import React from 'react'
import Header from "../components/client/global/Header";
import img from "../assets/img3.png"

const Behind = () => {
  return (
    <div className="bg-[#1b1b1b]">
      <Header />
      {/* Blog Article */}
      <div className="w-full px-4 pt-24 lg:pt-24 pb-12 sm:px-6 lg:px-8 flex flex-col justify-center items-center ">
        <div className="max-w-2xl">
          {/* Avatar Media */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
              <div className="flex-shrink-0">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={img}
                  alt="Image Description"
                />
              </div>
              <div className="grow">
                <div className="grid sm:flex sm:justify-between sm:items-center gap-2">
                  <div>
                    {/* Tooltip */}
                    <div className="hs-tooltip inline-block [--trigger:hover] [--placement:bottom]">
                      <div className="hs-tooltip-toggle sm:mb-1 block text-left cursor-pointer">
                        <span className="font-semibold text-gray-800 dark:text-gray-200">
                          Russell Obsequio
                        </span>
                      </div>
                    </div>
                    {/* End Tooltip */}
                    <ul className="text-xs text-gray-500">
                      <li className="inline-block relative pr-6 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                        August 8
                      </li>
                      <li className="inline-block relative pr-6 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                        8 min read
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Avatar Media */}
          {/* Content */}
          <div className="space-y-5 md:space-y-8">
            <figure>
              <img
                className="w-full object-cover rounded-xl h-[300px]"
                src="https://images.unsplash.com/photo-1643225710726-17a312cef9d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&w=1000&q=80"
                alt="Image Description"
              />
              <figcaption className="mt-3 text-sm text-center text-gray-500">
                Cards displaying on Man's hand.
              </figcaption>
            </figure>
            <h2 className="text-2xl font-bold md:text-3xl dark:text-white">
              Jack of All Trades, Masters of None.
            </h2>
            <p className="text-lg text-gray-800 dark:text-gray-200">
              Curious yet creative. This is me who always learning new things.
              I’m not afraid to try new things, even I’m not sure if I will be
              good at them. Quick learner and resilient driver at my dreams.
            </p>
            <p className="text-lg text-gray-800 dark:text-gray-200">
              As a jack of all trades, I know that it's important to find a
              balance between learning new things and mastering my skills. I
              want to be able to continue learning and growing, but I also want
              to become an expert in one or two areas. I've found that the best
              way to do this is to focus on the skills that are most important
              to me and that I enjoy the most. I also make sure to give these
              skills my full attention and to practice regularly. With time and
              effort, I know that I can become a master of one, while still
              retaining my jack of all trades skills.
            </p>
          </div>
          {/* End Content */}
        </div>
      </div>
      {/* End Blog Article */}
    </div>
  );
}

export default Behind