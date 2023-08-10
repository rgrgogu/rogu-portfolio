import { FiEye } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import ReactPaginate from "react-paginate";
import AdminInquiryModal from "./AdminInquiryModal";
import API_LINK from "../../../API";
import { useState, useEffect } from "react";
import AdminInquiryDeleteModal from "./AdminInquiryDeleteModal";
import SuccessAlert from "../../client/global/SuccessAlert";
import { useInquirysContext } from "../../../hooks/useInquiriesContext";

const AdminForm = () => {
  const [msg, setMsg] = useState();
  const { form, currentPage, totalPages, dispatch } = useInquirysContext();
  const [id, setID] = useState();
  const [text, setText] = useState("");

  const fetchWorkouts = async () => {
    const response = await fetch(
      `${API_LINK}/inquiry?page=${currentPage || 1}`
    );
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "SET_INQUIRIES", payload: json });
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

    const response = await fetch(`${API_LINK}/inquiry/search/${text}`);
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "SET_INQUIRIES", payload: json });
    }
  };

  const handleClick = (id) => {
    setID(id);
  };

  const handlePagination = async (page) => {
    if (text === "") {
      const response = await fetch(
        `${API_LINK}/inquiry?page=${page.selected + 1 || 1}`
      );
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_INQUIRIES", payload: json });
      }
    } else {
      const response = await fetch(
        `${API_LINK}/inquiry/search/${text}?page=${page.selected + 1 || 1}`
      );
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_INQUIRIES", payload: json });
      }
    }
  };

  return (
    <div className="flex flex-col max-w-5xl mx-auto pb-12 pt-8">
      {msg && <SuccessAlert msg={msg} />}
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
            <div className="py-5 max-w-xl mx-auto">
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
                  name="search"
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Search Portfolio's Name"
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
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase"
                    >
                      Company
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase"
                    >
                      Company Website
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {form &&
                    form.map((item, idx) => (
                      <tr key={idx}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                          {item.firstName + " " + item.lastName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                          {item.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                          {item.company}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                          {item.website}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                          <div className="flex justify-start space-x-1">
                            <button
                              type="button"
                              onClick={() => handleClick(item._id)}
                              className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                              data-hs-overlay="#admin-view"
                            >
                              <FiEye />
                            </button>
                            <button
                              type="button"
                              onClick={() => handleClick(item._id)}
                              className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                              data-hs-overlay="#admin-deleteInquiry"
                            >
                              <MdDeleteOutline />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <ReactPaginate
              className="flex space-x-3 justify-center items-center py-4"
              disabledLinkClassName="text-gray-500"
              previousLabel="<<"
              nextLabel=">>"
              pageCount={totalPages}
              activePage={currentPage}
              onPageChange={(page) => handlePagination(page)}
            />
          </div>
        </div>
      </div>
      <AdminInquiryModal id={id} />
      <AdminInquiryDeleteModal id={id} setMsg={setMsg} />
    </div>
  );
};

export default AdminForm;
