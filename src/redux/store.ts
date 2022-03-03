import { createStore, applyMiddleware } from "redux";
import { useDispatch } from "react-redux";
import logger from "redux-logger";
import rootReducer from "./reducers";
const middlewares = [];
// if (process.env.NODE_ENV === "development") {
// }
middlewares.push(logger);

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
