import React from "react";

const Feature = () => {
  return (
    <section id="feature" className="dark:bg-gray-800 dark:text-gray-100 my-20">
      <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">
            Kami merupakan segala kemampuan yang ada
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">
            Tim yang saling percaya dan dapat dipercaya adalah tim yang
            sebenarnya, jangan pernah buat kecewa tim mu dan percayalah bahwa
            kamu bisa diandalkan oleh tim mu
          </p>
        </div>
        <div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
                Keahlian dalan diri kami
              </h3>
              <p className="mt-3 text-lg dark:text-gray-400">
                Pembagian tim sangat berpengaruh untuk membuat sebuah hasil
                mahakarya yang sangat bagus.dengan itu di butuhkan team work
                yang sangat baik setiap individunya.
              </p>
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                      Ciboox.indonesia
                    </h4>
                    <p className="mt-2 dark:text-gray-400">
                      Kami merupakan semua bagian dari kemampuan yang nyata dan
                      menjadi satu tim yang OverPower untuk membuat mahakarya.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                      Apple technology at us
                    </h4>
                    <p className="mt-2 dark:text-gray-400">
                      Dia dapan menjadi perusahaan yang OverPower ,dan dalan
                      menjual segala product nya dengan harga yang ga masuk ke
                      thinking.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                      Warren buffet as investor
                    </h4>
                    <p className="mt-2 dark:text-gray-400">
                      Ia sebagai investo handal juga menjadi sangat OverPower di
                      bidan investing nya,karena ia sudah lebih dari 20 tahun
                      berpengalaman.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
              <img
                src="https://source.unsplash.com/random/361x481"
                alt=""
                className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
