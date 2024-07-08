import style from "./Body.module.css";

import { GameInfoHeader } from "./structure/GameInfo/GameInfo";
import { GameDescription } from "./structure/GameDescription/GameDescription";
import { useState } from "react";

export const Body = () => {
    const [gameDetails, setGameDetails] = useState([]);
    const setGameDetailsHandler = (newData) => setGameDetails(newData);
  
  return (
    <article className={style["game-details-wrapper"]}>
      <div className={style['content-main-container']}>
        
      <GameInfoHeader gameDetails={gameDetails} setGameDetailsHandler={setGameDetailsHandler} />
      {gameDetails.description && <GameDescription gameDetails={gameDetails} />}
    
      </div>
    </article>
  );
};
