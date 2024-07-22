import { useRef, useState } from "react";
import style from "../DeleteGame/DeleteGame.module.css";

import dontDoItImage from "../../../images/dont-do-it.png";

export const DeleteGame = ({
  gameList, 
  setGameListHandler, 
  renderGameList,
  allGames,
  setAllGamesListHandler,
}) => {
  const containerRef = useRef();
  const [inputText, setInputText] = useState("");

  const showGameDeletHandler = () => (containerRef.current.style.display = "block");
  const hideGameDeleteHandler = () => (containerRef.current.style.display = "none");
  const setInputTextHandler = (event) => setInputText(event.target.value);

  function deleteGameHandler(event) {
    event.preventDefault();
    const gameForDelete = allGames.find((game) => game.name === inputText);
    const gameKey = gameForDelete._id;


    let paths = location.pathname.split("/");
    paths.shift();

    //   Example:
    let specificCategory = paths[1]; // Games
    let subCategory = paths[2]; // Ps5-Games

    if (specificCategory.toLocaleLowerCase() === "games")
      specificCategory = "game";

    let concreteUrl = `https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/${specificCategory}/${subCategory}/${gameKey}.json`;

    if (subCategory == undefined || subCategory === 'details') {
      concreteUrl = `https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/${specificCategory}/${gameKey}.json`;
    }

    // Изпращане на DELETE заявка към Firebase
    fetch(concreteUrl,{method: "DELETE",}
    ).then((response) => {
        if (response.ok) setInputText("");

        const newGameList = gameList.filter(game => game._id != gameKey);
        renderGameList.current = true;
        setGameListHandler(newGameList);
        setAllGamesListHandler(allGames.filter(game => game._id != gameKey));
      })
      .catch((error) => {
        console.error("Error deleting game:", error);
      });
  };




  

  return (
    <>
      <article ref={containerRef} className={style["create-game-container"]}>
        <img
          className={style["dont-do-it-image"]}
          src={dontDoItImage}
          alt="dont-do-it-image"
        />

        <form onSubmit={deleteGameHandler}>
          <span onClick={hideGameDeleteHandler} className={style["x-button"]}>
            X
          </span>

          <div>
            <label htmlFor="game-name">Game Name:</label>
            <input
              value={inputText}
              onChange={setInputTextHandler}
              type="text"
              id="game-name"
              name="game_name"
              required
            />
          </div>

          <button type="submit">Delete Game</button>
        </form>
      </article>

      <button
        onClick={showGameDeletHandler}
        className={style["show-game-delete"]}
      >
        Delete Game
      </button>
    </>
  );
};
