import { useEffect, useState } from "react";
import style from "../SearchEngine/SearchEngine.module.css";
import { GET } from "../../../../../../../../services/service";
import { useLocation } from "react-router-dom";

export const SearchEngine = () => {
  const [allGames, setAllGames] = useState([]);

  // FOR PS5 GAMES:
  const location = useLocation();
  // debugger;

  const urlDatas = location.pathname.split("/");
  const currentPath = (
    urlDatas[2].slice(0, urlDatas[2].length - 1) +
    "/" +
    urlDatas[3]
  ).toLocaleLowerCase();
  const baseUrl = `https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/${currentPath}.json`;

  useEffect(() => {
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

          setAllGames(gameArray);
        } else {
            setAllGames([]);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, [baseUrl]);


  console.log(allGames);

  return (
    <input
      className={style["search-engine"]}
      type="text"
      placeholder="Search..."
    />
  );
};
