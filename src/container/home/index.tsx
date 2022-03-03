import Custom404 from "@components/404/404";
import React from "react";
import Posts from "./components/Posts";
import UserHeader from "./components/UserHeader";
import { PostProps } from "./types";
type IProps = {
  posts: PostProps[];
  requestedError: boolean;
};
const HomePage: React.FC<IProps> = ({ posts, requestedError }) => {
  return requestedError ? (
    <Custom404 />
  ) : (
    <div className="">
      <UserHeader />
      <Posts posts={posts} />
    </div>
  );
};

export default HomePage;
