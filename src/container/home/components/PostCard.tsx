import React, { useMemo } from "react";
import { PostProps } from "../types";
import Link from "next/link";
type Iprops = {
  post: PostProps;
};
const PostCard: React.FC<Iprops> = ({ post }) => {
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
  return (
    <article className="w-full mb-16">
      <header>
        <Link href={`/post/${post.id}`}>
          <a className=" theme-f1 w-full inline-block post-title font-bold truncate text-xl pr-4 text-rose-300">
            {post.title}
          </a>
        </Link>
        <span className="text-white text-sm opacity-80">
          {calcDate}. {calcTime} {post.id} min read
        </span>
      </header>
      <p className="text-base text-white opacity-80">{post.body}</p>
    </article>
  );
};

export default PostCard;
