import React from "react";

const Card2 = () => {
  return (
    <div className="max-w-lg p-5 rounded-md bg-white shadow-lg dark:bg-gray-900 dark:text-gray-100">
      <div className="space-y-4 w-full">
        <div className="space-y-2">
          <img
            src="https://source.unsplash.com/random/480x360/?4"
            alt=""
            className="block object-cover object-center w-full max-h-36 rounded-md h-72 dark:bg-gray-500"
          />
          <div className="flex items-center text-xs">
            <span>Pre-Order</span>
          </div>
        </div>
        <div className="space-y-2">
          <a rel="noopener noreferrer" href="#" className="block">
            <h3 className="text-xl font-semibold dark:text-violet-400">
              Facere - ipsa nulla
            </h3>
          </a>
          <p className="leading-snug dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur
          </p>
          <p className="leading-snug dark:text-gray-300 font-semibold text-base">
            Rp 86.000
          </p>
        </div>
        <div className="space-y-2 w-full">
          <a
            href=""
            className="inline-block text-base w-full py-2 text-center font-medium bg-black hover:bg-neutral-800 text-white rounded-sm dark:bg-violet-400 dark:hover:bg-violet-500 transition "
          >
            Detail
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card2;
