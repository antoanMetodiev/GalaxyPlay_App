import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import style from "../Body.module.css";
import { GameItem } from "../GameItem/GameItem";
import { SearchEngine } from "../SearchEngine/SearchEngine";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FavouriteProductItem } from "./structure/FavouriteProductItem/FavouriteProductItem";

export const GameList = ({
  gameList,
  setGameListHandler,
  renderGameList,
  initialMountForAllGames,
  initialMountForFirst_18_Games,
  startAndEndIndexes,
  allGames,
  setAllGamesListHandler,
  savedFirstCollection,
  setSavedFirstCollection,
  previousPathName,
  setPreviousPathNameHandler,
  savePreviousPageIndex,
  cleanUpForGameDetails,
  setallFavouritesProductsCountHandler,
  myFavContainerRef,
}) => {
  const [allGamesWithPattern, setAllGamesWithPattern] = useState([]);
  let location = useLocation();
  

  // Favourite Products State:
  let [favouriteProducts, setFavouriteProducts] = useState({});
  const setFavouriteProductsHandler = (value) => {
    console.log(value);
    setFavouriteProducts(value);
  }

  let paths = location.pathname.split("/");
  let specificCategory = paths[2]; // Games
  let subCategory = paths[3]; // Ps5-Games

  if (specificCategory.toLocaleLowerCase() === "games")
    specificCategory = "game";

  let concretePath = specificCategory + "/" + subCategory;

  // This useEffect is NOT for SearchEngine logic:
  useEffect(() => {
    // debugger;

    const solve = () => {
      if (
        !initialMountForFirst_18_Games.value ||
        previousPathName !== concretePath
      ) {
        initialMountForFirst_18_Games.value = true;
        startAndEndIndexes.startIndex = 0;
        startAndEndIndexes.endIndex = 18;

        const fetchGames = async () => {
          let baseUrl = `https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/${specificCategory}/${subCategory}`;

          if (subCategory == undefined || subCategory === "details") {
            baseUrl = `https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/${specificCategory}`;
          }

          try {
            const response = await fetch(
              `${baseUrl}.json?orderBy="$key"&limitToFirst=18`
            );
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            const games = await response.json();
            if (games) {
              const gameArray = Object.keys(games).map((key) => ({
                _id: key,
                ...games[key],
              }));
              setGameListHandler(gameArray);
            } else {
              setGameListHandler([]);
            }
          } catch (error) {
            console.error("Failed to fetch games:", error);
          }
        };

        fetchGames();
      } else {
        const newArr = allGames.slice(
          startAndEndIndexes.startIndex,
          startAndEndIndexes.endIndex
        );
        setGameListHandler(newArr);
      }
    };

    if (gameList.length === 0) {
      solve();
    }
  }, []);

  // FOR PS5 GAMES:
  const urlDatas = location.pathname.split("/");

  let concreteUrl = `https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/${specificCategory}/${subCategory}.json`;

  useEffect(() => {
    const solve = () => {
      // debugger;
      if (subCategory == undefined || subCategory === "details") {
        concreteUrl = `https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/${specificCategory}.json`;
      }

      if (!initialMountForAllGames.value || previousPathName !== concretePath) {
        initialMountForAllGames.value = true;
        setPreviousPathNameHandler(concretePath);

        const fetchData = async () => {
          try {
            const response = await fetch(concreteUrl);
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            const games = await response.json();
            if (games) {
              const gameArray = Object.keys(games).map((key) => ({
                _id: key,
                ...games[key],
              }));
              setGameListHandler(gameArray.slice(0, 18));
              setAllGamesListHandler(gameArray);
              setAllGamesWithPattern(gameArray);
            }
          } catch (error) {
            console.error("Failed to fetch data:", error);
          }
        };

        fetchData();
      }
    };

    solve();
    // TOVA SI BQHA ZAVISIMOSTITE V TOZI DEPENDANCY ARRAY: concreteUrl, allGames]
  }, []);

  // Search Engine Logic:
  //----------------------------------------------------------

  const setAllGamesWithPatternHandler = (newArr) => {
    setAllGamesWithPattern(newArr);
  };

  return (
    <>
      <section className={style["game-row"]}>
        {(allGamesWithPattern.length > 0 && !renderGameList.current
          ? allGamesWithPattern
          : gameList
        ).map((game) => (
          <GameItem
            key={game._id}
            data={game}
            savePreviousPageIndex={savePreviousPageIndex}
            cleanUpForGameDetails={cleanUpForGameDetails}
            setallFavouritesProductsCountHandler={setallFavouritesProductsCountHandler}
            
            setFavouriteProductsHandler={setFavouriteProductsHandler}
          />
        ))}
      </section>

      <SearchEngine
        setAllGamesListHandler={setAllGamesListHandler}
        renderGameList={renderGameList}
        allGamesWithPattern={allGamesWithPattern}
        setAllGamesWithPatternHandler={setAllGamesWithPatternHandler}
        allGames={allGames}
        savedFirstCollection={savedFirstCollection}
        setSavedFirstCollection={setSavedFirstCollection}
        previousPathName={previousPathName}
        
      />


     {/* FAVOURITES */}
     <article ref={myFavContainerRef} className={style["my-favourites-container"]}>
        {Object.keys(favouriteProducts).length > 0 && (
          <>
            {Object.values(favouriteProducts).map((product) => (
              <FavouriteProductItem key={product.productId} product={product} />
            ))}
          </>
        )}
      </article>
    </>
  );
};
