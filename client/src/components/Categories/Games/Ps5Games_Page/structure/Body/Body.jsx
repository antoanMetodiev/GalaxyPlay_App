import style from "../Body/Body.module.css";
import { Link } from "react-scroll";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import { GameList } from "./GameList/GameList";
import { CreateGame } from "./CreateGame/CreateGame";
import { DeleteGame } from "./DeleteGame/DeleteGame";
import { UpdateGame } from "./UpdateGame/UpdateGame";
import { PaginationList } from "./PaginationList/PaginationList";

import PcWallperVideo from "../../../../../DiscoverPage/resources/videos/cyberpunk-2077.mp4";
import Ps5WallperVideo from "../../../../../DiscoverPage/resources/videos/ps5-wallper-video.mp4";
import GamesWallperVideo from "../../../../../DiscoverPage/resources/videos/Ghost-of-Tsushima.mp4";
import Ps4WallperVideo from "../../../../../DiscoverPage/resources/videos/TLOU2.mp4";
import XboxWallperVideo from "../../../../../DiscoverPage/resources/videos/Xbox-wallper.mp4";
import LaptopWallperVideo from "../../../../../DiscoverPage/resources/videos/lofi-headphones.mp4";

// They are global because i want when the component is unmounted - this data will be saved!
let allGames = [];
let savedFirstCollection = [];
let previousPathName = "";

export const Body = ({
  initialMountForFirst_18_Games,
  initialMountForAllGames,
  startAndEndIndexes,

  currentPage,
  setCurrentPageHandler,
  savePreviousPageIndex,
  shouldPrerenderGameList,
  setShouldPrerenderGameList,
  cleanUpForGameDetails,
}) => {
  const [gameList, setGameList] = useState([]);
  let myFavContainerRef = useRef(null);

  const renderGameList = useRef(true);
  let location = useLocation();
  let paths = location.pathname.split("/");

  let allFavouritesProductsCount = useRef(null);
  function setallFavouritesProductsCountHandler(newCount) {
    allFavouritesProductsCount.current.textContent = newCount;
  }

  // PRE-RENDER Game List, because we quit about that page and going in Game-Cateregories or Cateregories:
  if (shouldPrerenderGameList) {
    // ZA TOVA SHTE TI TRQBWA HANDLER:
    debugger;
    setShouldPrerenderGameList(false);
    setGameList(allGames.slice(0, 18));
  }

  let wallperVideos = {
    game: GamesWallperVideo,
    pc: PcWallperVideo,
    ps5: Ps5WallperVideo,
    ps4: Ps4WallperVideo,
    xbox: XboxWallperVideo,
    laptop: LaptopWallperVideo,
  };

  let concreteVideo = wallperVideos[paths[paths.length - 1]];

  if (paths[paths.length - 2] === "games") {
    concreteVideo = wallperVideos.game;
  }

  function setGameListHandler(finalValue) {
    setGameList(finalValue);
  }
  function setAllGamesListHandler(finalValue) {
    allGames = finalValue;
  }
  function setSavedFirstCollection(finalValue) {
    savedFirstCollection = finalValue;
  }
  function setPreviousPathNameHandler(newPath) {
    previousPathName = newPath;
  }


  function showFavoritesContainer() {
	debugger;
	let a = myFavContainerRef.current.style.display;
    if (myFavContainerRef.current.style.display == "none" || myFavContainerRef.current.style.display == "") {
      myFavContainerRef.current.style.display = "flex";
    } else {
      myFavContainerRef.current.style.display = "none";
    }
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
          <i className="fa-solid fa-angles-down" />
        </Link>

        <div className={style["background"]}>
          <video
            className={style["background-video"]}
            src={concreteVideo}
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
            previousPathName={previousPathName}
            setPreviousPathNameHandler={setPreviousPathNameHandler}
            savePreviousPageIndex={savePreviousPageIndex}
            cleanUpForGameDetails={cleanUpForGameDetails}
            setallFavouritesProductsCountHandler={
              setallFavouritesProductsCountHandler
            }
            myFavContainerRef={myFavContainerRef}
          />
        </div>

        <i
          onClick={showFavoritesContainer}
          id={style["my-favourites-icon"]}
          className="fa-regular fa-heart"
        >
          <span ref={allFavouritesProductsCount}>0</span>
        </i>

        <PaginationList
          allGames={allGames}
          gameList={gameList}
          setGameListHandler={setGameListHandler}
          startAndEndIndexes={startAndEndIndexes}
          previousPathName={previousPathName}
          setPreviousPathNameHandler={setPreviousPathNameHandler}
          currentPage={currentPage}
          setCurrentPageHandler={setCurrentPageHandler}
        />
      </article>
    </>
  );
};
