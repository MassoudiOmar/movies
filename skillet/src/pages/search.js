import React from "react";

import SearchCard from "../components/search-card";
import "../assets/styles/title-card.css";
import "../assets/styles/search-page.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { fetchMostRatedMovies } from "../store/main-page";
import { useDispatch, useSelector } from "react-redux";

function Search() {
  return (
    <div className="search-page">
      <div>
        <SearchCard />
      </div>
    </div>
  );
}

export default Search;
