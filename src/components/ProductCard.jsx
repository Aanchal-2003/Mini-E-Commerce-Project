import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { storeContext } from "../Context";

export default function ProductCard({
    title,
    thumbnail,
    price,
    onAddToCart,
    id
}) {

    const { addtoCart } = useContext(storeContext)
    return (

        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden ">
            <Link to={`/product/details/${id}`}>
                {/* Thumbnail */}
                <img
                    src={thumbnail}
                    alt={title}
                    className="w-full h-48 object-cover"
                />
            </Link>
            {/* Content */}
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                    {title}
                </h3>

                <p className="text-xl font-bold text-blue-600 mt-2">
                    ${price}
                </p>

                <button
                    onClick={() => addtoCart(id)}
                    className="mt-4 w-full bg-blue-600 cursor-pointer text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Add to Cart
                </button>
            </div>
        </div>


    );

}
