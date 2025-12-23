import React from "react";

export default function ProductCardSkeleton() {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">

            {/* Thumbnail Skeleton */}
            <div className="w-full h-48 bg-gray-300"></div>

            {/* Content Skeleton */}
            <div className="p-4 space-y-3">

                {/* Title */}
                <div className="h-5 bg-gray-300 rounded w-3/4"></div>

                {/* Price */}
                <div className="h-6 bg-gray-300 rounded w-1/3"></div>

                {/* Button */}
                <div className="h-10 bg-gray-300 rounded-lg w-full mt-4"></div>
            </div>
        </div>
    );
}
