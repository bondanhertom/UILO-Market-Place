import { Detail_Products, Detail_Products_Loading } from "../action/actionType";

const initialState = {
    detailProducts: [],
    detailProductsLoading: false
}

export default function DetailProductReducer(state = initialState, { type, payload }) {
    switch (type) {
        case Detail_Products:
            return {
                ...state,
                detailProducts: payload
            }
        case Detail_Products_Loading:
            return {
                ...state,
                detailProductsLoading: payload
            }
        default:
            return state
    }
}