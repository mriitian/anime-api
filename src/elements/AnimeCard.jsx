import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AnimeCard({ anime }) {
  return (
    <div
      className="item"
      key={anime.id}
      style={{ backgroundImage: `url(${anime.poster})` }}
    >
      <div className="item-info">
        <div className="anime-name">
          <b>{anime.name}</b>
        </div>
        <div className="anime-rank">
          {" "}
          <b>Rank: {anime.rank}</b>
        </div>
        <div className="show-more">
          <Link to={`/id/${anime.id}`}>
            <Button variant="outline-success" size="sm">
              Show More...
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
