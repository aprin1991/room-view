import { combineReducers } from "redux";
import darkModeReducer from "./toggle_dark_light/toggle.reducer";

const rootReducer = combineReducers({ darkMode: darkModeReducer });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
