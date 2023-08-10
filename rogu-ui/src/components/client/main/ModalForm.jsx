import { useState } from "react";

const ModalForm = () => {
  const [acc, setAcc] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setAcc((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();

    console.log(acc);

    if (acc.email === "admin" && acc.password === "admin")
      window.location.href = "/admin";
  };

  return (
    <form>
      <div className="grid gap-y-4">
        {/* Form Group */}
        <div>
          <label htmlFor="email" className="block text-sm mb-2 dark:text-white">
            Email address
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleOnChange}
              className="py-3 px-4 block w-full border border-gray-200  bg-gray-800 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 text-white"
              required
            />
            <div className="hidden absolute inset-y-0 right-0 items-center pointer-events-none pr-3">
              <svg
                className="h-5 w-5 text-red-500"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
            </div>
          </div>
        </div>
        {/* End Form Group */}
        {/* Form Group */}
        <div>
          <div className="flex justify-between items-center">
            <label
              htmlFor="password"
              className="block text-sm mb-2 dark:text-white"
            >
              Password
            </label>
          </div>
          <div className="relative">
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleOnChange}
              className="py-3 px-4 block w-full border border-gray-200  bg-gray-800 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 text-white"
              required
            />
            <div className="hidden absolute inset-y-0 right-0 items-center pointer-events-none pr-3">
              <svg
                className="h-5 w-5 text-red-500"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
            </div>
          </div>
        </div>
        {/* End Form Group */}
        <button
          onClick={handleClick}
          className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
        >
          Sign in
        </button>
      </div>
    </form>
  );
};

export default ModalForm;
