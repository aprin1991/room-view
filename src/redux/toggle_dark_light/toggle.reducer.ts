import ToggleActionTypes from "./ToggleActionTypes";
const INITIAL_STATE = true;

const darkModeReducer = (state: any = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ToggleActionTypes.TOGGLE_DARK_MODE:
      return action.payload;
    default:
      return state;
  }
};

export default darkModeReducer;
