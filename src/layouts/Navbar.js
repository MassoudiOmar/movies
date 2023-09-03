import React from "react";
import "../assets/styles/title-text.css";
import SearchComponent from "../components/searchBar";

function Navbar() {


  return (
    <div
      className="navbar-container"
    >
      <div className="navbar-content" style={{ flex: 1 }}>
        <h2 className="title-text-navbar">MOVIENIGHT</h2>
      </div>
      <div className="navbar-content" style={{ flex: 1 }}>
          <div className='search-bar-navbar'>
            <SearchComponent />
          </div>
      </div>
    </div>
  );
}

export default Navbar;
