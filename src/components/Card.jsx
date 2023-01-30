import React from "react";

const Card = () => {
  return (
    <div className="bg-white shadow rounded overflow-hidden grup">
      <figure className="relative">
        <img
          className="w-full max-h-36"
          src="http://dummyimage.com/200x200.png/ff4444/ffffff" alt=""
        />
      </figure>
      <div className="pt-4 pb-3 px-3">
        <a href="#">
          <h4 className="font-bold text-lg md:text-xl mb-2 text-gray-800">
            Guyer - Bro Tidur
          </h4>
          <p className="font-normal text-sm lg:text-base text-gray-600 ">
            Lorem ipsum dolor sit amet consectetur adipisicing. . .
          </p>
        </a>
        <div className="flex items-baseline mt-4 mb-1 space-x-2">
          <p className="text-lg font-bold text-salmon ">Rp 28.000</p>
        </div>
      </div>
      <a
        href="#"
        className="block w-full py-2 text-center text-base font-normal text-white bg-salmon border border-salmon rounded-b hover:bg-transparent hover:text-salmon transition "
      >
        Buy Now
      </a>
    </div>
  );
};

export default Card;
