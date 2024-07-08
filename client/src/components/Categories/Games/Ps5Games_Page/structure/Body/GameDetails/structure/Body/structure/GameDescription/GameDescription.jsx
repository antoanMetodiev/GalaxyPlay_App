import style from "./GameDescription.module.css";
import { Link } from "react-scroll";
import ReactPlayer from "react-player";

export const GameDescription = ({ gameDetails }) => {
//   console.log(gameDetails);

  return (
    <>
      {/* <Link
        className={style["navigate-to-trailer"]}
        to="kurec"
        duration={1000}
        smooth={true}
        spy={true}
      >
        See Video
      </Link> */}

      <h2 className={style["full-product-desk-title"]}>
        FULL PRODUCT DESCRIPTION
      </h2>

      <p className={style["desc-text"]}>{gameDetails.description[0]}</p>

      <img
        className={style["desc-image"]}
        src={gameDetails.otherImageUrl[0]}
        alt={gameDetails.name + " image"}
      />

      <p id="kurec" className={style["desc-text"]}>{gameDetails.description[1]}</p>

      <img
        className={style["desc-image"]}
        src={gameDetails.otherImageUrl[1]}
        alt={gameDetails.name + " image"}
      />

      <p className={style["desc-text"]}>{gameDetails.description[2]}</p>

      <img
        className={style["desc-image"]}
        src={gameDetails.otherImageUrl[2]}
        alt={gameDetails.name + " image"}
      />

      <p className={style["desc-text"]}>{gameDetails.description[3]}</p>

      <h2 className={style["trailer-title"]}>{gameDetails.name} - Trailer</h2>
      <div className={style["video-wrapper-container"]} id="trailer_id">
        <ReactPlayer
          url={gameDetails.trailer}
          width="100%"
          height="100%"
          controls
        />
      </div>
    </>
  );
};
