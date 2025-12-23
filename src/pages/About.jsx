import React from "react";

export default function About() {
    return (
        <div className="max-w-5xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-center mb-6">
                About Our Products
            </h1>

            <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto mb-12">
                We offer a carefully curated range of products designed to meet everyday
                needs with quality, value, and reliability in mind.
            </p>

            <div className="space-y-10">
                {/* Quality */}
                <div className="bg-white p-6 rounded-2xl shadow">
                    <h2 className="text-2xl font-semibold mb-3">Quality You Can Trust</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Each product is selected based on quality standards, durability,
                        and customer satisfaction. We focus on providing items that are
                        practical, well-designed, and built to last.
                    </p>
                </div>

                {/* Variety */}
                <div className="bg-white p-6 rounded-2xl shadow">
                    <h2 className="text-2xl font-semibold mb-3">Wide Range of Choices</h2>
                    <p className="text-gray-600 leading-relaxed">
                        From daily essentials to specialty items, our collection is
                        continuously updated to offer variety and freshness, ensuring you
                        always find products that suit your needs.
                    </p>
                </div>

                {/* Pricing */}
                <div className="bg-white p-6 rounded-2xl shadow">
                    <h2 className="text-2xl font-semibold mb-3">Fair & Transparent Pricing</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Our pricing is clear and competitive. What you see is what you pay —
                        no hidden costs, just honest value for every purchase.
                    </p>
                </div>

                {/* Customer Focus */}
                <div className="bg-white p-6 rounded-2xl shadow">
                    <h2 className="text-2xl font-semibold mb-3">Designed for Everyday Use</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Products are chosen with real-world usage in mind, focusing on
                        convenience, comfort, and usability to make everyday life easier.
                    </p>
                </div>
            </div>
        </div>
    );
}
