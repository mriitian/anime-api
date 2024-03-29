import React, { useEffect, useState } from "react";
import { Home } from "../../hooks/fetchData";

export default function Spotlight() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Home().then((responseData) => {
      setData(responseData);
    });
  }, []);

  return (
    <div>
      {data.spotlightAnimes && (
        <div>
          <h3>Spotlight Animes</h3>
          <ul>
            {data.spotlightAnimes.map((anime) => (
              <li key={anime.id}>{anime.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
