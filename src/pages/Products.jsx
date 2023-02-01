import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import NavFo from "../layouts/NavFo";

//FETCH API GET ALL DATA
const Products = () => {
  const [datas, setDatas] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [filteredData, setFiltered] = useState([]);
  const [keyFilter, setKeyFilter] = useState("");

  const fetchGetAll = () => {
    fetch(
      process.env.REACT_APP_API_KEY    )
      .then((res) => res.json())
      .then((json) => setDatas(json));
  };

  useEffect(() => {
    fetchGetAll();
  }, []);

  useEffect(() => {
    filterData();
  }, [datas, keyword]);

  useEffect(() => {
    selectFilter();
  }, [datas, keyFilter]);

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredData = datas.filter((e) => {
      return e.name.toLowerCase().includes(keyword.toLowerCase());
    });
    setFiltered(filteredData);
  };

  const filterData = () => {
    const filteredData = datas.filter((e) => {
      return e.name.toLowerCase().includes(keyword.toLowerCase());
    });
    setFiltered(filteredData);
  };

  const selectFilter = (e) => {
    if (filteredData.length > 0) {
      const filterData = filteredData.filter((e) => {
        return e.category.toLowerCase().includes(keyFilter.toLowerCase());
      });
      setFiltered(filterData);
      setKeyword("");
    } else if (filteredData.length === 0) {
      const filterData = datas.filter((e) => {
        return e.category.toLowerCase().includes(keyFilter.toLowerCase());
      });
      setFiltered(filterData);
      setKeyword("");
    }
    console.log(filteredData.length);
  };

  function getFiltered(filtered) {
    if (filtered === 0) {
      return "Barang tidak ada";
    } else {
      return filtered+" Products found";
    }
  }

  return (
    <NavFo>
      <div className="container w-11/12 lg:w-9/12 my-0 mx-auto pb-16">
        <div class="search-content flex justify-between">
          <div class="result-count text-left mb-4">
            <div class="input-group relative flex items-stretch w-full mb-4">
              <form onSubmit={handleSearch} className="w-full">
                <input
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="Search product"
                  class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                />
              </form>
              <form onChange={selectFilter} className="w-full">
                <select
                  value={keyFilter}
                  onChange={(e) => setKeyFilter(e.target.value)}
                >
                  <option value="">All</option>
                  <option value="Pre-Order">Pre-Order</option>
                  <option value="Ready">Ready</option>
                  <option value="Barang Bekas">Barang bekas</option>
                </select>
              </form>
            </div>
          </div>
        </div>
        <div className="result-count text-left mb-4">
              <p className="text-lg md:text-xl font-semibold dark:text-gray-300">
              {getFiltered(filteredData.length)} 
              </p>
            </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
          {filteredData
            ? filteredData.map((item, index) => (
                <div key={index}>
                  <Card
                    img={"https://source.unsplash.com/random/480x360/?4"}
                    category={item.category}
                    name={item.name}
                    desc={item.description}
                    price={item.price}
                    id={item.id}
                  />
                </div>
              ))
            : datas.map((item, index) => (
                <div key={index}>
                  <Card
                    category={item.category}
                    name={item.name}
                    desc={item.description}
                    price={item.price}
                    id={item.id}
                  />
                </div>
              ))}
        </div>
      </div>
    </NavFo>
  );
};

export default Products;
