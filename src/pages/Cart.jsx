import React, { useContext } from "react";
import { storeContext } from "../Context";

export default function Cart() {
    const { cart, removeHandler, qtyHandler, totalAmounts, totalItems } = useContext(storeContext)
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">My Cart</h1>

            {
                cart.map((item) => {
                    return (
                        <div key={item.id} className="space-y-4">

                            <div
                                key={item}
                                className="md:flex  items-center justify-between bg-white p-4 rounded-2xl  shadow"
                            >
                                {/* Image */}
                                <img
                                    src={item.thumbnail}
                                    alt="product"
                                    className="w-24 h-24 object-cover rounded-xl"
                                />

                                {/* Title & Price */}
                                <div className="flex-1  ml-4">
                                    <h2 className="text-lg font-semibold">
                                        {item.title}
                                    </h2>
                                    <p className="text-gray-500 my-3 md:my-0">${item.price * item.qty}</p>
                                </div>

                                {/* Quantity */}
                                <div className="flex items-center gap-3">
                                    <button disabled={item.qty === 1} onClick={() => qtyHandler(item.id, "dec")} className="w-8 disabled:opacity-50 cursor-pointer h-8 flex items-center justify-center bg-gray-200 rounded-lg">
                                        −
                                    </button>
                                    <span className="font-semibold">{item.qty}</span>
                                    <button onClick={() => qtyHandler(item.id, "inc")} className="w-8 h-8 flex items-center justify-center cursor-pointer bg-gray-200 rounded-lg">
                                        +
                                    </button>
                                </div>

                                {/* Remove */}
                                <button onClick={() => removeHandler(item.id)} className="ml-6 cursor-pointer mt-3 md:mt-0 text-red-500 hover:text-red-600 font-medium">
                                    Remove
                                </button>
                            </div>

                        </div>
                    )
                })
            }




            {/* Summary */}
            <div className="mt-8 bg-white p-6 rounded-2xl shadow">
                <div className="flex justify-between text-lg font-semibold">
                    <span>Total ({totalItems} items)</span>
                    <span>${totalAmounts.toFixed(2)}</span>
                </div>

                <button className="mt-6 cursor-pointer w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800">
                    Checkout
                </button>
            </div>
        </div>
    );
}
