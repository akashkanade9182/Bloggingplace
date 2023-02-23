import * as types from "./actionTypes"



const initialState = {
  isAuth: false,
  token: "",
  data:{},
  isLoading: false,
  isError: false,
  usertype:""
};

const reducer = (state = initialState,action) => {
  const {type,payload}=action;
  switch(type)
  {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isAuth:false,
        isLoading:true
      };
      case types.LOGIN_SUCCESS:
        return {
          ...state,
          isLoading:false,
          isAuth:true,
          token:payload.token,
          data:payload.user,
          isError:false

        };
        case types.LOGIN_FAILURE:
          return {
            ...state,
            isAuth:false,
            isLoading:false,
            isError:true,
            token:"",
            data:{}
          }
          case types.LOGOUT_SUCCESS:
            return {
              ...state,
              isAuth:false,
              isLoading:false,
              isError:false,
              token:"",
              data:{}
            }
    default:return state;
  }
 
};

export { reducer };
