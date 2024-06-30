import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faAnglesLeft } from "@fortawesome/free-solid-svg-icons";

function getRandomIntInclusive(min, max) {
    min = Math.floor(min);  
    return Math.floor(Math.random() * (Math.floor(max) - min + 1)) + min;
}

// LiveWallperSection Component:
import { allVideos } from "../resources/videos.js";
import { useEffect, useState } from "react";

export const LiveWallperSection = (props) => {
    const [currentIndex, setCurentIndex] = useState(0);

    useEffect(() => {
        const result = getRandomIntInclusive(0, allVideos.length - 1);
        setCurentIndex(result);
    }, []);

    function onRightWallperHandler() {

		props.showDemoPreviewHandler(false); // change it immediately
        if (currentIndex + 1 >= allVideos.length) {
			
			setCurentIndex(0);
			setTimeout(() => {
				props.showDemoPreviewHandler(true);
			}, 900);
			
		} else {
			setCurentIndex(currentIndex + 1);
			setTimeout(() => {
				props.showDemoPreviewHandler(true);
			}, 900)
		} 
    }

    function onLeftWallperHandler() {

		props.showDemoPreviewHandler(false); // change it immediately
        if (currentIndex - 1 < 0) {
			
			setCurentIndex(allVideos.length - 1);
			setTimeout(() => {
				props.showDemoPreviewHandler(true);
			}, 800);

		} else {
			setCurentIndex(currentIndex - 1);
			setTimeout(() => {
				props.showDemoPreviewHandler(true);
			}, 800);
		}
    }

    return (
        <section className="first section">
        <video
          className="background-clip"
          src={allVideos[currentIndex]}
          autoPlay
          loop
          muted
		  preload="metadata"
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
    );
}