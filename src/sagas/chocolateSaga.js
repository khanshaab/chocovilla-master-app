import { put } from "redux-saga/effects";
import { getChocolatesSuccess, getChocolatesFailure } from "../actions/actionCreators";


export function* getChocolates(){
    try{
    let chocolatesResponse = yield fetch("http://localhost:4000/chocolates");
    let chocolates = yield chocolatesResponse.json();
    yield put(getChocolatesSuccess(chocolates));
    }catch(error){
        yield put(getChocolatesFailure(error));
    }
}