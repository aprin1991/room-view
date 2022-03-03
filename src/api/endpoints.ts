import { identity } from "lodash";

const URLS = {
  POSTS: "/posts",
  POST: (id: any) => `/posts/${id}`,
};

export default URLS;
