import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import Swal from 'sweetalert2';
import "./index.css"

export default function Navbar() {
    const navigate = useNavigate();
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);


    function handleLogout(e) {
        e.preventDefault();

        Swal.fire({
            title: 'Are you sure?',
            text: 'You will be logged out',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, log me out',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.clear();
                navigate("/login");
            }
        });
    }


    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
            <div className="container d-flex justify-content-between">
                <div>
                    <Link to={"/"} className="navbar-brand mt-2 mt-lg-0">
                        <img src={logo} height="30" alt="Logo Somethinc" loading="lazy" />
                    </Link>
                </div>

                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={handleNavCollapse}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className={`collapse navbar-collapse ${isNavCollapsed ? "" : "show"}`}
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link">
                                DASHBOARD
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/product"} className="nav-link">
                                PRODUCTS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/category"} className="nav-link">
                                CATEGORY
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/register"} className="nav-link">
                                ADD NEW ADMIN
                            </Link>
                        </li>
                        <li className="nav-item">
                            {localStorage.access_token ? (
                                <a className="nav-link" onClick={handleLogout}>
                                    LOGOUT
                                </a>
                            ) : (
                                <Link to={"/login"} className="nav-link">
                                    LOGIN
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );


}
