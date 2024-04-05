import axios from "axios";

export const ActiontTpes = {
  SIGN_IN: "signin",
  LOG_OUT: "logout",
  PROFILE_LOADED: "profileLoaded",
};

export const acount = (userName) => {
  return {
    type: ActiontTpes.SIGN_IN,
    payload: { userName: userName },
  };
};
export const loadProfile = () => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("api/user/profile")
        .then((res) => {
          console.log(res.data);
          dispatch({ type: ActiontTpes.PROFILE_LOADED, user: res.data });
        })
        .catch((error) => console.log(error));
    } else {
    }
  };
};
