import { RootState } from "@redux/reducers";
import ToggleDarkMode from "@redux/toggle_dark_light/toggle.action";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Header } from "./../";

type Iprops = {
  children: React.ReactNode;
};
export const Container: React.FC<Iprops> = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      dispatch(ToggleDarkMode(true));
    } else {
      document.documentElement.classList.remove("dark");
      dispatch(ToggleDarkMode(false));
    }
  }, []);
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
