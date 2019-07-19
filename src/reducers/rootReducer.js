import produce from "immer";
import { GET_SIGNUP, 
    GET_SIGNUP_SUCCESS, 
    GET_SIGNUP_FAILURE, 
    CHANGE_FIELD_INPUT, 
    GET_LOGIN, 
    GET_LOGIN_SUCCCESS, 
    GET_LOGIN_FAILURE, 
    GET_BRANDS, 
    GET_BRANDS_SUCCCESS, 
    GET_BRANDS_FAILURE, 
    GET_CHOCOLATES, 
    GET_CHOCOLATES_SUCCESS,
    GET_CHOCOLATES_FAILURE
   } from "../actions/actionTypes";

const initialState = { brands: [], 
    chocolates:[], 
    types:[],
    search:"",
    firstName: "", 
    lastName: "", 
    email: "", 
    password: "", 
    isLoading: false,
    isSignup: false, 
    isLogin: localStorage.getItem("login"),
    };
//const logState = {email: "", password: "", isLoading: true};
// const brandState = {brands: []};
export function rootReducer(prevState = initialState, action){
   return produce(prevState, draft => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        //signup
        case GET_SIGNUP:
            // console.log("GET signup actiojn object "+action);
            draft.isLoading= true;
            break;
        case GET_SIGNUP_SUCCESS:
            draft.users = action.users;
            draft.isLoading = false;
            draft.isSignup = true;
            break;
        case GET_SIGNUP_FAILURE:
            draft.error = action.error;
            draft.isLoading = false;
            draft.isSignup = false;
            break;
        //fieldInput
        case CHANGE_FIELD_INPUT:
            // console.log(action.fieldName,action.fieldValue);
            draft[action.fieldName] = action.fieldValue;
            break;
        //login
        case GET_LOGIN:
            draft.isLoading = true;
            break;
        case GET_LOGIN_SUCCCESS:
            draft.users = action.users;
            draft.isLoading = false;
            draft.isLogin = true;
            localStorage.setItem("login", true);
            break;
        case GET_LOGIN_FAILURE:
            draft.error = action.error;
            draft.isLoading = false;
            draft.isLogin = false;
            localStorage.setItem("login", false);
            break;
        //brands
        case GET_BRANDS:
            draft.isLoading = true;
            break;
        case GET_BRANDS_SUCCCESS:
            draft.brands = action.brands;
            draft.isLoading = false;
            break;
        case GET_BRANDS_FAILURE:
            draft.error = action.error;
            draft.isLoading = false;
            break;
        //chocolates
        case GET_CHOCOLATES:
            draft.isLoading = true;
            break;
        case GET_CHOCOLATES_SUCCESS:
            draft.chocolates = action.chocolates;
            draft.isLoading = false;
            break;
        case GET_CHOCOLATES_FAILURE:
            draft.error = action.error;
            draft.isLoading = false;
            break;
        case "LOGOUT":
            localStorage.clear();
            draft.isLogin = false;
            break;
    }       
   }) 
}