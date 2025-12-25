import React from "react";

const loading = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-4  gap-4">
      {[...Array(8)].map((_, ind) => (
        <div key={ind}>
          <div className="w-full  bg-white rounded-3xl border border-gray-100 overflow-hidden flex flex-col shadow-sm">
            {/* --- Image Skeleton --- */}
            <div className="relative h-[280px] w-full bg-gray-200 animate-pulse">
              {/* Simulate the badge position */}
              <div className="absolute top-4 left-4 h-8 w-14 bg-gray-300 rounded-xl" />
            </div>

            {/* --- Content Skeleton --- */}
            <div className="flex flex-col flex-grow p-5 space-y-4">
              {/* Rating & Sold Row */}
              <div className="flex items-center justify-between">
                {/* Rating pill */}
                <div className="h-5 w-24 bg-gray-100 rounded-lg animate-pulse" />
                {/* Sold count */}
                <div className="h-5 w-16 bg-gray-100 rounded-lg animate-pulse" />
              </div>

              {/* Titles */}
              <div className="space-y-2">
                {/* English Title (2 lines simulation) */}
                <div className="h-6 w-full bg-gray-200 rounded-md animate-pulse" />
                <div className="h-6 w-2/3 bg-gray-200 rounded-md animate-pulse" />

                {/* Bangla Title (Smaller) */}
                <div className="h-4 w-1/2 bg-gray-100 rounded-md animate-pulse mt-1" />
              </div>

              {/* Price Section */}
              <div className="pt-2 flex items-center gap-3">
                {/* Main Price */}
                <div className="h-8 w-28 bg-gray-200 rounded-lg animate-pulse" />
                {/* Discount Pill */}
                <div className="h-8 w-16 bg-gray-100 rounded-lg animate-pulse" />
              </div>
            </div>

            {/* --- Footer / Button Skeleton --- */}
            <div className="p-5 pt-0 mt-auto">
              <div className="h-12 w-full bg-gray-200 rounded-xl animate-pulse" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default loading;
