import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import AdminEditModal from "./AdminEditModal";
import AdminDeleteModal from "./AdminDeleteModal";
import { useState, useEffect } from "react";

const AdminDetails = ({
  setMsg,
  form,
}) => {
  const [id, setID] = useState();

  const handleClick = (id) => {
    setID(id);
  };

  return (
    <>
      {/* Card Blog */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-8 mx-auto">
        {/* Grid */}
        <div className="grid lg:grid-cols-2 lg:gap-y-10 gap-10">
          {/* Card */}
          {form &&
            form.map((item, idx) => (
              <div
                className="group rounded-xl overflow-hidden shadow-lg bg-slate-100"
                key={idx}
              >
                <div className="sm:flex">
                  <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                    <img
                      className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl"
                      src={item.image.url}
                      alt="Image Description"
                    />
                  </div>
                  <div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0 flex flex-col justify-center py-2 mr-5">
                    <div className="flex flex-row justify-between items-center">
                      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 ">
                        {item.title}
                      </h3>
                      <div className="flex justify-end space-x-1">
                        <button
                          type="button"
                          onClick={() => handleClick(item._id)}
                          className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                          data-hs-overlay="#admin-edit"
                        >
                          <FiEdit />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleClick(item._id)}
                          className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                          data-hs-overlay="#admin-delete"
                        >
                          <MdDeleteOutline />
                        </button>
                      </div>
                    </div>

                    <p className="mt-3 text-gray-600 text-start text-sm truncate w-80">
                      {item.description}
                    </p>
                    <p className="mt-3 text-gray-600 text-start text-sm">
                      Date Created: {new Date(item.date).toLocaleDateString()}
                    </p>

                    <div className="flex space-x-2"></div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {/* End Grid */}
      </div>

      <AdminEditModal id={id} setMsg={setMsg} />
      <AdminDeleteModal id={id} setMsg={setMsg} />
      {/* End Card Blog */}
    </>
  );
};

export default AdminDetails;
