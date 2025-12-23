import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { storeContext } from "../Context";

// const product = {
//     id: 1,
//     title: "Essence Mascara Lash Princess",
//     description:
//         "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
//     category: "beauty",
//     price: 9.99,
//     discountPercentage: 10.48,
//     rating: 2.56,
//     stock: 99,
//     brand: "Essence",
//     availabilityStatus: "In Stock",
//     shippingInformation: "Ships in 3-5 business days",
//     warrantyInformation: "1 week warranty",
//     returnPolicy: "No return policy",
//     thumbnail:
//         "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
//     reviews: [
//         {
//             rating: 3,
//             comment: "Would not recommend!",
//             reviewerName: "Eleanor Collins",
//         },
//         {
//             rating: 4,
//             comment: "Very satisfied!",
//             reviewerName: "Lucas Gordon",
//         },
//         {
//             rating: 5,
//             comment: "Highly impressed!",
//             reviewerName: "Eleanor Collins",
//         },
//     ],
// };

export default function Details() {
    const [product, setProduct] = useState({})
    const { id } = useParams()
    const { addtoCart } = useContext(storeContext)

    useEffect(
        () => {
            axios.get(`https://dummyjson.com/products/${id}`).then(
                (response) => {
                    setProduct(response.data)

                }
            ).catch(
                (error) => {
                    setProduct({})
                }
            )
        },
        [id]
    )

    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* Image */}
                <div className="bg-white p-6 rounded-xl shadow">
                    <img
                        src={product?.thumbnail}
                        alt={product.title}
                        className="w-full h-96 object-contain"
                    />
                </div>

                {/* Details */}
                <div>
                    <p className="text-sm uppercase text-blue-600 font-semibold">
                        {product.category}
                    </p>

                    <h1 className="text-3xl font-bold text-gray-800 mt-2">
                        {product.title}
                    </h1>

                    <p className="text-gray-600 mt-4">
                        {product.description}
                    </p>

                    {/* Price */}
                    <div className="mt-6 flex items-center gap-4">
                        <span className="text-3xl font-bold text-blue-600">
                            ${product.price}
                        </span>
                        <span className="text-sm text-green-600 font-semibold">
                            {product.discountPercentage}% OFF
                        </span>
                    </div>

                    {/* Meta */}
                    <div className="mt-4 space-y-2 text-sm text-gray-700">
                        <p><strong>Brand:</strong> {product.brand}</p>
                        <p><strong>Rating:</strong> ⭐ {product.rating}</p>
                        <p><strong>Stock:</strong> {product.stock}</p>
                        <p><strong>Status:</strong> {product.availabilityStatus}</p>
                        <p><strong>Shipping:</strong> {product.shippingInformation}</p>
                        <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
                        <p><strong>Return:</strong> {product.returnPolicy}</p>
                    </div>

                    {/* Button */}
                    <button onClick={() => addtoCart(product.id)} className="mt-6 cursor-pointer bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Reviews */}
            <div className="mt-14">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Customer Reviews
                </h2>

                <div className="space-y-4">
                    {product?.reviews?.map((review, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 rounded-lg shadow"
                        >
                            <p className="font-semibold text-gray-800">
                                {review.reviewerName}
                            </p>
                            <p className="text-sm text-yellow-500">
                                ⭐ {review.rating}
                            </p>
                            <p className="text-gray-600 mt-1">
                                {review.comment}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
