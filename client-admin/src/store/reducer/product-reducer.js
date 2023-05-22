import { Products, Products_Loading } from "../action/actionType";

const initialState = {
    products: [],
    productsLoading: false
}

export default function ProductReducer(state = initialState, { type, payload }) {
    switch (type) {
        case Products:
            return {
                ...state,
                products: payload
            }
        case Products_Loading:
            return {
                ...state,
                productsLoading: payload
            }
        default:
            return state
    }
}