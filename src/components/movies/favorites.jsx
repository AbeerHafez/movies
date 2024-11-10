import React from "react";
import { useSelector } from "react-redux";
import CardMovie from "./card";

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites.favorites);

  return (
    <div className="container">
      <h2>Favorites</h2>
      <div className="row">
        {favorites.length === 0 ? (
          <p>No favorite movies added yet.</p>
        ) : (
          favorites.map((movie) => <CardMovie key={movie.id} {...movie} />)
        )}
      </div>
    </div>
  );
}