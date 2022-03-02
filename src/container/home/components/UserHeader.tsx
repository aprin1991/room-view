import Image from "next/image";
import React from "react";
function UserHeader() {
  return (
    <figure className="flex justify-start items-center mb-16">
      <Image
        width={56}
        height={56}
        className="rounded-full "
        src="/assets/images/avatar.jpg"
        alt="Picture of the author"
      />
      <figcaption className="ml-3 dark:text-white text-black">
        <p className="mb-1 font-normal text-base">
          Personal blog by{" "}
          <a
            className="  text-red-500 dark:text-rose-300 underline hover:no-underline  underline-offset-2"
            href="https://mobile.twitter.com/dan_abramov"
          >
            Dan Abramov
          </a>
          .
        </p>
        <p className="font-normal text-base">I explain with words and code.</p>
      </figcaption>
    </figure>
  );
}

export default UserHeader;
