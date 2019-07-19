import { put } from "redux-saga/effects";
import { getSignupSuccess, getSignupFailure } from "../actions/actionCreators";


export function* getSignup(action){
    console.log("Sign up saga "+ action);


    const { firstName, lastName, email, password } = action;
    const body = { firstName, lastName, email, password }

    try{
     
    let usersResponse = yield fetch(`http://localhost:4000/users/?email=${email}`)
    let [users] = yield usersResponse.json();
    if(users!==undefined){
        alert("User already exist! Please login"); 
    }else{
    
        usersResponse = yield fetch(`http://localhost:4000/users`,{
            method: "POST",
            body: JSON.stringify(body),
            headers: {"Content-Type": "application/json"} 
        })
        if(usersResponse.id!==""&& usersResponse.id!==null){
            yield put(getSignupSuccess(users));
            alert("User successfully registered");
        
        }else{
            throw new Error("Registration Failed");
        }
    }
    
   
    
    // if(users.email === email){
    //     debugger;
    //     alert("User already exist! Please login");

        
    // }
    // else if(users===undefined){
    
    //     debugger;
    // usersResponse = yield fetch(`http://localhost:4000/users`,{
    //     method: "POST",
    //     body: JSON.stringify(body),
    //     headers: {"Content-Type": "application/json"} 
    // })
    // yield put(getSignupSuccess(users));
    // alert("User successfully registered");}
    

}catch(error){
    yield put(getSignupFailure(error));
}
}
