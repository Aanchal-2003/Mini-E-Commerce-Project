import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">
                        Productify
                    </h2>
                    <p className="text-sm leading-relaxed">
                        Building modern, high-quality products that enhance your everyday
                        experience.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">About Us</li>
                        <li className="hover:text-white cursor-pointer">Careers</li>
                        <li className="hover:text-white cursor-pointer">Blog</li>
                        <li className="hover:text-white cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* Products */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Products</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">New Arrivals</li>
                        <li className="hover:text-white cursor-pointer">Best Sellers</li>
                        <li className="hover:text-white cursor-pointer">Pricing</li>
                        <li className="hover:text-white cursor-pointer">Offers</li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <span className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 cursor-pointer">
                            <FaFacebookF />
                        </span>
                        <span className="p-2 bg-gray-800 rounded-full hover:bg-blue-400 cursor-pointer">
                            <FaTwitter />
                        </span>
                        <span className="p-2 bg-gray-800 rounded-full hover:bg-pink-600 cursor-pointer">
                            <FaInstagram />
                        </span>
                        <span className="p-2 bg-gray-800 rounded-full hover:bg-blue-700 cursor-pointer">
                            <FaLinkedinIn />
                        </span>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 text-center py-4 text-sm">
                © {new Date().getFullYear()} Productify. All rights reserved.
            </div>
        </footer>
    );
}
