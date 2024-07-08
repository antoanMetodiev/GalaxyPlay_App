import { useRef } from "react";
import style from "../CreateGame/CreateGame.module.css";
import { database } from '../../../../../../../firebase/firebase';
import { ref, push, set } from "firebase/database";

import letsGooImage from "../../../images/lets-goo-image.png";

export const CreateGame = () => {
  const containerRef = useRef();

  // Функция за обработка на изпращането на формата
  const onSubmitFormHandler = async (event) => {
    event.preventDefault();

    // Събиране на данни от формата
    const formData = new FormData(event.target);

    const descriptionText = formData.get('description').split(',# ');
    const otherImagesUrl = formData.get('other_images_url').split(', ');

    const gameData = {
      name: formData.get('game_name'),
      price: formData.get('price'),
      imageUrl: formData.get('image_url'),
	    otherImageUrl: otherImagesUrl,
      description: descriptionText,
      trailer: formData.get('trailer'),
    };

    event.target.game_name.value = "";
    event.target.price.value = "";
    event.target.image_url.value = "";
    event.target.description.value = "";
    event.target.other_images_url.value = "";
    event.target.trailer.value = "";


    try {
      // Създаване на request към колекцията "game/ps5-games" и добавяне на нова игра
      const gameListRef = ref(database, 'game/ps5-games');
      const newGameRef = push(gameListRef);
      
      // Изпращане на данните на играта към Firebase
      const resultMaybe = await set(newGameRef, gameData);
      
      console.log(resultMaybe);
      // props.createGameHandler(gameData); // this is my code

      console.log('Game added successfully');
      // Може да добавите код за известяване или обновяване на списъка с игри
      
    } catch (error) {
      console.error('Error adding game: ', error);
    }
  };

  // Функция за показване на формата за създаване на игри
  const showGameCreateHandler = () => {
    containerRef.current.style.display = 'block';
  }
  const hideGameCreateHandler = () => {
    containerRef.current.style.display = 'none';
  }

  return (
    <>
      

      <article className={style["create-game-container"]} ref={containerRef}>

      {/* <img className={style['lets-goo-image']} src={letsGooImage} alt="lets-goo-image" /> */}

        <form onSubmit={onSubmitFormHandler}>
          <span onClick={hideGameCreateHandler} className={style["x-button"]}>X</span>
          <div>
            <label htmlFor="game-name">Name of the game</label>
            <input type="text" id="game-name" name="game_name" required />
          </div>

          <div>
            <label htmlFor="price">Price (EU)</label>
            <input type="number" id="price" name="price" required />
          </div>

          <div>
            <label htmlFor="img-url">Game Picture Url</label>
            <input type="text" id="img-url" name="image_url" required />
          </div>

          <div>
            <label htmlFor="img-url">Other Pictures Url</label>
            <input type="text" id="img-url" name="other_images_url" required />
          </div>

          <div>
            <label htmlFor="trailer-video">Trailer Video</label>
            <input type="text" id="trailer-video" name="trailer" required />
          </div>

          <div>
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              placeholder="Write Something..."
              required
            ></textarea>
          </div>
          

          <button type="submit">Create Game</button>
        </form>
      </article>

      <button onClick={showGameCreateHandler} className={style["show-game-create"]}>
      Create Game 
      </button>
    </>
  );
};
