import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { allVideos } from "../../resources/videos.js";
import styles from "./LiveWallperSection.module.css";

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    // return 3;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const LiveWallperSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fading, setFading] = useState(false);

    
    useEffect(() => {
        const result = getRandomIntInclusive(0, allVideos.length - 1);
        setCurrentIndex(result);
    }, []);


    function onRightWallperHandler() {
        if (currentIndex + 1 >= allVideos.length) setCurrentIndex(0);
        else setCurrentIndex(currentIndex + 1);
    }

    function onLeftWallperHandler() {
        if (currentIndex - 1 < 0) setCurrentIndex(allVideos.length - 1);
        else setCurrentIndex(currentIndex - 1);
    }


    let gameTitle = allVideos[currentIndex].split('/');  // current game title!
    gameTitle = gameTitle[gameTitle.length - 1].split('%20').join(' ');
    gameTitle = gameTitle.split('.')[0];
    return (
        <section className={styles["first-section"]}>
            <video
                className={`${styles["background-clip"]}`}
                src={allVideos[currentIndex]}
                autoPlay
                loop
                muted
                preload="metadata"
            ></video>

            <FontAwesomeIcon
                onClick={onRightWallperHandler}
                className={styles["on-right-icon"]}
                icon={faAngleRight}
            />
            <FontAwesomeIcon
                onClick={onLeftWallperHandler}
                className={styles["on-left-icon"]}
                icon={faAngleLeft}
            />
        </section>
    );
};
