import React, { useEffect, useState } from "react";
import "../assets/styles/title-text.css";
import SearchComponent from "../components/searchBar";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useNavigate } from "react-router-dom";
import { BsSearch } from 'react-icons/bs';
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Navbar() {


  return (
    <div
      className="navbar-container"
    >
      <div className="navbar-content" style={{ flex: 1 }}>
        {/* Carousel Title */}
        <h2 className="title-text-navbar">MOVIENIGHT</h2>
      </div>
      <div className="navbar-content" style={{ flex: 1 }}>
        {/* Conditional rendering based on screen width */}
          <div className='search-bar-navbar'>
            <SearchComponent />
          </div>
      </div>
    </div>
  );
}

export default Navbar;
