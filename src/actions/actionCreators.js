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
    GET_CHOCOLATES_FAILURE,
    GET_DATA,
    GET_DATA_SUCCESS,
    GET_DATA_FAILURE 
    } from "./actionTypes";

//fieldInput
export function changefieldInput(fieldName, fieldValue){
    // console.log(fieldName,fieldValue);
    return {type: CHANGE_FIELD_INPUT, fieldName, fieldValue}
}

//signin
export function getSignup(firstName, lastName, email, password){
    return {type: GET_SIGNUP, firstName, lastName, email, password};
}

export function getSignupSuccess(users){
    return {type: GET_SIGNUP_SUCCESS, users};
}

export function getSignupFailure(error){
    return {type: GET_SIGNUP_FAILURE, error};
}

//login
export function getLogin(email, password){
    return {type: GET_LOGIN, email, password};
}

export function getLoginSuccess(users){
    return {type: GET_LOGIN_SUCCCESS, users};
}

export function getLoginFailure(error){
    return {type: GET_LOGIN_FAILURE, error};
}

//brands
export function getBrands(){
    return {type: GET_BRANDS};
}

export function getBrandsSuccess(brands){
    return {type: GET_BRANDS_SUCCCESS, brands};
}

export function getBrandsFailure(error){
    return {type: GET_BRANDS_FAILURE, error};
}

//chocolates
export function getChocolates(){
    return {type: GET_CHOCOLATES};
}

export function getChocolatesSuccess(chocolates){
    return {type: GET_CHOCOLATES_SUCCESS, chocolates};
}

export function getChocolatesFailure(error){
    return {type: GET_CHOCOLATES_FAILURE, error};
}

// //logout
// export function getLogout(){
//     return {type: GET_LOGOUT}
// }

// export function getLogoutSuccess(logout){
//     return {type: GET_LOGOUT_SUCCESS, logout}
// }

// export function getLogoutFailure(error){
//     return {type: GET_LOGOUT_SUCCESS, error}
// }

export function get_data() {
    return { type: GET_DATA };
  }
  
  export function get_data_success(chocolates, types, brands) {
    return { type: GET_DATA_SUCCESS, chocolates, types, brands };
  }
  
  export function get_data_failure(error) {
    return { type: GET_DATA_FAILURE, error };
  }
