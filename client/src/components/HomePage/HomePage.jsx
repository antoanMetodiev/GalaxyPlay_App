import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import "../HomePage/HomePage.css";

function getRandomIntInclusive(min, max) {
  min = Math.floor(min);  // because can be double number
  max = Math.max(max); 
  // TODO: This function is not working soo good, maybe
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// HomePage Component:
import LastLogo from "./resources/images/last-logo.jfif";
import { allVideos } from "./resources/videos";
import { useEffect, useState } from "react";

export const HomePage = () => {
  const [currentIndex, setCurentIndex] = useState(0);

  useEffect(() => {
    const result = getRandomIntInclusive(0, allVideos.length - 1);
    setCurentIndex(result);
  }, []);

  function onRightWallperHandler() {
    if (currentIndex + 1 >= allVideos.length) setCurentIndex(0);
    else setCurentIndex(currentIndex + 1);
  }

  function onLeftWallperHandler() {
    if (currentIndex - 1 < 0) setCurentIndex(allVideos.length - 1);
    else setCurentIndex(currentIndex - 1);
  }

  return (
    <>
      <header className="site-header">
        <div className="logo-data-wrapper">
          <img src={LastLogo} alt="GalaxyPlay-Logo" />
          <h1 className="site-title">GalaxyPlay</h1>
		  <span className="title-border"></span>
        </div>
        <nav className="header-nav">
          {/* TODO: Replace with Link components */}
          <ul>
            <a href="#">Sign In</a>
            <a href="#">Register</a>
          </ul>
          <ul>
            <a href="#">For Us</a>
            <a href="#">Contacts</a>
          </ul>
        </nav>
      </header>

      <section className="first section">
        <video
          className="background-clip"
          src={allVideos[currentIndex]}
          autoPlay
          loop
          muted
        ></video>
        <FontAwesomeIcon
          onClick={onRightWallperHandler}
          className="on-right-icon"
          icon={faAnglesRight}
        />
        <FontAwesomeIcon
          onClick={onLeftWallperHandler}
          className="on-left-icon"
          icon={faAnglesLeft}
        />
      </section>
    </>
  );
};
