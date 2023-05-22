import { combineReducers } from "redux";
import ProductReducer from './product-reducer'
import DetailProductReducer from "./detail-product-reducer";

export default combineReducers({
    ProductReducer,
    DetailProductReducer
})
