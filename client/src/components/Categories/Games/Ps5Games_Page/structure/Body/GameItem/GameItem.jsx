import style from "./GameItem.module.css";
import starsImage from "../../../images/stars-image.png";

import { Link } from "react-router-dom";

export const GameItem = (props) => {
  let baseURL = `/categories/Games/ps5-games/${props.data._id}`;

  return (
    <div className={style["game-item"]}>
      <img
        className={style["game-item-image"]}
        src={props.data.imageUrl}
        alt="game-image"
      />
      <img className={style["game-stars-image"]} src={starsImage} alt="stars" />

      <article className={style["game-content"]}>
        <h2 className={style["game-name"]}>{props.data.name}</h2>

        <Link to={baseURL} className={style["game-button"]}>
          View
        </Link>

        <span className={style["game-price"]}>{props.data.price}.99 EU</span>
      </article>

      
    </div>
  );
};
