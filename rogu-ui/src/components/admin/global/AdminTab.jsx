import React from "react";
import AdminCRUD from "../portfolio/AdminCRUD";
import AdminForm from "../inquiry/AdminForm";

const AdminTab = () => {
  return (
    <div className="max-w-7xl mx-auto bg-gray-300 rounded-2xl mb-12">
      <div className="border-b border-gray-200 w-full bg-blue-900 rounded-t-2xl">
        <nav
          className="-mb-0.5 flex justify-center space-x-6"
          aria-label="Tabs"
          role="tablist"
        >
          <button
            type="button"
            className="hs-tab-active:font-semibold hs-tab-active:border-blue-300 hs-tab-active:text-blue-300 py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-100 hover:text-blue-300 active"
            id="horizontal-alignment-item-1"
            data-hs-tab="#horizontal-alignment-1"
            aria-controls="horizontal-alignment-1"
            role="tab"
          >
            Portfolio
          </button>
          <button
            type="button"
            className="hs-tab-active:font-semibold hs-tab-active:border-blue-300 hs-tab-active:text-blue-300 py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-100 hover:text-blue-300"
            id="horizontal-alignment-item-2"
            data-hs-tab="#horizontal-alignment-2"
            aria-controls="horizontal-alignment-2"
            role="tab"
          >
            Inquiries
          </button>
        </nav>
      </div>
      <div className="mt-3">
        <div
          id="horizontal-alignment-1"
          role="tabpanel"
          aria-labelledby="horizontal-alignment-item-1"
        >
          <AdminCRUD />
        </div>
        <div
          id="horizontal-alignment-2"
          className="hidden"
          role="tabpanel"
          aria-labelledby="horizontal-alignment-item-2"
        >
          <AdminForm />
        </div>
      </div>
    </div>
  );
};

export default AdminTab;
