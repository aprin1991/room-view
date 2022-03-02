import Link from "next/link";
import React from "react";
import DarkLight from "./components/Dark-Light";

export const Header = () => {
  return (
    <header className="flex justify-between items-center mb-9">
      <Link href="/">
        <a
          className="theme-f1 text-2xl dark:text-white text-black leading-8 font-bold"
          aria-label="website title"
        >
          <h3>Overreacted</h3>
        </a>
      </Link>
      <DarkLight />
    </header>
  );
};
