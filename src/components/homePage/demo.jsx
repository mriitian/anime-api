import React, { useEffect, useState } from "react";
import "./TrendingAnime.css"; // Import the CSS file
import { Home } from "../../hooks/fetchData";
import { Button } from "react-bootstrap";
import AnimeCard from "../../elements/AnimeCard";

function TrendingAnime() {
  const [data, setData] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(6); // itemsPerPage
  const [startPage, setStartPage] = useState(1); // startPage
  const [pageLinksToDisplay, setPageLinksToDisplay] = useState(4); // pageLinksToDisplay
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const fetchData = async () => {
      const responseData = await Home();
      setData(responseData);
      console.log(responseData);
    };

    fetchData();
  }, []);

  return (
    <div className="trendings" style={{ paddingTop: "5vw" }}>
      <div className="section-header">
        <h3
          className="section-title"
          style={{ color: "aquamarine", textAlign: "center" }}
        >
          Trending Anime
        </h3>
      </div>
      <div className="gallery">
        <div
          className="items"
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          {data.trendingAnimes &&
            data.trendingAnimes.map((anime) => <AnimeCard anime={anime} />)}
        </div>
      </div>
    </div>
  );
}

export default TrendingAnime;
