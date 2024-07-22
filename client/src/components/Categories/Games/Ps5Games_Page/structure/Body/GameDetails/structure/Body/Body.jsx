import style from "./Body.module.css";

import { GameInfoHeader } from "./structure/GameInfo/GameInfo";
import { GameDescription } from "./structure/GameDescription/GameDescription";
import { useEffect, useState } from "react";
import { CommentSection } from "./structure/CommentSection/CommentSection";

export const Body = () => {
  const [gameDetails, setGameDetails] = useState({});
  let [firstComponentRender, setFirstComponentRender] = useState(false);

  const setGameDetailsHandler = (newData) => {
    setGameDetails(newData);
    setFirstComponentRender(true);
  };

  return (
    <article className={style["game-details-wrapper"]}>
      <div className={style["content-main-container"]}>
        <GameInfoHeader
          gameDetails={gameDetails}
          setGameDetailsHandler={setGameDetailsHandler}
        />

        {firstComponentRender && <GameDescription gameDetails={gameDetails} />}

        <CommentSection gameDetails={gameDetails} />
      </div>
    </article>
  );
};
