import { RootState } from "@redux/reducers";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToggleDarkMode from "src/redux/toggle_dark_light/toggle.action";
function DarkLight() {
  const dispatch = useDispatch();
  const [dark, setDark] = useState(false);
  const { darkMode } = useSelector((state: RootState) => state);
  useLayoutEffect(() => {
    if (darkMode !== -1) {
      if (darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
      } else {
        localStorage.theme = "light";
        document.documentElement.classList.remove("dark");
      }
    }
    setDark(darkMode);
  }, [darkMode]);

  const handleDarkMode = () => {
    setDark((prev) => !prev);
    dispatch(ToggleDarkMode(!darkMode));
  };
  return (
    <div
      onClick={handleDarkMode}
      className={`relative cursor-pointer flex justify-center items-center state-toggle-container ${
        !dark ? "light" : ""
      }`}
    >
      <div className="w-4 h-4 p-0.5 mr-0.5">
        <img
          src="/assets/images/dark.png"
          width={16}
          height={16}
          className=""
          alt="dark"
        />
      </div>
      <div className="w-4 h-4 p-0.5 ml-0.5">
        <img
          src="/assets/images/light.png"
          width={16}
          height={16}
          className=""
          alt="dark"
        />
      </div>
      <div
        className={`absolute toggle-thumb rounded-full right-0 top-0 bg-white`}
      />
    </div>
  );
}

export default DarkLight;
