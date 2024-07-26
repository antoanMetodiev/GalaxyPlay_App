import style from "./GameDescription.module.css";
import { Link } from "react-scroll";
import ReactPlayer from "react-player";

import { GameCharacteristics } from "./structure/GameCharacteristics/GameCharacteristics";

export const GameDescription = ({ gameDetails }) => {
	//   console.log(gameDetails);

	return (
		<>
			{gameDetails && (
				<>
					<h2 className={style["full-product-desk-title"]}>
						FULL PRODUCT DESCRIPTION
					</h2>
					<p className={style["desc-text"]}>{gameDetails.description[0]}</p>
					<img
						className={style["desc-image"]}
						src={gameDetails.otherImageUrl[0]}
						alt={gameDetails.name + " image"}
					/>
					<p className={style["desc-text"]}>{gameDetails.description[1]}</p>
					<img
						className={style["desc-image"]}
						src={gameDetails.otherImageUrl[1]}
						alt={gameDetails.name + " image"}
					/>
					<p className={style["desc-text"]}>{gameDetails.description[2]}</p>
					<img
						className={style["desc-image"]}
						src={gameDetails.otherImageUrl[2]}
						alt={gameDetails.name + " image"}
					/>

					<p className={style["desc-text"]}>{gameDetails.description[3]}</p>

					<h2 className={style["trailer-title"]}>
						{gameDetails.name} - Trailer
					</h2>
					<div className={style["video-wrapper-container"]} id="trailer_id">
						<ReactPlayer
							url={gameDetails.trailer}
							width="100%"
							height="100%"
							controls
						/>
					</div>

					<GameCharacteristics />
				</>
			)}
		</>
	);
};
