import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";
import { Bounce, ToastContainer } from "react-toastify";

const RootLayout = () => {
  const navigation = useNavigation();
  return (
    <div className="bg-base-300">
      <Navbar />
      {navigation.state === "loading" ? (
        <div className="flex justify-center items-center py-10">
          <span className="loading loading-spinner text-success"></span>
          <p>Looooing Data....</p>
        </div>
      ) : (
        <Outlet />
      )}

      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default RootLayout;
