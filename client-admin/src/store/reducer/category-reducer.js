import { Categories, Categories_Loading } from "../action/actionType";

const initialState = {
    categories: [],
    categoriesLoading: false
}

export default function CategoryReducer(state = initialState, { type, payload }) {
    switch (type) {
        case Categories:
            return {
                ...state,
                categories: payload
            }
        case Categories_Loading:
            return {
                ...state,
                categoriesLoading: payload
            }
        default:
            return state
    }
}