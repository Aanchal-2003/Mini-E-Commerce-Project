import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="text-center max-w-md">

                {/* Error Code */}
                <h1 className="text-7xl font-extrabold text-blue-600">404</h1>

                {/* Message */}
                <h2 className="mt-4 text-2xl font-semibold text-gray-800">
                    Page Not Found
                </h2>
                <p className="mt-2 text-gray-600">
                    Oops! The page you’re looking for doesn’t exist or has been moved.
                </p>

                {/* Action */}
                <Link
                    to="/"
                    className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
}
