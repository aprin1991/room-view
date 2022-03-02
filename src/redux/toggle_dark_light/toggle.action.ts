import ToggleActionTypes from "./ToggleActionTypes";
const ToggleDarkMode = (light: boolean) => {
  return {
    type: ToggleActionTypes.TOGGLE_DARK_MODE,
    payload: light,
  };
};

export default ToggleDarkMode;
