import { RootState } from "@redux/reducers";
import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Header } from "./../";

type Iprops = {
  children: React.ReactNode;
};
export const Container: React.FC<Iprops> = ({ children }) => {
  const { darkMode } = useSelector((state: RootState) => state);
  console.log("darkMode", darkMode);
  return (
    <div className="w-full xl:w-256 mx-auto pt-9 px-4 max-w-2xl container">
      <Header />
      <main>{children}</main>
      <ToastContainer
        position="top-left"
        autoClose={false}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={4}
      />
    </div>
  );
};
