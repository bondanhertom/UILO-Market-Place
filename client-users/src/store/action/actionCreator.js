import { Products, Products_Loading, Detail_Products, Detail_Products_Loading } from "./actionType";
import { BASE_URL } from "./actionType";

export const fetchProductsSuccess = (payload) => ({
    type: Products, payload
})

export const fetchProductsLoading = (payload) => ({
    type: Products_Loading, payload
})

export const fetchDetailProductsSuccess = (payload) => ({
    type: Detail_Products, payload
})

export const fetchDetailProductsLoading = (payload) => ({
    type: Detail_Products_Loading, payload
})


export function ProductsPage() {
    return async (dispatch) => {
        try {
            const response = await fetch(BASE_URL + '/pub/products', {
                method: "GET",
            });

            if (!response.ok) {
                throw await response.text();
            }

            const value = await response.json()
            dispatch(fetchProductsSuccess(value))
            dispatch(fetchProductsLoading(false))
        } catch (error) {
            dispatch(fetchProductsLoading(false))
            console.log(error)
        }
    }
}

export function DetailProducts(id) {
    return async (dispatch) => {
        try {
            const response = await fetch(BASE_URL + `/pub/products/${id}`, {
                method: "GET",
            });

            if (!response.ok) {
                throw await response.text();
            }

            const value = await response.json()
            dispatch(fetchDetailProductsSuccess(value))
            dispatch(fetchDetailProductsLoading(false))
        } catch (error) {
            dispatch(fetchDetailProductsLoading(false))
            console.log(error)
        }
    }
}
