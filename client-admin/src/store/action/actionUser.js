import { BASE_URL } from "./actionType";
import Swal from "sweetalert2";

export const register = (input) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(`${BASE_URL}/register`, {
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
                text: "Success Add New Admin",
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

export const login = (input) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(`${BASE_URL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(input),
            });

            const result = await response.json();

            if (!response.ok) {
                throw result.message;
            }
            localStorage.setItem("access_token", result.access_token);
            Swal.fire({
                title: "Congrats...",
                text: "Success Login",
                icon: "success",
            });
            return { message: "Success" };
        } catch (err) {
            Swal.fire({
                title: "Oops...",
                text: err,
                icon: "error",
            });

        }
    };
};
