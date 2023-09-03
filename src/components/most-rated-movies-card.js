import React, { useState, useEffect } from "react";
import Carousel from "react-grid-carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/arrow.css";
import { Link } from "react-router-dom";
import { fetchMostRatedMovies } from "../store/main-page";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function MostRatedMovies() {
  const dispatch = useDispatch();
  const [data, setData] = useState();

  const movies = useSelector((state) => state.MainPage.movies.items.results);
  useEffect(() => {
    dispatch(fetchMostRatedMovies());
  }, []);

  return (
    <>
      <p className="comming-this-week-title">Les films les mieux notés</p>

      <Carousel cols={6} rows={1} gap={10} loop>
        {movies?.length > 0
          ? movies.map((movie, index) => (
              <Carousel.Item key={index}>
                {movie.poster_path ? (
                  <Link to={`/description/${movie.id}`}>
                    <img
                      className="img-comming-this-week-card"
                      src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                      alt={movie.title}
                    />
                  </Link>
                ) : (
                  <Skeleton
                    height="10rem"
                    width="8rem"
                    className={`skeleton wave-animation`}
                  />
                )}
                <div>
                  <p className="movie-title">{movie?.original_title}</p>
                  <div
                    className="d-flex"
                    style={{
                      justifyContent: "start",
                      alignItems: "center",
                      color: "grey",
                      marginBottom: "5rem",
                    }}
                  >
                    <div
                      className="progress d-flex"
                      style={{
                        width: "40%",
                        height: "5px",
                        marginRight: "10px",
                        backgroundColor: "black",
                      }}
                    >
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "80%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    80%
                  </div>
                </div>
              </Carousel.Item>
            ))
          : Array(8)
              .fill()
              .map((_, index) => (
                <Carousel.Item key={index}>
                  <Skeleton
                    height="10rem"
                    width="8rem"
                    className={`skeleton wave-animation`}
                  />
                  <div>
                    <Skeleton width={120} height={15} borderRadius={50} />
                    <text className="movie-time" >{`1h48`}</text>
                  </div>
                </Carousel.Item>
              ))}
      </Carousel>
    </>
  );
}

export default MostRatedMovies;
