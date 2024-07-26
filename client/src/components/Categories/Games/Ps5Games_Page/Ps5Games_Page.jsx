import React, { useState, useEffect } from "react";
import { Header } from "./structure/Header/Header";
import { Body } from "./structure/Body/Body";
import { Footer } from "./structure/Footer/Footer";
import { useRef } from "react";
import { useLocation } from "react-router-dom"; // Добавяне на useLocation

let firstMount = true;
let startAndEndIndexes = { startIndex: 0, endIndex: 18 };

const initialMountForAllGames = { value: false };
const initialMountForFirst_18_Games = { value: false };

let previousPage = 1; // ako komponenta e unmountnat i ne sme vlezli v Game-Details si e raven na 1va stranica!!!
let shouldPrerenderGameList = false;

export const Ps5Games_Page = () => {
	let location = useLocation();
	let goingToGameDetails = useRef(false);

	// CURRENT PAGE:
	const [currentPage, setCurrentPage] = useState(previousPage);
	let setCurrentPageHandler = (newPage) => {
		setCurrentPage(newPage);
	};

	// debugger;
	if (firstMount) {
		firstMount = false;
		startAndEndIndexes.startIndex = 0;
		startAndEndIndexes.endIndex = 18;
	}

	function setShouldPrerenderGameList(value) {
		shouldPrerenderGameList = value;
	}

	useEffect(() => {
		// Clean Up Function:
		return () => {
			debugger;
			const pathName = location.pathname;
			const lastElement = pathName.split("/").pop();

			if ((location.pathname.split("/").length <= 2 || lastElement.includes("games")) && goingToGameDetails.current === false) {
				previousPage = 1;
				startAndEndIndexes.startIndex = 0;
				startAndEndIndexes.endIndex = 18;
				setShouldPrerenderGameList(true);
			}
		};
	}, [location.pathname]); // Добавяне на зависимости location.pathname и currentPage

	function savePreviousPageIndex() {
		// debugger;
		goingToGameDetails.current = true;
		previousPage = currentPage;
	}

	// That function is about GameDetails, because i should know if the user decided to quit,redirect to categories or something else:
	function cleanUpForGameDetails() {
		previousPage = 1;
		startAndEndIndexes.startIndex = 0;
		startAndEndIndexes.endIndex = 18;
		setShouldPrerenderGameList(true);
	}

	return (
		<>
			<Header />
			<Body
				startAndEndIndexes={startAndEndIndexes}
				initialMountForAllGames={initialMountForAllGames}
				initialMountForFirst_18_Games={initialMountForFirst_18_Games}
				currentPage={currentPage}
				setCurrentPageHandler={setCurrentPageHandler}
				savePreviousPageIndex={savePreviousPageIndex}
				shouldPrerenderGameList={shouldPrerenderGameList}
				setShouldPrerenderGameList={setShouldPrerenderGameList}
				cleanUpForGameDetails={cleanUpForGameDetails}
			/>
		</>
	);
};
