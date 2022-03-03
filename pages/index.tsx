import Request, { URLS } from "src/api";
import HomePage from "src/container/home";

export async function getServerSideProps() {
  try {
    const response = await Request.get(URLS.POSTS);
    return {
      props: {
        posts: response?.data || [],
      },
    };
  } catch (err: any) {
    return {
      props: {
        posts: [],
        requestedError: true,
        code: 404,
      },
    };
  }
}

export default HomePage;
