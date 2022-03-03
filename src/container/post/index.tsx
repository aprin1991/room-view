import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import Request from "src/api";
import { PostProps } from "../home/types";
import toast from "@components/toast";
import CardLoading from "./components/CardLoading";
import Link from "next/link";

const Post = () => {
  const router = useRouter();
  const [post, setPost] = useState<PostProps>({
    id: 0,
    userId: 0,
    title: "",
    body: "",
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getPostDetail = async () => {
      try {
        const detail = await Request.get(`/posts/${router.query.id}`);
        setPost(detail.data);
      } catch (err: any) {
        setLoading(false);
        toast("error", err.message || "error");
      } finally {
        setLoading(false);
      }
    };
    router.query.id && getPostDetail();
  }, [router.query.id]);
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
    <div>
      {loading ? (
        <CardLoading />
      ) : (
        <article className="w-full mb-16">
          <header>
            <h5 className=" theme-f1 w-full inline-block post-title font-bold truncate text-xl pr-4 text-rose-300">
              {post.title}
            </h5>
            <span className=" text-black dark:text-white text-sm opacity-80">
              {calcDate}. {calcTime} {post.id} min read
            </span>
          </header>
          <p className="text-base text-black dark:text-white opacity-80">
            {post.body}
          </p>
        </article>
      )}
    </div>
  );
};

export default Post;
