import styles from "../Categories/Categories.module.css";
import { useNavigate } from "react-router-dom";

import backgroundVideo from "../Categories/Products/SpecificCategory/images/beautiful-miami.webp";

import gamesImage from "./resources/images/games.webp";
import pc from "./resources/images/pc.webp";
import ps5 from "./resources/images/ps5.webp";
import ps4 from "./resources/images/ps4.webp";
import xbox from "./resources/images/xbox.webp";
import mac from "./resources/images/mac.webp";

export const Categories = () => {
	const navigate = useNavigate();

	function navigateToPathHandler(event) {
		navigate(`${(event.target.previousSibling.textContent).toLowerCase()}`);
		// window.location.reload();
	}

	return (
		<article className={styles["container"]}>
			<img
				className={styles["background-clip"]}
				autoPlay
				muted
				loop
				src={backgroundVideo}
			></img>

			<section className={styles["demo-website-preview"]}>
				{/* Categories */}
				<h2>Categories</h2>

				<article className={styles.playstation}>
					<div className={`${styles.playstation} ${styles._5}`}>
						<img src={gamesImage} alt="games-image" />
						<div className={styles.content}>
							<h2>Games</h2>
							<button onClick={navigateToPathHandler}>View Now</button>
						</div>
						<span className={styles["bkg-color"]}></span>
					</div>
					<div className={`${styles.playstation} ${styles._5}`}>
						<img src={pc} alt="games-image" />
						<div className={styles.content}>
							<h2>PC</h2>
							<button onClick={navigateToPathHandler}>View Now</button>
						</div>
						<span className={styles["bkg-color"]}></span>
					</div>
					<div className={`${styles.playstation} ${styles._5}`}>
						<img src={ps5} alt="games-image" />
						<div className={styles.content}>
							<h2>PS5</h2>
							<button onClick={navigateToPathHandler}>View Now</button>
						</div>
						<span className={styles["bkg-color"]}></span>
					</div>
				</article>
				<article className={styles.playstation}>
					<div className={`${styles.playstation} ${styles._5}`}>
						<img src={ps4} alt="games-image" />
						<div className={styles.content}>
							<h2>PS4</h2>
							<button onClick={navigateToPathHandler}>View Now</button>
						</div>
						<span className={styles["bkg-color"]}></span>
					</div>
					<div className={`${styles.playstation} ${styles._5}`}>
						<img src={xbox} alt="games-image" />
						<div className={styles.content}>
							<h2>XBOX</h2>
							<button onClick={navigateToPathHandler}>View Now</button>
						</div>
						<span className={styles["bkg-color"]}></span>
					</div>
					<div className={`${styles.playstation} ${styles._5}`}>
						<img src={mac} alt="games-image" />
						<div className={styles.content}>
							<h2>Laptop</h2>
							<button onClick={navigateToPathHandler}>View Now</button>
						</div>
						<span className={styles["bkg-color"]}></span>
					</div>
				</article>
			</section>
		</article>
	);
};
