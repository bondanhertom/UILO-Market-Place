import { Categories, Categories_Loading } from "./actionType";
import { BASE_URL } from "./actionType";
import Swal from "sweetalert2";


export const fetchCategoriesSuccess = (payload) => ({
    type: Categories, payload
})

export const fetchCategoriesLoading = (payload) => ({
    type: Categories_Loading, payload
})


export function fetchCategories() {
    return async (dispatch) => {
        try {
            const response = await fetch(BASE_URL + '/categories', {
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
            dispatch(fetchCategoriesSuccess(value))
            dispatch(fetchCategoriesLoading(false))
        } catch (error) {
            dispatch(fetchCategoriesLoading(false))
            console.log(error)
        }
    }
}

export const addCategory = (input) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(`${BASE_URL}/categories`, {
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
            dispatch(fetchCategories());

            Swal.fire({
                title: "Congrats...",
                text: "Success Add Category",
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

export const editCategory = (input, id) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(`${BASE_URL}/categories/${id}`, {
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

            dispatch(fetchCategories());

            Swal.fire({
                title: "Congrats...",
                text: "Success Edit Category",
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

export const fetchOneCategory = (id) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(`${BASE_URL}/categories/${id}`, {
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
            console.log(err.name);
            Swal.fire({
                title: "Oops...",
                text: err,
                icon: "error",
            });
        }
    };
};


export const deleteCategory = (id) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(`${BASE_URL}/categories/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    access_token: localStorage.getItem("access_token"),
                },
            });

            if (!response.ok) {
                throw new Error("There is an error!");
            }

            dispatch(fetchCategories());
            Swal.fire({
                title: "Congrats...",
                text: "Success Delete Category",
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
