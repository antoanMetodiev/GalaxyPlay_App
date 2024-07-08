import { useEffect, useRef} from "react";
import { useParams } from "react-router-dom";

import style from "./GameInfo.module.css";
import gameStarsImage from "../../../../../../../images/stars-image.png";

export const GameInfoHeader = ({
  gameDetails,
  setGameDetailsHandler,
}) => {
  const { gameId } = useParams();

  const shopsContainerRef = useRef('none');
  const shopsContainerTitleRef = useRef('none');

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await fetch(
          `https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/game/ps5-games/${gameId}.json`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch game details.");
        }
        const data = await response.json();
        setGameDetailsHandler(data);
      } catch (error) {
        console.error("Error fetching game details:", error);
      }
    };

    fetchGameDetails();
  }, [gameId]);

  if (!gameDetails) return <p style={{fontSize: "2em"}}>Please, Wait...</p>;

  function openShopsHandler() {
	if (shopsContainerRef.current.style.display === 'none' || shopsContainerRef.current.style.display === '') {
		shopsContainerRef.current.style.display = 'block'
	} else {
		shopsContainerRef.current.style.display = 'none';	
	}

	if (shopsContainerTitleRef.current.style.display === 'none' || shopsContainerTitleRef.current.style.display === '') {
		shopsContainerTitleRef.current.style.display = 'block'
	} else {
		shopsContainerTitleRef.current.style.display = 'none';
	} 
  };

    return (
        <div className={style["game-details-container"]}>
          <img src={gameDetails.imageUrl} alt={gameDetails.name} />

          <section className={style["game-content"]}>
            <h2 className={style["game-title"]}>{gameDetails.name}</h2>

            <div className={style['stars-wrapper']}>
              <img
                className={style["game-stars"]}
                src={gameStarsImage}
                alt="game-stars"
              />
              <span>5.0 от 5 (5) |SKU: VGP50000032N</span>
            </div>

            <section className={style['additional-info']}>
              <ul>
                  <li>Genre:</li>
                  <li>Number of players:</li>
                  <li>PEGI rating:</li>
                  <li>Themes:</li>
              </ul>
              <ul>
                  <li>Fighting</li>
                  <li>1-2</li>
                  <li>18+</li>
                  <li>{gameDetails.name} - Theme</li>
              </ul>
            </section>

            <div className={style['first-sales-info']}>
                <section>
                  <i className="fa-solid fa-check" style={{ color: "#63E6BE" }} />
                  <p>In stock</p>
                  <i className="fa-solid fa-question" />
                </section>
                
                <p>Can be at your place:</p>
            </div>

            <div className={style['second-sales-info']}>
                <section>
                  <i className="fa-solid fa-truck-fast" />
                  <p>Standard delivery</p>
                </section>

                <p>From <span className={style['special-color']}>July 8, 2024</span> to <span className={style['special-color']} >July 11, 2024</span></p>
            </div>

            <p className={style['info-under-the-truck-icon']}>Delivery date is estimated and depends on the location and the chosen courier company. The exact date when the product will reach you, as well as the final shipping cost, will be provided upon completion of the order.</p>

            <section onClick={openShopsHandler} className={style['our-shops-places']}>
                <i className="fa-solid fa-angle-down" />
                <p>Buy from <span>our store</span></p>
            </section>
			<div>
				<p ref={shopsContainerTitleRef} className={style['showShopsContainerTitle']}
				
				>Select from a store where the product is available</p>
				<ul ref={shopsContainerRef} className={style['our-shops-container']}>
					<li>GalaxyPlay Games Bulgaria Mall</li>
					<li>GalaxyPlay Games Park Center</li>
					<li>GalaxyPlay Games Sofia Ring Mall</li>
					<li>GalaxyPlay South Mall</li>
					<li>GalaxyPlay Live Grand Mall Varna</li>
					<li>GalaxyPlay Games Mall Plovdiv</li>
				</ul>
			</div>
          </section>

          <div>
            <section className={style['game-price-container']}>
                    <p>RRP {(gameDetails.price * 2) + 1}.99 eu.</p>
                    <h2 className={style['price']}>{gameDetails.price}.99 EU.</h2>
                    <p>Difference {Number(gameDetails.price) + 1}.00 eu.</p>
                    <p>Price protection</p>
                    <button className={style['buy-button']}>BUY</button>
            </section>
            <section className={style['add-to-favorites-container']}>
                <p>Add to favorites</p>
                <p>Rate the product</p>
            </section>
          </div>
        </div>
    );
}