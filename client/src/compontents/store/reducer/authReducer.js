import { ActiontTpes } from "../action/actiontypes";

const initState = {
  userName: null,
  user: null,
  token: null,
  isLoaded: false,
  isLogin: false,
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case ActiontTpes.SIGN_IN:
      return {
        ...state,
        userName: action.data.userName,
        user: action.data.user,
        token: action.data.token,
        isLoaded: true,
        isLogin: true,
      };
    case ActiontTpes.LOG_OUT:
      return {
        ...initState, 
      };
    case ActiontTpes.PROFILE_LOADED:
      return {
        ...state,
        userName: action.user.user.userName,
        user: action.user.user,
        token: action.user.token,
        isLoaded: true,
        isLogin: true,
      }
    default:
      return state;
  }
};

export default authReducer;


