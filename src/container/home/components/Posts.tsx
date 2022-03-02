import ToastMessage from "@components/toast";
import React, { useEffect, useState } from "react";
import Request, { URLS } from "src/api";
import { PostProps } from "../types";
import map from "lodash/map";
import PostCard from "./PostCard";
import PostsLoading from "./PostsLoading";
const Posts: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Array<PostProps>>([]);
  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await Request.get(URLS.POSTS);
        setPosts(response.data);
      } catch (err: any) {
        ToastMessage("error", err?.message);
      } finally {
        setLoading(false);
      }
    };
    getPosts();
  }, []);
  return (
    <div className="w-full">
      {loading ? (
        <PostsLoading />
      ) : (
        map(posts, (post: PostProps) => <PostCard key={post.id} post={post} />)
      )}
    </div>
  );
};

export default Posts;
