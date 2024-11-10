import React, { useState, useContext, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import { ModeContext } from "../../services/provider/context";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../services/store/slice/favorites";

export default function CardMovie(props) {
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const favorites = useSelector(state => state.favorites.favorites);
  // console.log(favorites);

 
  const [fav, setFav] = useState(
    favorites.some((favMovie) => favMovie.id === props.id)
  );

  useEffect(() => {
    setFav(favorites.some((favMovie) => favMovie.id === props.id));
  }, [favorites, props.id]);

  const toggleFav = () => {
    if (!fav) {
      dispatch(addFavorite(props));
    } else {
      dispatch(removeFavorite(props.id));
    }
  };

  const { mode } = useContext(ModeContext);

  return (
    <Col
      xs={3}
      className={`mb-3 ${mode === "dark" ? "border-dark" : "border-light"}`}
    >
      <Card
        style={{
          width: "23rem",
          backgroundColor: mode === "dark" ? "white" : "black",
          color: mode === "dark" ? "black" : "white",
        }}
      >
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500${props.poster_path}`}
          style={{ height: "20rem" }}
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>

          <button
            className="btn btn-info"
            onClick={() => {
              navigator(`/moviedetail/${props.id}`);
            }}
          >
            details
          </button>

          <span onClick={toggleFav} style={{ cursor: "pointer" }}>
            {fav ? "❤️" : "🤍"}
          </span>
        </Card.Body>
      </Card>
    </Col>
  );
}
