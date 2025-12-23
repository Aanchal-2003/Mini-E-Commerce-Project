import React from "react";

export default function Contact() {
    return (
        <div className="max-w-5xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-center mb-6">
                Contact Us
            </h1>

            <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto mb-12">
                Have questions about our products or need help with your order?
                We’re here to help and would love to hear from you.
            </p>

            <div className="grid md:grid-cols-2 gap-10">
                {/* Contact Info */}
                <div className="bg-white p-6 rounded-2xl shadow space-y-4">
                    <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>

                    <p className="text-gray-600">
                        📧 <span className="font-medium">Email:</span> support@yourstore.com
                    </p>

                    <p className="text-gray-600">
                        📞 <span className="font-medium">Phone:</span> +91 98765 43210
                    </p>

                    <p className="text-gray-600">
                        🕒 <span className="font-medium">Support Hours:</span>
                        Monday – Saturday, 9:00 AM – 6:00 PM
                    </p>

                    <p className="text-gray-600">
                        📍 <span className="font-medium">Location:</span>
                        Available across India
                    </p>
                </div>

                {/* Contact Form */}
                <div className="bg-white p-6 rounded-2xl shadow">
                    <h2 className="text-2xl font-semibold mb-4">
                        Send Us a Message
                    </h2>

                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <textarea
                            placeholder="Your Message"
                            rows="4"
                            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
