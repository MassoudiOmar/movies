import React, { useState, useEffect } from "react";
import Carousel from "react-grid-carousel";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "../assets/styles/arrow.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { fetchUpCommingMovies } from "../store/main-page";
import { useDispatch, useSelector } from "react-redux";

function CommingThisWeekMovies() {
  const [imageLoading, setImageLoading] = useState(true);
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.MainPage.upcomming.items.results);
  useEffect(() => {
    dispatch(fetchUpCommingMovies());
  }, []);

  return (
    <>
      <p className="comming-this-week-title">A l'affiche cette semaine</p>

      <Carousel
        className="centered-card-container"
        cols={6}
        rows={1}
        gap={5}
        loop
      >
        {movies?.map((movie, index) => {
          return (
            <Carousel.Item key={index}>
              {movie.poster_path ? (
                <Link key={index} to={`/description/${movie.id}`}>
                  <img
                    className="img-comming-this-week-card"
                    src={`https://image.tmdb.org/t/p/w185/${movie?.poster_path}`}
                    alt={movie.title}
                  />
                </Link>
              ) : (
                <Skeleton
                  height="10rem"
                  width="8rem"
                  className={`skeleton wave-animation ${
                    imageLoading ? "hidden" : ""
                  }`}
                />
              )}
              <div>
                {movie.title ? (
                  <h3 className="movie-title">{movie.title}</h3>
                ) : (
                  <Skeleton width={120} height={15} borderRadius={50} />
                )}
                <text className="movie-time">{`1h48`}</text>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}

export default CommingThisWeekMovies;
