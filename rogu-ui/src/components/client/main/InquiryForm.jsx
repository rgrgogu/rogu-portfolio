import { useState } from "react";
import API_LINK from "../../../API";
import ErrorAlert from "../global/ErrorAlert";
import SuccessAlert from "../global/SuccessAlert";

const InquiryForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    website: "",
    details: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${API_LINK}/inquiry/`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }

    if (response.ok) {
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        website: "",
        details: "",
      });
      setError(null);
      setSuccess("New Inquiry added");
      setEmptyFields([]);
    }
  };

  return (
    <form action="">
      <div className="mt-6 grid gap-4 lg:gap-6">
        {error && <ErrorAlert msg={error} />}
        {success && <SuccessAlert msg={success} />}
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
          <div>
            <label
              htmlFor="hs-firstname-hire-us-1"
              className="block text-sm font-medium "
            >
              First Name
            </label>
            <input
              type="text"
              id="hs-firstname-hire-us-1"
              name="firstName"
              onChange={handleChange}
              value={form.firstName}
              className={
                emptyFields.includes("firstName")
                  ? "py-3 px-4 block w-full border border-red-600 rounded-md text-sm bg-gray-300"
                  : "py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-300"
              }
            />
          </div>
          <div>
            <label
              htmlFor="hs-lastname-hire-us-1"
              className="block text-sm  font-medium "
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              value={form.lastName}
              id="hs-lastname-hire-us-1"
              className={
                emptyFields.includes("lastName")
                  ? "py-3 px-4 block w-full border border-red-600 rounded-md text-sm bg-gray-300"
                  : "py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-300"
              }
            />
          </div>
        </div>
        {/* End Grid */}
        <div>
          <label
            htmlFor="hs-work-email-hire-us-1"
            className="block text-sm  font-medium "
          >
            Work Email
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={form.email}
            id="hs-work-email-hire-us-1"
            autoComplete="email"
            className={
              emptyFields.includes("email")
                ? "py-3 px-4 block w-full border border-red-600 rounded-md text-sm bg-gray-300"
                : "py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-300"
            }
          />
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
          <div>
            <label
              htmlFor="hs-company-hire-us-1"
              className="block text-sm  font-medium "
            >
              Company
            </label>
            <input
              type="text"
              name="company"
              onChange={handleChange}
              value={form.company}
              id="hs-company-hire-us-1"
              className={
                emptyFields.includes("company")
                  ? "py-3 px-4 block w-full border border-red-600 rounded-md text-sm bg-gray-300"
                  : "py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-300"
              }
            />
          </div>
          <div>
            <label
              htmlFor="hs-company-website-hire-us-1"
              className="block text-sm font-medium "
            >
              Company Website
            </label>
            <input
              type="text"
              name="website"
              onChange={handleChange}
              value={form.website}
              id="hs-company-website-hire-us-1"
              className={
                emptyFields.includes("website")
                  ? "py-3 px-4 block w-full border border-red-600 rounded-md text-sm bg-gray-300"
                  : "py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-300 "
              }
            />
          </div>
        </div>
        {/* End Grid */}
        <div>
          <label
            htmlFor="hs-about-hire-us-1"
            className="block text-sm font-medium "
          >
            Details
          </label>
          <textarea
            id="hs-about-hire-us-1"
            name="details"
            onChange={handleChange}
            value={form.details}
            rows={4}
            className={
              emptyFields.includes("details")
                ? "py-3 px-4 block w-full border border-red-600 rounded-md text-sm bg-gray-300"
                : "py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-300 "
            }
          />
        </div>
      </div>
      {/* End Grid */}

      <div className="mt-6 grid">
        <button
          onClick={handleSubmit}
          className="inline-flex justify-center items-center gap-x-3 text-center bg-[#151515] hover:bg-gray-900 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
        >
          Send inquiry
        </button>
      </div>
    </form>
  );
};

export default InquiryForm;
