import { takeLatest, all } from "redux-saga/effects";
import { GET_SIGNUP, GET_LOGIN, GET_BRANDS, GET_CHOCOLATES } from "../actions/actionTypes";
import { getLogin } from "./loginSaga";
import { getSignup } from "./signup";
import { getBrands } from "./brandsSaga";
import { getChocolates } from "./chocolateSaga";
//import { getDataSaga } from "../sagas/getDataSaga";

export function* rootSaga(){
    yield all([takeLatest(GET_SIGNUP, getSignup),
            takeLatest(GET_LOGIN, getLogin), 
            takeLatest(GET_BRANDS, getBrands),
            takeLatest(GET_CHOCOLATES, getChocolates)]);
}