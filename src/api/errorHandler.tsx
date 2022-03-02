import toast from "@components/toast";
// import { toggleInternetModal } from "@redux/actions/internet";

const errorHandler = async (err: any) => {
  let errorStatus = err?.response?.status ? err.response.status : 500;
  let message = err?.response?.data?.message;
  return new Promise(() => {
    if (err) {
      if (err.toJSON().message === "Network Error") {
        //
      } else if (!err?.response) {
      } else {
        switch (errorStatus) {
          case 400:
            toast("error", message);
            break;
          case 503:
            toast("error", "Sorry! Server Error. Please try again.");
            break;
          case 500:
            toast("error", "Sorry! Server Error. Please try again.");
            break;

          default:
            err?.data?.message && toast("error", err?.data?.message);
            break;
        }
      }
    } else {
      //toast error message
      throw err;
    }
  });
};
export default errorHandler;
