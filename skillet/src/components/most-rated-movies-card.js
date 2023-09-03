import React, { useState, useEffect } from "react";
import Carousel from "react-grid-carousel";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "../assets/styles/arrow.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
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
        {movies?.map((movie, index) => {
          return (
            <Carousel.Item key={index}>
              {movie.poster_path ? (
                <Link key={index} to={`/description/${movie.id}`}>
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
                    class="progress d-flex"
                    style={{
                      width: "40%",
                      height: "5px",
                      marginRight: "10px",
                      backgroundColor: "black",
                    }}
                  >
                    <div
                      class="progress-bar bg-success"
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
          );
        })}
      </Carousel>
    </>
  );
}

export default MostRatedMovies;
