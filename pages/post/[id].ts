import Request, { URLS } from "src/api";
import HomePage from "src/container/home";
import Post from "src/container/post";
export async function getServerSideProps({ query }: any) {
  try {
    const response = await Request.get(URLS.POST(query.id));
    return {
      props: {
        post: response?.data || {},
      },
    };
  } catch (err: any) {
    return {
      props: {
        post: {},
        requestedError: true,
        code: 404,
      },
    };
  }
}
export default Post;
