import React from "react";

const Banner = () => {
  return (
    <div className="p-6 py-12  bg-gray-200 dark:bg-violet-400 dark:text-gray-900 my-20">
      <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <h2 className="text-center text-6xl tracking-tighter font-bold">
            Up to
            <span> 50% Off </span>
          </h2>
          <div className="space-x-2 text-center py-2 lg:py-0">
            <span>Plus free shipping! Use code:</span>
            <span className="font-bold text-lg">UNDEFINED</span>
          </div>
          <a
            href="/"
            rel="noreferrer noopener"
            className="px-5 mt-4 lg:mt-0 text-gray-200 py-3 rounded-md border block dark:bg-gray-700 dark:text-gray-200 dark:border-gray-400"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
