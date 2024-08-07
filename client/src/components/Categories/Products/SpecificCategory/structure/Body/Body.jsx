import style from "../Body/Body.module.css";
import { Link } from "react-scroll";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import { ProductsList } from "./ProductsList/ProductsList";
import { CreateItem } from "./CreateItem/CreateItem";
import { DeleteItem } from "./DeleteItem/DeleteItem";
import { UpdateItem } from "./UpdateItem/UpdateItem";
import { PaginationList } from "./PaginationList/PaginationList";

import Ps5WallperVideo from "../../../../../DiscoverPage/resources/videos/Call Of Duty Modern Warfare II.mp4";
import Ps4WallperVideo from "../../../../../DiscoverPage/resources/videos/Tekken 7.mp4";
import GamesWallperVideo from "../../../../../DiscoverPage/resources/videos/Ghost Of Tsushima.mp4";
import XboxWallperVideo from "../../../../../DiscoverPage/resources/videos/Spider Man Miles Morales.mp4";
import PcWallperVideo from "../../../../../DiscoverPage/resources/videos/far cry 3.mp4";
import LaptopWallperVideo from "../../../../../DiscoverPage/resources/videos/Grand Theft Auto VI.mp4";


// They are global because i want when the component is unmounted - this data will be saved!
let savedAllGames = [];
let savedFirstCollection = [];
let previousPathName = "";

export const Body = ({
	initialMountForFirst_18_Games,
	initialMountForAllGames,
	startAndEndIndexes,

	currentPage,
	setCurrentPageHandler,
	savePreviousPageIndex,
	shouldPrerenderGameList,
	setShouldPrerenderGameList,
	cleanUpForGameDetails,
}) => {
	// debugger;
	const [allProducts, setAllProducts] = useState(savedAllGames);
	const [productList, setProductList] = useState([]);
	let [concreteVideo, setConcreteVideo] = useState('');
	let myFavContainerRef = useRef(null);

	debugger;
	const renderGameList = useRef(true);
	let location = useLocation();
	let paths = location.pathname.split("/");

	let allFavouritesProductsCount = useRef(null);
	function setallFavouritesProductsCountHandler(newCount) {
		if (allFavouritesProductsCount.current.textContent) {
			allFavouritesProductsCount.current.textContent = newCount;
		}
	};


	// References: 
	let crudContainerRef = useRef(null);



	// PRE-RENDER Game List, because we quit about that page and going in Game-Cateregories or Cateregories:
	if (shouldPrerenderGameList) {
		// ZA TOVA SHTE TI TRQBWA HANDLER:
		// debugger;
		setShouldPrerenderGameList(false);
		setProductList(allProducts.slice(0, 18));
	}

	useEffect(() => {
		let wallperVideos = {
			game: GamesWallperVideo,
			pc: PcWallperVideo,
			ps5: Ps5WallperVideo,
			ps4: Ps4WallperVideo,
			xbox: XboxWallperVideo,
			laptop: LaptopWallperVideo,
		};

		let concreteVideo1 = wallperVideos[paths[paths.length - 1].toLowerCase()];

		if (paths[paths.length - 2].toLowerCase() === "games") {
			concreteVideo1 = wallperVideos.game;
		}

		setConcreteVideo(concreteVideo1);
	}, [location.pathname])



	function setGameListHandler(finalValue) {
		setProductList(finalValue);
	}
	function setAllGamesListHandler(finalValue) {
		savedAllGames = finalValue;
		setAllProducts(finalValue);
	}
	function setSavedFirstCollection(finalValue) {
		savedFirstCollection = finalValue;
	}
	function setPreviousPathNameHandler(newPath) {
		previousPathName = newPath;
	}


	function showFavoritesContainer() {
		let a = myFavContainerRef.current.style.display;
		if (myFavContainerRef.current.style.display == "none" || myFavContainerRef.current.style.display == "") {
			myFavContainerRef.current.style.display = "flex";
		} else {
			myFavContainerRef.current.style.display = "none";
		}
	}

	function showCrudOperationsContainer(event) {
		if (event.target.textContent == 'CRUD') {
			crudContainerRef.current.style.display = 'block';
			event.target.textContent = 'HIDE CRUD';
		} else if ((event.target.textContent == 'HIDE CRUD')) {
			crudContainerRef.current.style.display = 'none';
			event.target.textContent = 'CRUD';
		}
	}

	return (
		<>
			{JSON.parse(localStorage.getItem("user")).username ===
				"antoanMetodiev" && (
					<>
						<div ref={crudContainerRef} className={style['crud-operations-container']}>
							<DeleteItem
								renderGameList={renderGameList}
								productList={productList}
								allProducts={allProducts}
								setGameListHandler={setGameListHandler}
								setAllGamesListHandler={setAllGamesListHandler}
								currentPage={currentPage}
								setCurrentPageHandler={setCurrentPageHandler}
								startAndEndIndexes={startAndEndIndexes}
							/>

							<CreateItem
								renderGameList={renderGameList}
								productList={productList}
								allProducts={allProducts}
								setGameListHandler={setGameListHandler}
								setAllGamesListHandler={setAllGamesListHandler}
							/>

							<UpdateItem
								setGameListHandler={setGameListHandler}
								renderGameList={renderGameList}
								productList={productList}
								allProducts={allProducts}
								setAllGamesListHandler={setAllGamesListHandler}

							/>
						</div>

						<button onClick={showCrudOperationsContainer} className={style['show-crud-operation-button']}>CRUD</button>
					</>
				)}

			<article>
				<Link
					to="pagination-container-id"
					className={style["goTo-pagination"]}
					spy={true}
					smooth={true}
					duration={1100}
				>
					<i className="fa-solid fa-angles-down" />
				</Link>

				<div className={style["background"]}>
					<video
						className={style["background-video"]}
						src={concreteVideo}
						autoPlay
						muted
						loop
					></video>
				</div>

				<div className={style["content"]}>
					<ProductsList
						initialMountForFirst_18_Games={initialMountForFirst_18_Games}
						initialMountForAllGames={initialMountForAllGames}
						renderGameList={renderGameList}
						startAndEndIndexes={startAndEndIndexes}
						productList={productList}
						allProducts={allProducts}
						setGameListHandler={setGameListHandler}
						setAllGamesListHandler={setAllGamesListHandler}
						savedFirstCollection={savedFirstCollection}
						setSavedFirstCollection={setSavedFirstCollection}
						previousPathName={previousPathName}
						setPreviousPathNameHandler={setPreviousPathNameHandler}
						savePreviousPageIndex={savePreviousPageIndex}
						cleanUpForGameDetails={cleanUpForGameDetails}
						setallFavouritesProductsCountHandler={setallFavouritesProductsCountHandler}
						myFavContainerRef={myFavContainerRef}
					/>
				</div>

				<i
					onClick={showFavoritesContainer}
					id={style["my-favourites-icon"]}
					className="fa-regular fa-heart"
				>
					<span ref={allFavouritesProductsCount}>0</span>
				</i>

				<PaginationList
					allProducts={allProducts}
					productList={productList}
					setGameListHandler={setGameListHandler}
					startAndEndIndexes={startAndEndIndexes}
					previousPathName={previousPathName}
					setPreviousPathNameHandler={setPreviousPathNameHandler}
					currentPage={currentPage}
					setCurrentPageHandler={setCurrentPageHandler}
				/>
			</article>
		</>
	);
};
