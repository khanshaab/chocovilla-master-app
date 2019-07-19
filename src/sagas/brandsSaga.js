import { put } from "redux-saga/effects";
import { getBrandsSuccess, getBrandsFailure } from "../actions/actionCreators";

export function* getBrands(){
    try{
let brandsResponse = yield fetch(`http://localhost:4000/brands`);
let brands = yield brandsResponse.json();
yield put(getBrandsSuccess(brands));
}catch(err){
    yield put(getBrandsFailure(err));
}
}