import React, { useContext, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { storeContext } from "../Context";

export default function Header() {
    const { cart } = useContext(storeContext)
    const location = useLocation()

    const navItems = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About",
            path: "/about"
        },
        {
            name: "Contact",
            path: "/contact"
        }
    ]
    return (
        <header className="w-full sticky top-0 left-0 z-50 bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link to="/">
                    <div className="text-2xl font-bold text-blue-600">
                        Productify
                    </div>
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex space-x-8 text-gray-600 font-medium">
                    {
                        navItems.map((data, index) => {
                            return (
                                <Link key={index} to={data.path} className={`hover:text-blue-600 ${location.pathname == data.path ? 'bg-amber-400 font-bold text-white' : ''} px-4 rounded-3xl py-2 transition`}>
                                    {data.name}
                                </Link>
                            )
                        })
                    }
                </nav>

                {/* Actions */}
                <div className="flex items-center space-x-4">
                    <button className="hidden md:block text-gray-600 hover:text-blue-600">
                        Login
                    </button>

                    <Link to="/cart">
                        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                            <FaShoppingCart />
                            {cart.length}
                        </button>
                    </Link>


                </div>
            </div>
        </header>
    );
}
