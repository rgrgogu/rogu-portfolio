import React from "react";
import AdminHeader from "../components/admin/global/AdminHeader";
import AdminStats from "../components/admin/global/AdminStats";
import Footer from "../components/client/global/Footer";
import AdminTab from "../components/admin/global/AdminTab";

const Administrator = () => {
  return (
    <div className="bg-white">
      <AdminHeader />
      <AdminStats />
      <AdminTab />
      <Footer />
    </div>
  );
};

export default Administrator;
