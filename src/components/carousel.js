import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../assets/styles/vertical-carousel.css";
import AddButton from "./buttons/regarde-btn";
import InformationButton from "./buttons/InformationButton";

const VerticalCarousel = (props) => {
  const [selectedItem, setSelectedItem] = useState(0);

  const imageLinks = [
    "https://bootleggerbars.com/wp-content/uploads/2022/11/cardiff-dj-hywel.jpg",
    "https://broadwaypodcastnetwork.com/wp-content/uploads/Smashed-Header.jpg",
    "https://images.ctfassets.net/m3qyzuwrf176/1h0Dwnl8AcJA8YErTRc5bT/c70972b95d4eac0403f0084ce603069c/Oct30_CORALINE_Matinees1-banner.jpg?w=2000",
  ];

  const titles = ["Title 1", "Title 2", "Title 3"];

  useEffect(() => {
    setSelectedItem(props.data);
  }, [props.data]);

  return (
    <div className="vertical-carousel-container">
      <div className="vertical-carousel-center">
        <Carousel
          showThumbs={true}
          showStatus={false}
          infiniteLoop={true}
          axis="vertical"
          renderThumbs={() => null}
          selectedItem={selectedItem}
          showArrows={false}
        >
          {imageLinks.map((link, index) => (
            <div key={index}>
              <img
                src={link}
                className="carousel-image-slider"
                alt={`Image ${index + 1}`}
              />
              <div className="image-text">
                <p className="carousel-title">{titles[index]} (2020)</p>
                <div className="image-buttons">
                  <AddButton />
                  <InformationButton />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default VerticalCarousel;
