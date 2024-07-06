
import style from "../../Body/Body.module.css";

export const GameItem = (props) => {

    
  return (
    <div className={style["game-item"]}>
      <img className={style["game-item-image"]} src={props.data.imageUrl} alt="game" />

      <article className={style["game-content"]}>
        <h2 className={style["game-name"]}>{props.data.name}</h2>
        <button className={style["game-button"]}>View</button>
        <span className={style['game-price']}>{props.data.price}EU</span>
      </article>
    </div>
  );
};
