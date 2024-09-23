import styles from "../Products/Game_Categories.module.css"

import ps5GamesImage from "./images/ps5 games.webp";
import ps4GamesImage from "./images/ps4 games.webp";
import xboxGamesImage from "./images/xbox_games.webp";
import backImage from "./images/1.webp";

import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export const Game_Categories = () => {
	const navigate = useNavigate();

	function navigateToPathHandler(event) {
		navigate(`${event.target.previousSibling.textContent.toLowerCase().split(" ").join('-')}`);
	};

	return (
		<article className={styles["container"]}>

			<img
				className={styles['back-image']}
				src={backImage}
				alt="backImage"
			/>

			<section className={styles["demo-website-preview"]}>

				<article className={styles.playstation}>

					<div className={`${styles.playstation} ${styles._5}`}>
						<img src={ps5GamesImage} alt="ps5 games" />
						<div className={styles.content}>
							<h2>PS5 Games</h2>
							<button onClick={navigateToPathHandler} className={styles['ps5-button']}>View Now</button>
						</div>
						<span className={styles["bkg-color"]}></span>
					</div>

					<div className={`${styles.playstation} ${styles._5}`}>
						<img src={ps4GamesImage} alt="ps4 games" />
						<div className={styles.content}>
							<h2>PS4 Games</h2>
							<button onClick={navigateToPathHandler}> View Now</button>
						</div>
						<span className={styles["bkg-color"]}></span>
					</div>

					<div className={`${styles.playstation} ${styles._5}`}>
						<img src={xboxGamesImage} alt="ps4 games" />
						<div className={styles.content}>
							<h2>XBOX Games</h2>
							<button onClick={navigateToPathHandler} className={styles['xbox-button']}>View Now</button>
						</div>
						<span className={styles["bkg-color"]}></span>
					</div>

				</article>
			</section>
		</article>
	);
};
