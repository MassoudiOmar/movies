import React, { useState, useEffect } from "react";
import VerticalCarousel from "../components/carousel";
import CommingThisWeekMovies from "../components/comming-this-week-card";
import MostRatedMovies from "../components/most-rated-movies-card";
import '../assets/styles/main-page.css'

function MainPage() {
  const [selectedItem, setSelectedItem] = useState(0);
 

  const imageLinks = [
    "https://bootleggerbars.com/wp-content/uploads/2022/11/cardiff-dj-hywel.jpg",
    "https://broadwaypodcastnetwork.com/wp-content/uploads/Smashed-Header.jpg",
    "https://images.ctfassets.net/m3qyzuwrf176/1h0Dwnl8AcJA8YErTRc5bT/c70972b95d4eac0403f0084ce603069c/Oct30_CORALINE_Matinees1-banner.jpg?w=2000",
  ];
  const changeImage = () => {
    setSelectedItem((prevItem) => (prevItem + 1) % imageLinks.length);
  };

  useEffect(() => {
    const interval = setInterval(changeImage, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-page">
      <div
        className="container-sm::before"
        style={{
          content: `url("${imageLinks[selectedItem]}")`,
          filter: "blur(70px)",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "70%",
          zIndex: -1,
        }}
      ></div>
      {/* Carousel Section */}
      <div className="carousel" >
        <VerticalCarousel data={selectedItem} />
      </div>

     <div className="comming-This-Week">
        <CommingThisWeekMovies />
      </div>
      
      <div className="most-rated-movies">
        <MostRatedMovies />
      </div>
      
  
    </div>
  );
}

export default MainPage;
