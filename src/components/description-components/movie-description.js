import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import AddButton from "../buttons/regarde-btn";
import StarButton from "../buttons/statButton";
import { useParams } from "react-router-dom";
import { fetchMovie } from "../../store/description";
import { useDispatch, useSelector } from "react-redux";

import "../../assets/styles/movie-description-file.css";

function MovieDescription(props) {
  const [imageLoading, setImageLoading] = useState(true);

  const { id } = useParams();
  const dispatch = useDispatch();

  const movie = useSelector((state) => state.description.movies.items);
  console.log(movie, "p");

  useEffect(() => {
    dispatch(fetchMovie(id));
  }, [id]);

  function convertMinutesToHoursAndMinutes(minutes) {
    if (typeof minutes !== "number" || minutes < 0) {
      throw new Error("Input must be a non-negative number.");
    }

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    const formattedTime = `${hours}h ${remainingMinutes}m`;
    return formattedTime;
  }

  function convertRatingToPercentage(rating) {
    // Parse the rating as a floating-point number
    const numericRating = parseFloat(rating);

    if (isNaN(numericRating) || numericRating < 0 || numericRating > 10) {
      throw new Error("Invalid rating. It should be between 0 and 10.");
    }

    const percentage = (numericRating / 10) * 100;

    return percentage.toFixed(1) + "%";
  }
  function extractYearFromDate(dateString) {
    const date = new Date(dateString);
    if (!isNaN(date)) {
      return date.getFullYear();
    } else {
      // Handle invalid date strings
      return null;
    }
  }
  const isMovieDataAvailable = !!movie;

  return (
    <>
      <div className="first-part-description">
        <div
          className="container-sm::before"
          style={{
            content: `url("https://image.tmdb.org/t/p/w185/${movie?.poster_path}")`,
            filter: "blur(70px)",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "55%",
            zIndex: -1,
          }}
        ></div>
        <div className="texts" style={{ flex: 1 }}>
          <h2 className="title-description">
            {isMovieDataAvailable ? (
              movie.title
            ) : (
              <Skeleton width={200} height={30} />
            )}
          </h2>
          <div>
            <p
              className="text-white genre-description"
              style={{ margin: "0px" }}
            >
              {isMovieDataAvailable ? (
                movie.genres?.map((e, i) => e?.name + ", ")
              ) : (
                <Skeleton width={200} height={20} />
              )}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                marginBottom: "1.5rem",
              }}
            >
              <div style={{ marginRight: "10px", color: "white" }}>
                {isMovieDataAvailable && movie.runtime ? (
                  convertMinutesToHoursAndMinutes(movie.runtime)
                ) : (
                  <Skeleton width={100} height={20} />
                )}
              </div>
              <div style={{ width: "30%" }}>
                <div
                  className="progress d-flex"
                  style={{
                    width: "80%",
                    height: "9px",
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
              </div>
              <div style={{ color: "grey" }}>
                {isMovieDataAvailable && movie.vote_average ? (
                  convertRatingToPercentage(movie.vote_average)
                ) : (
                  <Skeleton width={60} height={20} />
                )}
              </div>
            </div>
          </div>

          <div className="btn-description">
            <div style={{ marginRight: "10px" }}>
              <AddButton />{" "}
            </div>
            <div>
              <StarButton />
            </div>
          </div>
          <p className="movie-synopsis" style={{ marginBottom: "2rem" }}>
            <p style={{ fontSize: "20px", fontWeight: 500, margin: "0px" }}>
              synopsis
            </p>
            {isMovieDataAvailable ? movie.overview : <Skeleton count={5} />}
          </p>
          <div style={{ display: "flex" }} className="person-div2">
            <div className="person-div">
              <p className="person-description">Screenplay, Story</p>
              <p className="text-white">Josh Miller</p>
            </div>
            <div>
              <p className="person-description">Director</p>
              <p className="text-white">Jeff Fowler</p>{" "}
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div className="person-div">
              <p className="person-description">Screenplay, Story</p>
              <p className="text-white">Patrick Casey</p>{" "}
            </div>
            <div>
              <p className="person-description">Screenplay</p>
              <p className="text-white">Jhon Wittington</p>{" "}
            </div>
          </div>
        </div>

        <div className="image" style={{ flex: 1 }}>
          {isMovieDataAvailable ? (
            <img
              src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
              className="image-description"
            />
          ) : (
            <Skeleton width="20rem" height="30rem" />
          )}
        </div>
      </div>
      <p
        className="text-white movie-synopsis2"
        style={{ marginBottom: "2rem" }}
      >
        <p style={{ fontSize: "20px", fontWeight: 500, margin: "0px" }}>
          synopsis
        </p>
        {isMovieDataAvailable ? movie.synopsis : <Skeleton count={5} />}
      </p>
    </>
  );
}

export default MovieDescription;
