import { useRef, useState } from "react";
import style from "../DeleteGame/DeleteGame.module.css";

import dontDoItImage from "../../../images/dont-do-it.png";

export const DeleteGame = ({ gameList, setGameListHandler }) => {
  const containerRef = useRef();
  const [inputText, setInputText] = useState("");

  const showGameDeletHandler = () => (containerRef.current.style.display = "block");
  const hideGameDeleteHandler = () => (containerRef.current.style.display = "none");
  const setInputTextHandler = (event) => setInputText(event.target.value);

  function deleteGameHandler(event) {
    event.preventDefault();
    const gameForDelete = gameList.filter((game) => game.name === inputText)[0];
    const gameKey = gameForDelete._id;

    // Изпращане на DELETE заявка към Firebase
    fetch(
      `https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/game/ps5-games/${gameKey}.json`,
      {
        method: "DELETE",
      }
    ).then((response) => {
        if (response.ok) setInputText("");
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
