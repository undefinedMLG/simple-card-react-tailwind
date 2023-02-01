import React from "react";

const Hero = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-5xl">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">
          Hallo, Selamat datang di zona Undefined
          <span className="text-red-600 dark:text-violet-400 mx-4">
            Be Happy Today!
          </span>
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg text-gray-800 dark:text-gray-300">
          kami sebenarnya ngga pengen buat page ini tapi buat tes react router
          domnya jalan atau engga makanya ada page home, terima kasih
        </p>
        <div className="flex flex-wrap justify-center">
          <a href="#feature">
            <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-black hover:bg-neutral-700 text-gray-200 dark:bg-violet-400 dark:text-gray-900 dark:hover:bg-violet-500 transition">
              Get started
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
