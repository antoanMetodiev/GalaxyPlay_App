import { useRef, useState } from "react";
import style from "../DeleteItem/DeleteItem.module.css";


export const DeleteItem = ({
	productList,
	setGameListHandler,
	renderGameList,
	allProducts,
	setAllGamesListHandler,
	currentPage,
	setCurrentPageHandler,
	startAndEndIndexes,
}) => {
	const containerRef = useRef();
	const [inputText, setInputText] = useState("");

	const showGameDeletHandler = () => {
		containerRef.current.classList.remove(style['fade-out']);
		containerRef.current.classList.add(style['fade-in']);
		containerRef.current.style.display = "block";
	};

	const hideGameDeleteHandler = () => {
		containerRef.current.classList.remove(style['fade-in']);
		containerRef.current.classList.add(style['fade-out']);

		setTimeout(() => {
			containerRef.current.style.display = "none";
			containerRef.current.classList.remove(style['fade-out']);
		}, 400);
	};
	const setInputTextHandler = (event) => setInputText(event.target.value);

	async function deleteGameHandler(event) {
		event.preventDefault();
		const gameForDelete = allProducts.find((game) => game.name === inputText);
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


		// Изпращане на DELETE заявка към Firebase tuk:

		debugger;
		let recponce = await fetch(concreteUrl, { method: "DELETE", })

		if (recponce.ok) {
			setInputText("");

			let newGameList = productList.filter(game => game._id != gameKey);
			let newAllProducts = allProducts.filter(game => game._id != gameKey);

			if (newGameList.length == 0) {

				debugger;
				let endIndex = newAllProducts.length;
				let startIndex = endIndex - 18;
				newGameList = newAllProducts.slice(startIndex, endIndex);

				startAndEndIndexes.startIndex = startIndex;
				startAndEndIndexes.endIndex = endIndex;
				setCurrentPageHandler(currentPage - 1);
			}

			renderGameList.current = true;
			setGameListHandler(newGameList);
			setAllGamesListHandler(newAllProducts);
		}
	};



	return (
		<>
			<article ref={containerRef} className={style["create-game-container"]}>
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

					<button type="submit">Delete Item</button>
				</form>
			</article>

			<button
				onClick={showGameDeletHandler}
				className={style["show-game-delete"]}
			>
				Delete Item
			</button>
		</>
	);
};
