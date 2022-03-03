import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import Request, { URLS } from "src/api";
import { PostProps } from "../home/types";
import toast from "@components/toast";
import CardLoading from "./components/CardLoading";
import Link from "next/link";
import Custom404 from "@components/404/404";
type IProps = {
  post: PostProps;
  requestedError: boolean;
};
const Post: React.FC<IProps> = ({ post, requestedError }) => {
  const calcDate = useMemo(() => {
    const displayDate = Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(new Date());
    return displayDate;
  }, [post]);
  const calcTime = useMemo(() => {
    const count = Math.ceil(post.id / 5);
    let cup = "";
    for (let i = 0; i < count; i++) {
      cup += "☕️";
    }
    return cup;
  }, [post]);

  return requestedError ? (
    <Custom404 />
  ) : (
    <div>
      <article className="w-full mb-16">
        <header className="mb-10">
          <h5 className=" theme-f1 w-full inline-block post-title post-detail-title font-bold text-xl pr-4 text-rose-300">
            {post.title}
          </h5>
          <span className=" text-black dark:text-white text-sm opacity-80">
            {calcDate}. {calcTime} {post.id} min read
          </span>
        </header>
        <p className="text-base text-black dark:text-white opacity-80 leading-5">
          {post.body}
        </p>
      </article>
    </div>
  );
};

export default Post;
