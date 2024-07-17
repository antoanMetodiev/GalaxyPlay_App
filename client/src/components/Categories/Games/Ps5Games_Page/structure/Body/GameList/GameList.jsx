import { useEffect, useRef, useState } from "react";
import {
  database,
  ref,
  onValue,
  query,
  startAt,
  limitToFirst,
  orderByKey,
} from "../../../../../../../firebase/firebase";

import style from "../Body.module.css";
import { GameItem } from "../GameItem/GameItem";
import { SearchEngine } from "../SearchEngine/SearchEngine";
import { useLocation } from "react-router";

export const GameList = ({
  gameList,
  renderGameList,
  setGameListHandler,
  initialMountForAllGames,
  initialMountForFirst_18_Games,
  startAndEndIndexes,
  allGames,
  setAllGamesListHandler,
  savedFirstCollection,
  setSavedFirstCollection,

}) => {
  const [allGamesWithPattern, setAllGamesWithPattern] = useState([]);

  // This useEffect is NOT for SearchEngine logic:
  useEffect(() => {
    console.log(initialMountForFirst_18_Games);

	// debugger;
    if (!initialMountForFirst_18_Games.value) {
      initialMountForFirst_18_Games.value = true;

      const gameListRef = ref(database, "game/ps5-games");
      const gamesQuery = query(gameListRef, limitToFirst(18)); // Лимит за мойте първи 18 игри на сървъра

      const unsubscribe = onValue(gamesQuery, (snapshot) => {
        const games = snapshot.val();
        if (games) {
          const gameArray = Object.keys(games).map((key) => ({
            _id: key,
            ...games[key],
          }));

          setGameListHandler(gameArray);
        } else {
          setGameListHandler([]);
        }
      });

	  return () => {
		unsubscribe();
	  };

    } else {

		// debugger;
		const newArr = allGames.slice(startAndEndIndexes.startIndex, startAndEndIndexes.endIndex);
		setGameListHandler(newArr);
	}

    
  }, [allGames]);

  // FOR PS5 GAMES:
  const location = useLocation();

  const urlDatas = location.pathname.split("/");
  const currentPath = (
    urlDatas[2].slice(0, urlDatas[2].length - 1) +
    "/" +
    urlDatas[3]
  ).toLocaleLowerCase();
  debugger;
  const baseUrl = `https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/${currentPath}.json`;

  useEffect(() => {
    console.log(initialMountForAllGames);

    if (!initialMountForAllGames.value) {
      initialMountForAllGames.value = true;

      console.log(initialMountForAllGames);
      const fetchData = async () => {
        try {
          const response = await fetch(baseUrl);

          if (!response.ok) {
            throw new Error("Network is not OK");
          }

          const games = await response.json();
          if (games) {
            const gameArray = Object.keys(games).map((key) => ({
              _id: key,
              ...games[key],
            }));

            setAllGamesListHandler(gameArray);
            setAllGamesWithPattern(gameArray);
          } else {
            setAllGamesWithPattern([]);
          }
        } catch (error) {
          console.error("Failed to fetch data:", error);
        }
      };

      fetchData();
    }
  }, [baseUrl]);

  // Search Engine Logic: ^
  //----------------------------------------------------------

  const setAllGamesWithPatternHandler = (newArr) => {
    setAllGamesWithPattern(newArr);
  };

  debugger;
  return (
    <>
      <section className={style["game-row"]}>
        {(allGamesWithPattern.length > 0 && !renderGameList.current
          ? allGamesWithPattern
          : gameList
        ).map((game) => (
          <GameItem key={game._id} data={game} />
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
      />
    </>
  );
};
