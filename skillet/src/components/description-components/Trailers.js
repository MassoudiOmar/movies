import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { ImPlay3 } from "react-icons/im"; // Import the play button icon

import "../../assets/styles/trailer.css"; // Import your CSS file with the play-button class

function Trailers() {
  const [imageLoading, setImageLoading] = useState(true);

  const trailers = [
    {
      title: "Movie 1",
      time: "1h48",
      imageURL:
        "https://cdn.mos.cms.futurecdn.net/AU8zH3dud8RdpXHMDXzthA-1200-80.jpg",
    },
    {
      title: "Movie 1",
      time: "1h48",
      imageURL:
        "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/03/29/16485709639515.jpg",
    },
    {
      title: "Movie 1",
      time: "1h48",
      imageURL:
        "https://images.squarespace-cdn.com/content/v1/59973af5f14aa1ab06cba333/1652757700044-I82J51K32GZZ6VH6QCQV/sonic-2-movie-poster.jpeg?format=1000w",
    },
  ];

  return (
    <Row className="trailer-videos">
<p className="text-white display-6">Bandes annonces</p>

      {trailers.map((movie, movieIndex) => (
        <Col key={movieIndex} md={4} className="mb-5">
          <div style={{ position: "relative" }}>
            <Card.Img
              variant="top"
              src={movie.imageURL}
              onLoad={() => setImageLoading(false)}
              onError={() => setImageLoading(false)}
              style={{
                display: imageLoading ? "none" : "block",
                borderRadius: "3px",
                height: "9rem",
              }}
            />
            {imageLoading && (
              <Skeleton height={200} width={100} style={{ display: "block" }} />
            )}
            <div className="play-button-circle">
              <ImPlay3
                className="play-button"
                style={{ fontSize: "2.5rem", color: "white", marginLeft: "7px" }}
              />
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Trailers;
