import React, { useEffect, useState } from "react";
import { Home } from "../../hooks/fetchData";

export default function Spotlight() {
  const [data, setData] = useState([]);
  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const responseData = await Home();
      setData(responseData);
      // Generate a random index when the data changes
      if (responseData.spotlightAnimes) {
        const randomIndex = Math.floor(
          Math.random() * responseData.spotlightAnimes.length
        );
        setRandomIndex(randomIndex);
      }
    };

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <img
      src={data.spotlightAnimes && data.spotlightAnimes[randomIndex].poster}
      alt="Get Started"
      className="get-started-image"
      style={{
        width: "100%",
        height: "75vh",
        objectPosition: "top",
      }}
    />
  );
}
