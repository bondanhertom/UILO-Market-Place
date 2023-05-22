import { Products, Products_Loading } from "./actionType";
import { BASE_URL } from "./actionType";
import Swal from "sweetalert2";

export const fetchProductsSuccess = (payload) => ({
    type: Products, payload
})

export const fetchProductsLoading = (payload) => ({
    type: Products_Loading, payload
})


export function fetchProducts() {
    return async (dispatch) => {
        try {
            const response = await fetch(BASE_URL + '/products', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    access_token: localStorage.getItem("access_token"),
                },
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


export const addProduct = (input) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(`${BASE_URL}/products`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    access_token: localStorage.getItem("access_token"),
                },
                body: JSON.stringify(input),
            });

            const result = await response.json();

            if (!response.ok) {
                throw result.message;
            }
            Swal.fire({
                title: "Congrats...",
                text: "Success Add Product",
                icon: "success",
            });
            return result;
        } catch (err) {
            Swal.fire({
                title: "Oops...",
                text: err,
                icon: "error",
            });
        }
    };
};

export const fetchOneProduct = (id) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(`${BASE_URL}/products/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    access_token: localStorage.getItem("access_token"),
                },
            });

            if (!response.ok) {
                throw result.message;
            }

            const result = await response.json();
            return result;
        } catch (err) {
         
            Swal.fire({
                title: "Oops...",
                text: err,
                icon: "error",
            });
        }
    };
};

export const editProduct = (input, id) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(`${BASE_URL}/products/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    access_token: localStorage.getItem("access_token"),
                },
                body: JSON.stringify(input),
            });

            const result = await response.json();

            if (!response.ok) {
                throw result.message;
            }

            Swal.fire({
                title: "Congrats...",
                text: "Success Edit Products",
                icon: "success",
            });

        return result;
        } catch (err) {
            Swal.fire({
                title: "Oops...",
                text: err,
                icon: "error",
            });
            return err;
        }
    };
};

export const deleteProduct = (id) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(`${BASE_URL}/products/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    access_token: localStorage.getItem("access_token"),
                },
            });

            if (!response.ok) {
                throw result.message;
            }

            dispatch(fetchProducts());
            Swal.fire({
                title: "Congrats...",
                text: "Success Delete Products",
                icon: "success",
            });
        } catch (err) {
            Swal.fire({
                title: "Oops...",
                text: err,
                icon: "error",
            });
        }
    };
}; 
