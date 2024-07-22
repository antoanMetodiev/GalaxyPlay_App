import { useEffect, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-scroll";

import style from "./GameInfo.module.css";
import gameStarsImage from "../../../../../../../images/stars-image.png";

export const GameInfoHeader = ({ gameDetails, setGameDetailsHandler }) => {
  let doCheck = useRef(false);
  const { gameId } = useParams();
  let location = useLocation();

  window.scrollTo(0, 0);

  //Refercences:
  const shopsContainerTitleRef = useRef("none");

  const shopsContainerRef = useRef("none");
  let infoUnderTheTruckRef = useRef(null);
  let shopsContainerWrapper = useRef();

  if (doCheck.current === true && gameDetails.name.includes("(")) {
    // debugger;
    infoUnderTheTruckRef.current.textContent =
      "Delivery date is estimated and depends on the location and the chosen courier company. The exact date when the product will reach you, as well as the final shipping cost.";
    shopsContainerWrapper.current.style.bottom = "0em";
  }

  useEffect(() => {
    let paths = location.pathname.split("/");
    paths.shift();

    //   Example:
    let specificCategory = paths[1]; // Games
    let subCategory = paths[2]; // Ps5-Games

    //   debugger;
    if (specificCategory.toLocaleLowerCase() === "games")
      specificCategory = "game";

    let concreteUrl = `https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/${specificCategory}/${subCategory}/${gameId}.json`;

    if (subCategory == undefined || subCategory == "details") {
      concreteUrl = `https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/${specificCategory}/${gameId}.json`;
    }

    const fetchGameDetails = async () => {
      try {
        const response = await fetch(concreteUrl);
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
    doCheck.current = true;
  }, [gameId]);

  if (!gameDetails) return <p style={{ fontSize: "2em" }}>Please, Wait...</p>;

  function openShopsHandler() {
    if (
      shopsContainerRef.current.style.display === "none" ||
      shopsContainerRef.current.style.display === ""
    ) {
      shopsContainerRef.current.style.display = "block";
    } else {
      shopsContainerRef.current.style.display = "none";
    }

    if (
      shopsContainerTitleRef.current.style.display === "none" ||
      shopsContainerTitleRef.current.style.display === ""
    ) {
      shopsContainerTitleRef.current.style.display = "block";
    } else {
      shopsContainerTitleRef.current.style.display = "none";
    }
  }

  return (
    <div className={style["game-details-container"]}>
      <img src={gameDetails.imageUrl} alt={gameDetails.name} />

      <section id="game-info-id" className={style["game-content"]}>
        <h2 className={style["game-title"]}>{gameDetails.name}</h2>

        <div className={style["stars-wrapper"]}>
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
          <span>5.0 от 5 (5) |SKU: VGP50000032N</span>
        </div>

        <section className={style["additional-info"]}>
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

        <div className={style["first-sales-info"]}>
          <section>
            <i className="fa-solid fa-check" style={{ color: "#63E6BE" }} />
            <p>In stock</p>
            <i className="fa-solid fa-question" />
          </section>

          <p>Can be at your place:</p>
        </div>

        <div className={style["second-sales-info"]}>
          <section>
            <i className="fa-solid fa-truck-fast" />
            <p>Standard delivery</p>
          </section>

          <p>
            From <span className={style["special-color"]}>July 8, 2024</span> to{" "}
            <span className={style["special-color"]}>July 11, 2024</span>
          </p>
        </div>

        {/* The exact date when the product will reach you, as well as the final shipping cost. */}
        <p
          ref={infoUnderTheTruckRef}
          className={style["info-under-the-truck-icon"]}
        >
          Delivery date is estimated and depends on the location and the chosen
          courier company.
        </p>

        <section
          ref={shopsContainerWrapper}
          onClick={openShopsHandler}
          className={style["our-shops-places"]}
        >
          <i className="fa-solid fa-angle-down" />
          <p>
            Buy from <span>our store</span>
          </p>
        </section>

        <div>
          <p
            ref={shopsContainerTitleRef}
            className={style["showShopsContainerTitle"]}
          >
            Select from a store where the product is available
          </p>
          <ul ref={shopsContainerRef} className={style["our-shops-container"]}>
            <li>GalaxyPlay Games Bulgaria Mall</li>
            <li>GalaxyPlay Games Park Center</li>
            <li>GalaxyPlay Games Sofia Ring Mall</li>
            <li>GalaxyPlay South Mall</li>
            <li>GalaxyPlay Live Grand Mall Varna</li>
            <li>GalaxyPlay Games Mall Plovdiv</li>
          </ul>
        </div>
      </section>

      <div className={style["game-price-wrapper"]}>
        <section className={style["game-price-container"]}>
          <p>RRP {gameDetails.price * 2 + 1}.99 eu.</p>
          <h2 className={style["price"]}>{gameDetails.price}.99 USD</h2>
          <p>Difference {Number(gameDetails.price) + 1}.00 eu.</p>
          <p>Price protection</p>
          <button className={style["buy-button"]}>BUY</button>
        </section>
        <section className={style["add-to-favorites-container"]}>
          <p>Add to favorites</p>
          <p>Rate the product</p>
        </section>
      </div>

      <Link
        to="comment-section-id"
        className={style["goTo-comment-section"]}
        spy={true}
        smooth={true}
        duration={1300}
        offset={-90}
      >
        <i className="fa-solid fa-arrow-down-long" />
      </Link>
    </div>
  );
};
