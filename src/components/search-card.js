import React, { useState, useEffect } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/search-card.css";
import Skeleton from "react-loading-skeleton";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"; 
import {fetchTrendingMovies} from "../store/search"

function SearchCard() {
  const [imageLoading, setImageLoading] = useState(true);
  
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.search?.movies?.items?.results);




  useEffect(()=>{
    dispatch(fetchTrendingMovies())
    },[])
    



  const renderMovieCard = (movie, movieIndex) => (
    <Col key={movieIndex} md={2} className="mb-5">
      {movie?.poster_path ? (
        <Link key={movieIndex} to={`/description/${movie.id}`}>
          <div
            style={{
              borderRadius: "3px",
              height: "11rem",
              width: "8rem",
              backgroundImage: `url(https://image.tmdb.org/t/p/w185/${movie?.poster_path})`,
              backgroundSize: "cover",
            }}
            className={`movie-image`}
          />
        </Link>
      ) : (
        <Skeleton
          height="11rem"
          width="8rem"
          className={`skeleton wave-animation ${imageLoading ? "hidden" : ""}`}
        />
      )}

      <div className="movie-details">
        <div className="movie-title">{movie.title}</div>
        <div className="movie-time" style={{ color: "darkgray" }}>
          {movie.time}
        </div>
      </div>
    </Col>
  );

  return (
    <Row className="search-card-div">
      {movies?.length ? (
        <>
          <p className="text-white display-4" style={{ margin: "0px" }}>
            Sonic
          </p>
          <p className="text-white display-5">{movies?.length} results</p>
        </>
      ) : (
        <p className="text-white display-5">No results</p>
      )}
      {movies?.map((movie, movieIndex) => renderMovieCard(movie, movieIndex))}
    </Row>
  );
}

export default SearchCard;
