import React from "react";
import Dashboard from '../pages/dashboard/index.jsx'
import Login from '../pages/login/index.jsx'
import Register from '../pages/register/index.jsx'
import Product from '../pages/product/index.jsx'
import Category from '../pages/category/index.jsx'
import Layout from "../components/layout/layout.jsx";
import FormCategoryPage from "../pages/form-category/form-category.jsx";
import FormProductPage from "../pages/form-product/form-product.jsx"

import { createBrowserRouter, redirect } from "react-router-dom";


const router = createBrowserRouter([
    {
        loader: () => {
            if (localStorage.access_token) {
                return redirect("/");
            }

            return null;
        },
        path: "/login",
        element: <Login />,
    },
    {
        loader: () => {
            if (!localStorage.access_token) {
                return redirect("/login");
            }

            return null;
        },
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Dashboard />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/product",
                element: <Product />
            },
            {
                path: "/category",
                element: <Category />
            },



            {
                path: "/product-form",
                element: <FormProductPage />,
            },
            {
                path: "/product-form/:id",
                element: <FormProductPage />,
            },
            {
                path: "/category-form",
                element: <FormCategoryPage />,
            },
            {
                path: "/category-form/:id",
                element: <FormCategoryPage />,
            },
        ]
    }

]);

export default router