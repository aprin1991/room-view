import Head from "next/head";
import Link from "next/link";
import React from "react";

const Custom404 = () => {
  return (
    <div className="p-5 lg:p-20 flex justify-center w-full">
      <figure className=" w-full px-2 lg:px-10 py-16 flex-ap flex-col items-center w-full">
        <figcaption className="flex flex-col items-center mb-10">
          <p className="text-black dark:text-white text-base font-semibold">
            Sorry We Can't find
          </p>

          <Link href="/">
            <a className="bg-blue-600 px-12 rounded-md mt-6 py-2 text-white text-base mt-2">
              Home
            </a>
          </Link>
        </figcaption>
        <div className="flex justify-center">
          <img src="/assets/images/404.png" alt="not found" />
        </div>
      </figure>
    </div>
  );
};
export default Custom404;
