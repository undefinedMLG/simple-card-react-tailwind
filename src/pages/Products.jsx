import React from "react";
import Card from "../components/Card";
import NavFo from "../layouts/NavFo";

const Products = () => {
  return (
    <>
      <NavFo>
        <div className="container w-11/12 lg:w-9/12 my-0 mx-auto pb-16">
          <div className="search-content flex justify-between">
            <div className="result-count text-left mb-4">
              <p className="text-lg md:text-xl font-semibold dark:text-gray-300">
                6 Products found
              </p>
            </div>
            <div className="dropdown">
              <form>
                <select className="w-36 text-base font-normal px-2 py-1 rounded-sm dark:bg-gray-900 dark:text-gray-200 border-none">
                  <option value="">All</option>
                  <option value="">Pre-order</option>
                  <option value="">Ready</option>
                  <option value="">Barang Bekas</option>
                </select>
              </form>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
            <Card
              img={"https://source.unsplash.com/random/480x360/?4"}
              category="Pre-Order"
              name="Chocolate - apayah"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, temporibus!"
              price={82000}
              id={10000}
            />
          </div>
        </div>
      </NavFo>
    </>
  );
};

export default Products;
