import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//FETCH API GET ALL DATA
const GetAll = () => {
  const [datas, setDatas] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [filteredData, setFiltered] = useState([]);

  const fetchGetAll = () => {
    fetch(
      "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1f2898db-ceb4-4565-a1eb-2d3beb8a509c/product.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230127T095637Z&X-Amz-Expires=86400&X-Amz-Signature=6689ef6a08fd12c0463b60e27e583ce1907c423c4b51baa0d0a8435fe52e422a&X-Amz-SignedHeaders=host&x-id=GetObject"
    )
      .then((res) => res.json())
      .then((json) => setDatas(json));
  };

  useEffect(() => {
    fetchGetAll();
  }, []);

  useEffect(() => {
    filterData();
  }, [keyword, datas]);

  const handleSearch = (e) => {
    e.preventDefault();
    setFiltered(e.target.value);
  };

  const filterData = () => {
    const filteredData = datas.filter((e) => {
      return e.name.toLowerCase().includes(keyword.toLowerCase());
    });
    setFiltered(filteredData);
  };


  return (
    <React.Fragment>
      <div className="container xl:w-10/12 mx-auto my-8">
        <div class="flex justify-center">
          <div class="mb-3 xl:w-96">
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
            </div>
          </div>
        </div>
        {/* <form onSubmit={handleSearch}>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          placeholder="searching disini"
          />
        </form> */}
        <div className="card-wrap flex flex-wrap gap-5 justify-center">
          {filteredData
            ? (filteredData.map((item, index) => (
                <div key={index} className="bg-blue-300 xl:w-1/5 xs:w-2/5 h-56 p-4" >
                  <figure className="w-full">
                    <img src={item.image} className="h-40 w-full" />
                  </figure>
                  <div className="card-contents">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p>{item.description.slice(0, 50)}...</p>
                    <h4>{item.price}</h4>
                    <Link to={`/${item.id}`}>Detail</Link>
                  </div>
                  <br />
                  <br />
                </div>
              )))
            :(
                datas.map((item, index) => (
                    <div key={index}>
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      <Link to={`/${item.id}`}>Detail</Link>
                      <br />
                      <br />
                    </div>
                  ))
                ) 
            }
          </div>
      </div>
    </React.Fragment>
  );
};

export default GetAll;
