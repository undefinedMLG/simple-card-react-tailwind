import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      <div>
        { expirate === null ? (
          <p>tidak ada</p>
        ) : (
          <p>{expirate}</p>
        ) }
      </div>
    );
  }

  console.log(detail);
  return (
      <div>
       {detail.map((item, index) => (
        <> 
        <p>{item.name}</p>
        <p>{item.price}</p>
        <p>{item.description}</p>
        <p>{item.category}</p>
        <p>{ExpiryDate(item.expiryDate)}</p>
        </>
       ))}
    </div>
  );
}

export default Detail;
