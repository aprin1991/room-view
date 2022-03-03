import React, { useMemo } from "react";
import { PostProps } from "../types";
import Link from "next/link";
import { calcDate, calcTime } from "src/utilities/helper";
type Iprops = {
  post: PostProps;
};
const PostCard: React.FC<Iprops> = ({ post }) => {
  return (
    <article className="w-full mb-16">
      <header>
        <Link href={`/post/${post.id}`}>
          <a className=" theme-f1 w-full inline-block post-title font-bold truncate text-xl pr-4 text-rose-300">
            {post.title}
          </a>
        </Link>
        <span className=" text-black dark:text-white text-sm opacity-80">
          {calcDate(post.id)}. {calcTime(post.id)} {post.id} min read
        </span>
      </header>
      <p className="text-base text-black dark:text-white opacity-80">
        {post.body}
      </p>
    </article>
  );
};

export default React.memo(PostCard);
