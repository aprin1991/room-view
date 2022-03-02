import React from "react";
import Posts from "./components/Posts";
import UserHeader from "./components/UserHeader";

function HomePage() {
  return (
    <div className="">
      <UserHeader />
      <Posts />
    </div>
  );
}

export default HomePage;
