import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import React, { useState } from "react";

import "./index.css"

export default function Navbar() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

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
                                HOME
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/product"} className="nav-link">
                                PRODUCTS
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );

}
