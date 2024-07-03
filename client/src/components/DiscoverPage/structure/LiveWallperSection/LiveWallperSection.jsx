import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons"; 
import { useEffect, useState } from "react";
import { allVideos } from "../../resources/videos.js";
import styles from "./LiveWallperSection.module.css"; 

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min); 
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const LiveWallperSection = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const result = getRandomIntInclusive(0, allVideos.length - 1);
    setCurrentIndex(result);
  }, []);

  function onRightWallperHandler() {
    if (currentIndex + 1 >= allVideos.length) {
      setCurrentIndex(0);
      props.showDemoPreviewHandler(true);
    } else {
      setCurrentIndex(currentIndex + 1);
      props.showDemoPreviewHandler(true);
    }
  }

  function onLeftWallperHandler() {
    if (currentIndex - 1 < 0) {
      setCurrentIndex(allVideos.length - 1);
      props.showDemoPreviewHandler(true);
    } else {
      setCurrentIndex(currentIndex - 1);
      props.showDemoPreviewHandler(true);
    }
  }

  return (
    <section className={styles["first-section"]}>
      <video
        className={styles["background-clip"]}
        src={allVideos[currentIndex]}
        autoPlay
        loop
        muted
        preload="metadata"
      ></video>
      <FontAwesomeIcon
        onClick={onRightWallperHandler}
        className={styles["on-right-icon"]}
        icon={faAngleRight} // Промяна на faAnglesRight на faAngleRight
      />
      <FontAwesomeIcon
        onClick={onLeftWallperHandler}
        className={styles["on-left-icon"]}
        icon={faAngleLeft} // Промяна на faAnglesLeft на faAngleLeft
      />
    </section>
  );
};
