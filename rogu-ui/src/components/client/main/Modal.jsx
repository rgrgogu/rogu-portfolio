import ModalForm from "./ModalForm";

const Modal = () => {
  return (
    <>
      <div
        id="hs-modal-signin"
        className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
      >
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center justify-center">
          <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] ">
            <div className="p-4 sm:p-7 ">
              <div className="text-center">
                <h2 className="block text-2xl font-bold text-gray-800 dark:text-gray-200">
                  Sign in
                </h2>
              </div>
              <div className="mt-5">
                {/* Form */}
                <ModalForm />
                {/* End Form */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
