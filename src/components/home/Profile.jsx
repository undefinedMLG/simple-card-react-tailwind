import React from 'react';
// import adi from "../../assets/images/adi";
// import ry from "../../assets/images/ry";
// import ki from "../../assets/images/ki";
// import m from "../../assets/images/m";

const Profile = () => {
  return (
    <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
      <div className="container p-4 mx-auto text-center">
        <h2 className="text-4xl font-bold">Profile Undefined</h2>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
        
      <div className="max-w-lg p-5 rounded-md bg-white shadow-lg dark:bg-gray-900 dark:text-gray-100">
      <div className="space-y-4 w-full">
        <div className="space-y-2">
          <img
            src={require("../../assets/images/adi.jpg")}
            alt=""
            className="block object-cover object-center w-full max-h-50 rounded-md h-72 dark:bg-gray-500"
          />
          <div className="text-xl font-semibold dark:text-violet-400">
            <span>Prayoga Adi Setyawan</span>
          </div>
        </div>
        <div className="text-xs font-semibold dark:text-violet-400">
            <span>Jalan Danau Maninjau 3 / G2F / 11</span>
          </div>
      </div>
    </div>

    <div className="max-w-lg p-5 rounded-md bg-white shadow-lg dark:bg-gray-900 dark:text-gray-100">
      <div className="space-y-4 w-full">
        <div className="space-y-2">
          <img
                        src={require("../../assets/images/ki.jpg")}
            alt=""
            className="block object-cover object-center w-full max-h-50 rounded-md h-72 dark:bg-gray-500"
          />
                    <div className="text-xl font-semibold dark:text-violet-400">
            <span>Zaskia Rizky Raichand</span>
          </div>
        </div>
        <div className="text-xs font-semibold dark:text-violet-400">
            <span>Jalan Danau Ranau 7 / GIF / 03 Malang</span>
          </div>
        
      </div>
    </div>

    <div className="max-w-lg p-5 rounded-md bg-white shadow-lg dark:bg-gray-900 dark:text-gray-100">
      <div className="space-y-4 w-full">
        <div className="space-y-2">
          <img
                        src={require("../../assets/images/ry.jpg")}
            alt=""
            className="block object-cover object-center w-full max-h-50 rounded-md h-72 dark:bg-gray-500"
          />
                    <div className="text-xl font-semibold dark:text-violet-400">
            <span>Reyhan Marsalino Diansa</span>
          </div>
        </div>
        <div className="text-xs font-semibold dark:text-violet-400">
            <span>Ngantru Ngantang Malang</span>
          </div>
      </div>
    </div>

    <div className="max-w-lg p-5 rounded-md bg-white shadow-lg dark:bg-gray-900 dark:text-gray-100">
      <div className="space-y-4 w-full">
        <div className="space-y-2">
          <img
                        src={require("../../assets/images/m.jpg")}
            alt=""
            className="block object-cover object-center w-full max-h-50 rounded-md h-72 dark:bg-gray-500"
          />
                    <div className="text-xl font-semibold dark:text-violet-400">
            <span>Zhidan Marties Alfareza</span>
          </div>
        </div>
        <div className="text-xs font-semibold dark:text-violet-400">
            <span>Pojok Tulungagung Jatim</span>
          </div>
      </div>
    </div>

    </div>
    </section>
  );
};

export default Profile;
