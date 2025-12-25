import React from "react";

const loading = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Visuals Skeleton */}
        <div className="lg:col-span-7 space-y-6">
          <div className="aspect-square rounded-[2.5rem] bg-gray-200" />
          <div className="grid grid-cols-2 gap-4">
            <div className="h-20 bg-gray-100 rounded-2xl" />
            <div className="h-20 bg-gray-100 rounded-2xl" />
            <div className="h-20 bg-gray-100 rounded-2xl" />
            <div className="h-20 bg-gray-100 rounded-2xl" />
          </div>
        </div>

        {/* Right: Info Skeleton */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <div className="h-4 w-32 bg-gray-100 rounded" />
            <div className="h-12 w-full bg-gray-200 rounded-xl" />
            <div className="h-8 w-1/2 bg-gray-100 rounded-lg" />
          </div>

          {/* Price Card Skeleton */}
          <div className="h-32 bg-gray-900 rounded-[2rem]" />

          {/* Description Paragraphs */}
          <div className="space-y-3">
            <div className="h-4 w-full bg-gray-100 rounded" />
            <div className="h-4 w-full bg-gray-100 rounded" />
            <div className="h-4 w-3/4 bg-gray-100 rounded" />
          </div>

          {/* Button Skeleton */}
          <div className="h-16 w-full bg-gray-200 rounded-2xl mt-8" />

          <div className="flex justify-between pt-6 border-t border-gray-100">
            <div className="h-4 w-24 bg-gray-100 rounded" />
            <div className="h-4 w-24 bg-gray-100 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;
