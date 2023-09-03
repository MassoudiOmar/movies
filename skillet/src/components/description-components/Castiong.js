import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/styles/arrow.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../../assets/styles/search-card.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsArrowRightShort } from "react-icons/bs";
import "../../assets/styles/casting.css";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../store/description";
import { useDispatch, useSelector } from "react-redux";

function Casting() {
  const [imageLoading, setImageLoading] = useState(true);

  const { id } = useParams();
  const dispatch = useDispatch();

  const cast = useSelector((state) => state.description.casts.items);
  const first11Objects = cast?.cast?.slice(0, 11);

  useEffect(() => {
    dispatch(fetchMovieCast(id));
  }, [id]);

  return (
    <Row className="casting-rows">
      <p className="text-white display-6">Casting</p>

      {first11Objects?.map((movie, movieIndex) => (
        <Col key={movieIndex} md={2} className="mb-5">
          {
movie?.profile_path?
            <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w185/${movie?.profile_path}`}
            onLoad={() => setImageLoading(false)}
            onError={() => setImageLoading(false)}
            style={{
              display: imageLoading ? "none" : "block",
              borderRadius: "3px",
              height: "9rem",
              width: "9rem",
            }}
            />:    <Skeleton
            height="9rem"
            width="9rem"
            className={`skeleton wave-animation ${imageLoading ? "hidden" : ""}`}
          />
          }
      
          <Card.Body>
            <Card.Title style={{ color: "white", fontSize: "20px" }}>
              {movie?.original_name}
            </Card.Title>
            <Card.Text style={{ color: "grey" }}>{movie.character}</Card.Text>
          </Card.Body>
        </Col>
      ))}

      {/* Move this Col outside of the map function */}
      <Col md={2} className="pt-5">
        <p style={{ color: "white", cursor: "pointer" }}>
          Voir tout <BsArrowRightShort color="white" fontSize={25} />
        </p>
      </Col>
    </Row>
  );
}

export default Casting;
