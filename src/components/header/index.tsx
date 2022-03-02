import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="flex justify-between mb-9">
      <Link href="/">
        <a
          className="theme-f1 text-2xl text-white leading-8 font-bold"
          aria-label="website title"
        >
          <h3>Overreacted</h3>
        </a>
      </Link>
    </header>
  );
};
