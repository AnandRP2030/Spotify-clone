const initialState = {
  token: "",
  isAuth: false,
  UserData: [],
  // UserDataByForm: [],
  error: false,
  isPremiumUser:false
  };
  
  const SignupReducer = (state = initialState,action) => {
    switch(action.type){
        case "LOGIN_SUCCESS":{
          return{
            ...state,
            token:action.payload.sub,
            isAuth:true,
            UserData:[action.payload],
          }
      
        }
        // case "LOGIN_SUCCESS_BY_FORM":{
        //   return{
        //     ...state,
        //     isAuth:true,
        //     UserDataByForm:[action.payload],
        //   }
      
        // }
        case "LOGOUT_USER":{
          return{
            ...state,
            isAuth:false,
          }
        }
        default:
        return state;
      }
  };
  
  export { SignupReducer };