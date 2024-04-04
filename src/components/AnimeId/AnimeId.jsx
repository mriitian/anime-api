import React, { useEffect, useState } from "react";
import { AnimebyId } from "../../hooks/fetchData";

export default function AnimeId() {
  const [data, setData] = useState({});
  const url = window.location.href;
  const id = url.substring(25);

  useEffect(() => {
    const fetchData = async () => {
      const responseData = await AnimebyId(id);
      setData(responseData);
      console.log(responseData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="id" style={{ color: "white" }}>
        <h1>{data.anime[0].name}</h1>
      </div>
    </div>
  );
}
