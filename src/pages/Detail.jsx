import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail() {
  const [datas, setDatas] = useState([]);
  const [detail, setDetail] = useState([]);
  const { id_barang } = useParams();

  const fetchGetAll = () => {
    fetch(
      "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1f2898db-ceb4-4565-a1eb-2d3beb8a509c/product.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230130T011141Z&X-Amz-Expires=86400&X-Amz-Signature=5c54ac81b5f292402aa89658001d2818017a1b8974a66bd10b55b61ae955598a&X-Amz-SignedHeaders=host&x-id=GetObject"
    )
      .then((res) => res.json())
      .then((json) => setDatas(json));
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
              to={"/home"}
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
