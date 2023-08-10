import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import API_LINK from "../../../API";
import ViewModal from "./ViewModal";
import { useProjectsContext } from "../../../hooks/useProjectsContext";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: {
    opacity: 1,
    ease: 2,
    transition: { duration: 1 },
  },
  hidden: { opacity: 0 },
};

const Works = () => {
  const [id, setID] = useState();
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const dictionary = [
    { name: "React JS", color: "bg-gray-500" },
    { name: "Python", color: "bg-blue-900" },
    { name: "PHP", color: "bg-purple-500" },
    { name: "Ruby", color: "bg-red-500" },
    { name: "Java", color: "bg-green-500" },
    { name: "MySQL", color: "bg-yellow-800" },
    { name: "C", color: "bg-blue-500" },
    { name: "C++", color: "bg-blue-700" },
    { name: "C#", color: "bg-indigo-700" },
    { name: "Flutter", color: "bg-yellow-700" },
  ];

  const { form, currentPage, totalPages, dispatch } = useProjectsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(
        `${API_LINK}/projects?page=${currentPage || 1}`
      );
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_PROJECTS", payload: json });
      }
    };

    fetchWorkouts();
  }, []);

  const handleClick = (id) => {
    setID(id);
  };

  const handlePagination = async (page) => {
    const response = await fetch(
      `${API_LINK}/projects?page=${page.selected + 1 || 1}`
    );
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "SET_PROJECTS", payload: json });
    }
  };

  const checkCategory = (item, idx) => {
    const array = dictionary.filter((dict) => dict.name === item);
    let newItem = {};

    if (array.length === 0) newItem.color = "bg-orange-500";
    else newItem.color = array[0].color;

    return (
      <span
        key={idx}
        className={`inline-flex mb-1 items-center py-1 px-2 rounded-full text-xs font-medium ${newItem.color} text-white`}
      >
        {item}
      </span>
    );
  };

  return (
    <>
      {/* Card Blog */}
      <motion.div
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        id="portfolio"
        className="w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-[#151515]"
      >
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14 text-white">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight ">
            Portfolio
          </h2>
          <p className="mt-1 ">
            Here are my latest portfolio's as a developer and programmer in my
            college years.
          </p>
        </div>
        {/* End Title */}
        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card */}
          {form &&
            form.map((item, idx) => (
              <div
                key={idx}
                className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl "
              >
                <div className="h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={item.image.url}
                    alt=""
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-xl font-semibold text-black">
                    {item.title}
                  </h3>
                  <div className="flex flex-row space-x-1 py-2">
                    {item.category &&
                      item.category.map((item, idx) =>
                        checkCategory(item, idx)
                      )}
                  </div>
                  <p className=" text-black text-base line-clamp-2">
                    {item.description}
                  </p>
                  <div className="lg:space-x-2 sm:space-x-0">
                    <button
                      type="button"
                      onClick={() => handleClick(item._id)}
                      data-hs-overlay="#view"
                      className="mt-2 py-2 px-5 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-600 text-white hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-900 focus:ring-offset-2 transition-all text-sm "
                    >
                      View Details
                    </button>
                    {item.link !== " " ? (
                      <a
                        href={item.link}
                        target="_blank"
                        className="mt-2 py-2 px-5 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-600 text-white hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 transition-all text-sm "
                      >
                        View Code / Output
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          {/*End Card*/}
        </div>
        {/* End Grid */}
        <ViewModal id={id} />
        <ReactPaginate
          className="mt-10 flex space-x-3 justify-center items-center font-bold"
          pageClassName="border-white border-2 text-white hover:bg-white hover:text-black py-1 px-3"
          previousClassName="text-white"
          nextClassName="text-white"
          disabledLinkClassName="text-gray-500"
          previousLabel="<<"
          nextLabel=">>"
          breakLabel="..."
          pageCount={totalPages}
          activePage={currentPage}
          onPageChange={(page) => handlePagination(page)}
        />
      </motion.div>

      {/* End Card Blog */}
    </>
  );
};

export default Works;
