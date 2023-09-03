import React from "react";

import SearchCard from "../components/search-card";
import "../assets/styles/title-card.css";
import "../assets/styles/search-page.css";
import { Spinner } from "react-bootstrap";
function Search() {
  return (
    <div className="search-page">
      <div>
        <SearchCard />
      </div>
        <Spinner/>
    </div>
  );
}

export default Search;
