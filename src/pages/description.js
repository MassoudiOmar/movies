import React, { useEffect } from "react";
import Navbar from "../layouts/Navbar";
import Trailers from "../components/description-components/Trailers";
import Casting from "../components/description-components/Castiong";
import MovieDescription from "../components/description-components/movie-description"; // Fixed typo in the import
import "../assets/styles/title-card.css";
import "../assets/styles/search-page.css";

function Description() {
 

  return (
    <div className="description-page">
      <div className="movie-description">
        <MovieDescription/>
      </div>
      <div className="trailer-part">
        <Trailers />
      </div>
      <div className="casting">
        <Casting />
      </div>
    </div>
  );
}

export default Description;
