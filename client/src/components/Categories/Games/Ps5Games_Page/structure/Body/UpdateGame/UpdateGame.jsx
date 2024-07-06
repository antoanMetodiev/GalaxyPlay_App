import { useRef } from "react";
import style from "./UpdateGame.module.css";
import { ref, update } from "firebase/database";
import { database } from "../../../../../../../firebase/firebase";

export const UpdateGame = ({ gameList }) => {
  const containerRef = useRef();

  const showUpdateGameHandler = () =>
    (containerRef.current.style.display = "block");
  const hideUpdateGameHandler = () =>
    (containerRef.current.style.display = "none");

  function updateGameHandler(event) {
    event.preventDefault();

    const searchedGame = event.target.game_name.value;
    const newGameName = event.target.new_game_name.value;
    const newPrice = event.target.price.value;
    const newDescription = event.target.description.value;

    // Намери играта по име
    const oldObjectGame = gameList.find((game) => game.name === searchedGame);
    if (!oldObjectGame) {
      console.error(`Game ${searchedGame} not found`);
      return;
    }

    const newObjectGame = {
      description: newDescription.trim()? newDescription: oldObjectGame.description,
      name: newGameName.trim() ? newGameName : oldObjectGame.name,
      price: newPrice > 0 ? newPrice : oldObjectGame.price,
    };

    // Референция към конкретния запис
    const gameRef = ref(database, `game/ps5-games/${oldObjectGame._id}`);

    // Изпрати заявка за актуализиране
    update(gameRef, newObjectGame).catch((error) => {
      console.error("Error updating game:", error);
    });

    event.target.game_name.value = '';
    event.target.new_game_name.value = '';
    event.target.price.value = '';
    event.target.description.value = '';
  }

  return (
    <>
      <article className={style["create-game-container"]} ref={containerRef}>
        <form onSubmit={updateGameHandler}>
          <span onClick={hideUpdateGameHandler} className={style["x-button"]}>
            X
          </span>
          <div>
            <label htmlFor="game-name">
              Name of the game who want to Update
            </label>
            <input type="text" id="game-name" name="game_name" required />
          </div>
          <div>
            <label htmlFor="new-game-name">New Name of the game</label>
            <input type="text" id="new-game-name" name="new_game_name" />
          </div>
          <div>
            <label htmlFor="price">New Price (EU)</label>
            <input type="number" id="price" name="price" />
          </div>
          <div>
            <label htmlFor="description">New Description</label>
            <textarea
              name="description"
              id="description"
              placeholder="Write Something..."
            ></textarea>
          </div>
          <button type="submit">Update Game</button>
        </form>
      </article>
      <button
        onClick={showUpdateGameHandler}
        className={style["show-game-create"]}
      >
        Update Game
      </button>
    </>
  );
};
