import style from "../Body/Body.module.css";
import { Link } from "react-scroll";
import { useEffect, useRef, useState } from "react";

import { GameList } from "./GameList/GameList";
import { CreateGame } from "./CreateGame/CreateGame";
import { DeleteGame } from "./DeleteGame/DeleteGame";
import { UpdateGame } from "./UpdateGame/UpdateGame";
import { PaginationList } from "./PaginationList/PaginationList";

import backVideo from "../../../../../DiscoverPage/resources/videos/Grand-Theft-Auto-VI.mp4";

let allGames = [];
let savedFirstCollection = [];

export const Body = ({
  initialMountForFirst_18_Games,
  initialMountForAllGames,
  startAndEndIndexes,
}) => {
  const [gameList, setGameList] = useState([]);
  const renderGameList = useRef(true);

  function setGameListHandler(finalValue) {
    setGameList(finalValue);
  }

  function setAllGamesListHandler(finalValue) {
    allGames = finalValue;
  }

  function setSavedFirstCollection(finalValue) {
    savedFirstCollection = finalValue;
  }

  return (
    <>
      {JSON.parse(localStorage.getItem("user")).username ===
        "antoanMetodiev" && (
        <>
          <DeleteGame
            renderGameList={renderGameList}
            gameList={gameList}
            setGameListHandler={setGameListHandler}
            allGames={allGames}
            setAllGamesListHandler={setAllGamesListHandler}
          />

          <CreateGame
            renderGameList={renderGameList}
            gameList={gameList}
            setGameListHandler={setGameListHandler}
            allGames={allGames}
            setAllGamesListHandler={setAllGamesListHandler}
          />

          <UpdateGame
            setGameListHandler={setGameListHandler}
            renderGameList={renderGameList}
            gameList={gameList}
            allGames={allGames}
            setAllGamesListHandler={setAllGamesListHandler}
          />
        </>
      )}

      <article>
        <Link
          to="pagination-container-id"
          className={style["goTo-pagination"]}
          spy={true}
          smooth={true}
          duration={1100}
        >
          <i className="fa-solid fa-arrow-down-long" />
        </Link>

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
            initialMountForFirst_18_Games={initialMountForFirst_18_Games}
            initialMountForAllGames={initialMountForAllGames}
            renderGameList={renderGameList}
            startAndEndIndexes={startAndEndIndexes}
            gameList={gameList}
            setGameListHandler={setGameListHandler}
            allGames={allGames}
            setAllGamesListHandler={setAllGamesListHandler}
            savedFirstCollection={savedFirstCollection}
            setSavedFirstCollection={setSavedFirstCollection}
          />
        </div>

        <PaginationList
          allGames={allGames}
          gameList={gameList}
          setGameListHandler={setGameListHandler}
          startAndEndIndexes={startAndEndIndexes}
        />
      </article>
    </>
  );
};
