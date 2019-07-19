import { put } from "redux-saga/effects";
import { getLoginSuccess, getLoginFailure } from "../actions/actionCreators";


export function* getLogin({email, password}){
    try {
    const loginResponse = yield fetch(`http://localhost:4000/users/?email=${email}`);
    const [users] = yield loginResponse.json();
    
    if(users !== undefined){
      if(users.email === email && users.password===password){
      alert("You are now logged in");

      yield put(getLoginSuccess(users));
      }else if(users.password!==password){
        alert("Please Enter Correct Email or Password");
      }
    }else alert("You are not a valid user please Register");
    
    }catch(error){
      yield put(getLoginFailure(error));  
    }
}