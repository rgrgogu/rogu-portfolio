import { useState, useEffect } from "react";
import AdminDetails from "./AdminDetails";
import AdminAddModal from "./AdminAddModal";
import SuccessAlert from "../../client/global/SuccessAlert";
import API_LINK from "../../../API";
import { useProjectsContext } from "../../../hooks/useProjectsContext";
import ReactPaginate from "react-paginate";

const AdminCRUD = () => {
  const { form, currentPage, totalPages, dispatch } = useProjectsContext();
  const [text, setText] = useState("");
  const [success, setSuccess] = useState(null);

  const fetchWorkouts = async () => {
    const response = await fetch(
      `${API_LINK}/projects?page=${currentPage || 1}`
    );
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "SET_PROJECTS", payload: json });
    }
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!text) {
      fetchWorkouts();
      return;
    }

    const response = await fetch(`${API_LINK}/projects/search/${text}`);
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "SET_PROJECTS", payload: json });
    }
  };

  const handlePagination = async (page) => {
    if (text === "") {
      const response = await fetch(
        `${API_LINK}/projects?page=${page.selected + 1 || 1}`
      );
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_PROJECTS", payload: json });
      }
    } else {
      const response = await fetch(
        `${API_LINK}/projects/search/${text}?page=${page.selected + 1 || 1}`
      );
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_PROJECTS", payload: json });
      }
    }
  };

  return (
    <div>
      {success ? (
        <div className="w-10/12 mx-auto">
          <SuccessAlert msg={success} />
        </div>
      ) : null}
      <div className="flex flex-row w-full space-x-3 justify-center mt-8">
        <div>
          <label
            htmlFor="hs-trailing-button-add-on-with-icon-and-button"
            className="sr-only"
          >
            Label
          </label>
          <div className="relative flex rounded-md shadow-sm">
            <input
              type="text"
              id="hs-trailing-button-add-on-with-icon-and-button"
              name="text"
              placeholder="Search Portfolio's Name"
              onChange={(e) => setText(e.target.value)}
              className="py-3 px-4 pl-11 block w-full border border-gray-400 shadow-lg rounded-l-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 "
            />
            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
              <svg
                className="h-4 w-4 text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
            <button
              type="button"
              onClick={handleSearch}
              className="py-3 px-4 inline-flex flex-shrink-0 justify-center items-center rounded-r-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
            >
              Search
            </button>
          </div>
        </div>
        <button
          type="button"
          className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-purple-500 text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          data-hs-overlay="#admin-add"
        >
          Add New Portfolio
        </button>
      </div>
      <AdminAddModal setSuccess={setSuccess} />
      <AdminDetails setMsg={setSuccess} form={form} />
      <ReactPaginate
        className="flex space-x-3 justify-center items-center pb-10"
        disabledLinkClassName="text-gray-500"
        previousLabel="<<"
        nextLabel=">>"
        pageCount={totalPages}
        activePage={currentPage}
        onPageChange={(page) => handlePagination(page)}
      />
    </div>
  );
};

export default AdminCRUD;
