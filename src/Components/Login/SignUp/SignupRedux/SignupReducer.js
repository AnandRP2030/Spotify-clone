const initialState = {
  token: "",
  isAuth: false,
  UserData: [],
  OTP: "",
  error: false,
  isPremiumUser: false,
};

const SignupReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS": {
      return {
        ...state,
        token: action.payload.sub,
        isAuth: true,
        UserData: [action.payload],
      };
    }
    case "YOUR_OTP": {
      return {
        ...state,
        isAuth: true,
        OTP: action.payload,
      };
    }
    case "LOGOUT_USER": {
      return {
        ...state,
        isAuth: false,
      };
    }
    case "PREMIUM USER": {
      return {
        ...state,
        isPremiumUser: true,
      };
    }

    default:
      return state;
  }
};

export { SignupReducer };
