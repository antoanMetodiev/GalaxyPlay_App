import style from "../Body/Body.module.css";
import { useState } from "react";

import { GameList } from "./GameList/GameList";
import { CreateGame } from "./CreateGame/CreateGame";
import { DeleteGame } from "./DeleteGame/DeleteGame";
import { UpdateGame } from "./UpdateGame/UpdateGame";

import backVideo from "../../../../../DiscoverPage/resources/videos/Grand-Theft-Auto-VI.mp4";

export const Body = () => {
  const [gameList, setGameList] = useState([]);

  function setGameListHandler(value) {
    setGameList(value);
  }

  return (
    <>
      <DeleteGame gameList={gameList} setGameListHandler={setGameListHandler} />
      <CreateGame />
      <UpdateGame gameList={gameList} />

      <article>
        <div className={style["background"]}>
          <video
            className={style["background-video"]}
            src={backVideo}
            autoPlay
            muted
            loop
          ></video>
        </div>
        <div className={style["content"]}>
          <GameList
            gameList={gameList}
            setGameListHandler={setGameListHandler}
          />
        </div>
      </article>
    </>
  );
};
