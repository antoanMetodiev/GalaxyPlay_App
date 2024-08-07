import style from "./ProductItem.module.css";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

let favouriteProductsKeys = {};

export const ProductItem = ({
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


    // Initial GET REQUEST FOR ALL FAVOUTIRES PRODUCTS:
    useEffect(() => {

        const getInitialFavouritesProducts = async () => {
            let initialFavouritesList = await fetch(
                `https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/users/${currentUserUsername}/favourites.json`
            );

            let responceData = await initialFavouritesList.json();

            console.log(responceData);
            
            for (const key in responceData) {
                // That is the real list:

                responceData[key].keyForFavouritesPath = key;
                favouriteProductsKeys[responceData[key].name] = responceData[key];
            }

            debugger;

            console.log(favouriteProductsKeys);

            setallFavouritesProductsCountHandler(
                Object.keys(favouriteProductsKeys).length
            );

            // Here we check if favouriteProductsKeys includes game we should colored current game in red:
            if (Object.keys(favouriteProductsKeys).includes(data.name)) {
                heartIconRef.current.style.color = "red";
            }

            
            setFavouriteProductsHandler({ ...responceData });
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

    // console.log(data);

    let navigate = useNavigate();
    function navigateToGameDetails() {
        let currentGameDetailsData = {
            name: data.name,
            description: data.description,
            imageUrl: data.imageUrl,
            otherImageUrl: data.otherImageUrl,
            price: data.price,
            trailer: data.trailer,
        };

        localStorage.setItem('currentGame', JSON.stringify(currentGameDetailsData));
        savePreviousPageIndex();
        navigate(baseURL);
    };

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

            setFavouriteProductsHandler({ ...favouriteProductsKeys });
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
                        name: data.name,
                        description: data.description,
                        imageUrl: data.imageUrl,
                        otherImageUrl: data.otherImageUrl,
                        price: data.price,
                        trailer: data.trailer,
                        path: location.pathname + '/' + data._id,
                    }),
                }
            ).catch((error) => console.log(error));

            let addedProductID = await productKey.json();
            let newObject = {
                name: data.name,
                description: data.description,
                imageUrl: data.imageUrl,
                otherImageUrl: data.otherImageUrl,
                price: data.price,
                trailer: data.trailer,
                path: location.pathname + '/' + data._id,
                keyForFavouritesPath: addedProductID.name,
            };

            setallFavouritesProductsCountHandler(
                Object.keys(favouriteProductsKeys).length + 1
            );

            favouriteProductsKeys[data.name] = newObject;
            setFavouriteProductsHandler({ ...favouriteProductsKeys });

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
