const initialState = {
  token: "",
  isAuth: false,
  UserData: [],
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