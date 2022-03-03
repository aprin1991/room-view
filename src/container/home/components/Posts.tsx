import ToastMessage from "@components/toast";
import React, { useEffect, useState } from "react";

import { PostProps } from "../types";
import map from "lodash/map";
import PostCard from "./PostCard";
type IProps = {
  posts: Array<PostProps>;
};
const Posts: React.FC<IProps> = ({ posts }) => {
  const [sortedPost, setSortedPost] = useState(posts);
  useEffect(() => {
    const temp: any = Object.assign([], sortedPost);
    temp.sort((a: PostProps, b: PostProps) => b.id - a.id);
    setSortedPost(temp);
  }, []);
  return (
    <div className="w-full">
      {map(sortedPost, (post: PostProps) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
