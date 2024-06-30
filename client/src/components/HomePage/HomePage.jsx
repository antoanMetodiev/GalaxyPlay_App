import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import "../HomePage/HomePage.css";
import LastLogo from "./images/last-logo.jfif";

// TODO: Tova trqbwa da se iznese vuv funshen file:
// VIDEOS
import Video0 from "./videos/call of duty.mp4";
import Video1 from "./videos/god of war.mp4";
import Video2 from "./videos/Scorpion - Mortal Combat.mp4";
import Video3 from "./videos/spider man - falling.mp4";
import Video4 from "./videos/Ghost - Call of Duty.mp4";
import Video5 from "./videos/Ghost-of-Tsushima.mp4";
import Video6 from "./videos/Grand-Theft-Auto-VI.mp4";
import Video7 from "./videos/Acc creed Origins.mp4";
import Video8 from "./videos/Need-For-Speed.mp4";
import Video9 from "./videos/fortnite.mp4";
import Video10 from "./videos/pubg.mp4";
// -----------------------------------------------

// games for add: Gta 5, nqkakuv Hunter, Minecraft, CS-GO, Red Dead Redemption, Santinela LOL

let allVideos = [Video0, Video1, Video2, Video3, Video4, Video5, Video6, Video7, Video8, Video9, Video10,];

export const HomePage = () => {
  
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