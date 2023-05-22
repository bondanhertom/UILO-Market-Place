import { combineReducers } from "redux";
import ProductReducer from './product-reducer'
import CategoryReducer from "./category-reducer";

export default combineReducers({
    ProductReducer,
    CategoryReducer
})



