import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../assets/data/product.json";


function Detail() {
  const [datas, setDatas] = useState([]);
  const [detail, setDetail] = useState([]);
  const { id_barang } = useParams();

  const fetchGetAll = () => {
    setDatas(data)
  };

  useEffect(() => {
    fetchGetAll();
  }, []);
  
  console.log(datas);
  console.log(id_barang);

  const filterData = () => {
    const filteredData = datas.filter((e) => {
      return e.id.toLowerCase().includes(id_barang.toLowerCase());
    });
    setDetail(filteredData);
  };

  useEffect(() => {
    filterData();
  }, [id_barang, datas]);

  function ExpiryDate(expirate) {
    return (
      <>
        {expirate === null ? (
          <p>Expirate Date: tidak ada</p>
        ) : (
          <p>Expirate Date: {expirate}</p>
        )}
      </>
    );
  }

  console.log(detail);
  return (
    <div className="detail-wrap w-full flex justify-center">
      <div className="text-center mt-5 w-1/2">
        {detail.map((item, index) => (
          <>
            <p className="font-bold">{item.name}</p>
            <p>Price: {item.price}</p>
            <p>Description: {item.description}</p>
            <p>Category: {item.category}</p>
            {ExpiryDate(item.expiryDate)}
            <br />
            <Link
              to={"/"}
              rel="noopener noreferrer"
              className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900 hover:underline"
            >
              Back to homepage
            </Link>
          </>
        ))}
      </div>
    </div>
  );
}

export default Detail;
