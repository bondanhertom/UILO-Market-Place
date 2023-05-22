import React from "react";
import Home from '../pages/home/index.jsx'
import Product from '../pages/product/product.jsx'
import ProductDetail from '../pages/product-detail/product-detail.jsx'
import Layout from "../components/layout/layout.jsx";

import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";


const router = createBrowserRouter([
    {
        path: '',
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/product",
                element: <Product />
            },
            {
                path: "/product/:id",
                element: <ProductDetail />
            }
        ]
    }

]);

export default router