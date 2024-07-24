import style from "./GameItem.module.css";
import starsImage from "../../../images/stars-image.png";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

let favouriteProductsKeys = {};

export const GameItem = ({
  data,
  savePreviousPageIndex,
  cleanUpForGameDetails,
  setallFavouritesProductsCountHandler,
  setFavouriteProductsHandler,
}) => {
  let location = useLocation();
  let paths = location.pathname.split("/");
  paths.shift();

  let currentUserUsername = JSON.parse(localStorage.getItem("user")).username;

  let heartIconRef = useRef(null);

  useEffect(() => {
    // TODO:
    const getInitialFavouritesProducts = async () => {
      let initialFavouritesList = await fetch(
        `https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/users/${currentUserUsername}/favourites.json`
      );

      let random = await initialFavouritesList.json();

      for (const key in random) {
        // That is the real list:
        random[key].keyForFavouritesPath = key;
        favouriteProductsKeys[random[key].productName] = random[key];
      }

      setallFavouritesProductsCountHandler(
        Object.keys(favouriteProductsKeys).length
      );

      // Here we check if favouriteProductsKeys includes game we should colored current game in red:
      if (Object.keys(favouriteProductsKeys).includes(data.name)) {
        heartIconRef.current.style.color = "red";
      }

      // debugger;
      setFavouriteProductsHandler({...favouriteProductsKeys});

      console.log(favouriteProductsKeys);
      console.log("TOVA OTGORE NAD MEN E favouriteProductsKeys!");
    };

    getInitialFavouritesProducts();

  }, [location.pathname]);

  //   Example:
  let specificCategory = paths[1]; // Games
  let subCategory = paths[2]; // Ps5-Games

  if (specificCategory.toLocaleLowerCase() === "games")
    specificCategory = "game";

  // debugger;
  let baseURL = `/categories/${specificCategory}/${subCategory}/${data._id}`;
  if (subCategory == undefined) {
    baseURL = `/categories/${specificCategory}/details/${data._id}`;
  }

  const gameItemRef = useRef();
  useEffect(() => {
    const solve = () => {
      gameItemRef.current.style.opacity = 1;
      gameItemRef.current.style.transform = "translateY(20px)";

      gameItemRef.current.style.animation = `${style.fadeInUp} 0.5s forwards`;
    };

    solve();
  }, []);

  let navigate = useNavigate();
  function navigateToGameDetails() {
    savePreviousPageIndex();
    navigate(baseURL);
  }

  async function addToFavouritesHandler(event) {
    // Here we just change the color:
    let currentColor = getComputedStyle(event.target).color;

    if (currentColor === "rgb(255, 0, 0)") {
      event.target.style.color = "silver";

      // Here we delete favurite product:

      let wantedKey = "";
      for (const key in favouriteProductsKeys) {
        if (key === data.name) {
          wantedKey = favouriteProductsKeys[key].keyForFavouritesPath;
        }
      }

	  debugger;
      await fetch(
        `https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/users/${currentUserUsername}/favourites/${wantedKey}.json`,
        {
          method: "DELETE",
        }
      ).catch((error) => console.log(error));

      const filteredEntries = Object.entries(favouriteProductsKeys).filter(
        ([key, value]) => key !== data.name
      );

      const updatedFavouriteProductsKeys = Object.fromEntries(filteredEntries);
      favouriteProductsKeys = updatedFavouriteProductsKeys;

      setallFavouritesProductsCountHandler(
        Object.keys(favouriteProductsKeys).length
      );

      setFavouriteProductsHandler({...favouriteProductsKeys});
    } else {
      debugger;
      event.target.style.color = "red";

      // Here we send request about user favourites:

      let productKey = await fetch(
        `https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/users/${currentUserUsername}/favourites.json`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productName: data.name,
            productId: data._id,
            productImage: data.imageUrl,
            productPrice: data.price,
            path: location.pathname + '/' + data._id,
          }),
        }
      ).catch((error) => console.log(error));

      let addedProductID = await productKey.json();

      debugger;
      let newObject = {
        keyForFavouritesPath: addedProductID.name,
        productId: data._id,
        productImage: data.imageUrl,
        productPrice: data.price,
		    productName: data.name,
        path: location.pathname + '/' + data._id,
      };

      setallFavouritesProductsCountHandler(
        Object.keys(favouriteProductsKeys).length + 1
      );

      favouriteProductsKeys[data.name] = newObject;

      setFavouriteProductsHandler({...favouriteProductsKeys});

        console.log(favouriteProductsKeys);
    }
  }

  return (
    <div ref={gameItemRef} className={style["game-item"]}>
      <img
        className={style["game-item-image"]}
        src={data.imageUrl}
        alt="game-image"
      />

      <div className={style["game-item-stars-wrapper"]}>
          <div>
            <i
              className="fa-solid fa-star fa-flip"
              style={{ color: "#f7a309", fontSize: "1.22em" }}
            />
            <i
              className="fa-solid fa-star fa-flip"
              style={{ color: "#f7a309", fontSize: "1.22em" }}
            />
            <i
              className="fa-solid fa-star fa-flip"
              style={{ color: "#f7a309", fontSize: "1.22em" }}
            />
            <i
              className="fa-solid fa-star fa-flip"
              style={{ color: "#f7a309", fontSize: "1.22em" }}
            />
            <i
              className="fa-solid fa-star fa-flip"
              style={{ color: "#f7a309", fontSize: "1.22em" }}
            />
          </div>
        </div>

      <article className={style["game-content"]}>
        <h2 className={style["game-name"]}>{data.name}</h2>

        <button
          onClick={navigateToGameDetails}
          className={style["game-button"]}
        >
          View
        </button>

        <i
          style={{
            color: Object.keys(favouriteProductsKeys).includes(data.name)
              ? "red"
              : "silver",
          }}
          ref={heartIconRef}
          onClick={addToFavouritesHandler}
          id={style["add-to-favourites"]}
          className="fa-solid fa-heart"
        />

        <span className={style["game-price"]}>{data.price}.99 USD</span>
      </article>
    </div>
  );
};
