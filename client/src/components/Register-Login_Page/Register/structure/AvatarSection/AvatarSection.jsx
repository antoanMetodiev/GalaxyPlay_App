import style from "./AvatarSection.module.css";

import { allAvatarsReversed, allAvatars } from "../../../../../utils/allAvatars";
import { useEffect, useState } from "react";


export const AvatarSection = ({
	showAvatarContainerRef,
	setNewAvatarHandler,
}) => {
	



	function setAvatarImage(event) {
		if (event.target.tagName === "IMG") {
			let imgUrl = event.target.getAttribute("data-img-url");

			let urlAndLocalePicture = {
				url: imgUrl,
				image: allAvatarsReversed[imgUrl],
			};
			
			setNewAvatarHandler(urlAndLocalePicture);

		} else if (event.target.tagName === "BUTTON") {
			showAvatarContainerRef.current.classList.add(style.hide);
			setTimeout(() => {
				showAvatarContainerRef.current.style.display = "none";
			}, 500); // Продължителността на анимацията е 0.5 секунди
		}
	}

	return (
		<article
			className={style["wrapper-avatar-container"]}
			onClick={setAvatarImage}
			ref={showAvatarContainerRef}
		>
			<div className={style["avatar-container"]}>
				<img
					data-img-url="https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151034122.jpg?t=st=1721426381~exp=1721429981~hmac=cfefb34a932207ebc58f35a581127b9d6b7529a915c6f4b8f5554dac8919d4b8&w=740"
					src={allAvatars.boy3}
					alt="boy3"
				/>
				<img
					data-img-url="https://img.freepik.com/free-photo/portrait-beautiful-young-woman-with-stylish-hairstyle-glasses_1142-40217.jpg?t=st=1721429621~exp=1721433221~hmac=52ba8a4295dccae1a7963e3a91409d91a81e0035f17efb485157f781d0fb774b&w=740"
					src={allAvatars.Girl10}
					alt="Girl10"
				/>
				<img
					data-img-url="https://img.freepik.com/free-photo/portrait-young-businessman-with-mustache-glasses-3d-rendering_1142-51509.jpg?t=st=1721426240~exp=1721429840~hmac=c36779215eea8aace4823f4f687fc508fe2366d39229bd8588c44f7e1245d076&w=740"
					src={allAvatars.boy6}
					alt="boy6"
				/>
				<img
					data-img-url="https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151033969.jpg?t=st=1721426935~exp=1721430535~hmac=495fd0fca3e5092a736beb6e11b61287542ba3f327e6c9cdbba5e9b00a1e0463&w=740"
					src={allAvatars.Girl1}
					alt="Girl1"
				/>
				<img
					data-img-url="https://img.freepik.com/free-photo/portrait-handsome-hipster-man-glasses-3d-rendering_1142-51612.jpg?t=st=1721426046~exp=1721429646~hmac=7add9372407fc45274b391f1084f07f688acb3a8306c017f9cbed729548fcdda&w=740"
					src={allAvatars.boy5}
					alt="boy5"
				/>
				<img
					data-img-url="https://img.freepik.com/free-photo/cute-girl-with-blond-hair-blue-eyes-3d-rendering_1142-51238.jpg?t=st=1721426423~exp=1721430023~hmac=997e74636035954efa53b362c297163fad0b6233a1c4830e17eaa8ca464966e2&w=740"
					src={allAvatars.Girl6}
					alt="Girl6"
				/>
				<img
					data-img-url="https://img.freepik.com/free-photo/3d-rendering-male-robot-wearing-cap-sunglasses_1142-58088.jpg?t=st=1721424114~exp=1721427714~hmac=dac5e65fc8f60a8f44fcb7f12e01a4261431f57c82db13af6f6d631d29069495&w=740"
					src={allAvatars.boy2}
					alt="boy2"
				/>
				<img
					data-img-url="https://img.freepik.com/free-photo/3d-illustration-cute-cartoon-girl-blue-jacket-glasses_1142-41044.jpg?t=st=1721426726~exp=1721430326~hmac=8132021b1564439fdfef722edbc822ebab88002b73eccc8169328a004efc8d33&w=740"
					src={allAvatars.Girl3}
					alt="Girl3"
				/>

				<img
					data-img-url="https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151033967.jpg?t=st=1721425939~exp=1721429539~hmac=7090451e5055c29f5c243248c3144b1b50d0dbf7e17397b76e826f9e21f98ba3&w=740"
					src={allAvatars.Girl2}
					alt="Girl2"
				/>
				<img
					data-img-url="https://img.freepik.com/free-photo/3d-rendering-teenager-boy-with-backpack-city_1142-55311.jpg?t=st=1721428345~exp=1721431945~hmac=c54dd79df751d82d1d5eabc3f3b09bf5a2d1319aef99e562704592853d726032&w=740"
					src={allAvatars.boy4}
					alt="boy4"
				/>
				<img
					data-img-url="https://img.freepik.com/free-photo/portrait-young-woman-wearing-glasses-3d-rendering_1142-43632.jpg?t=st=1721427026~exp=1721430626~hmac=10cd69fd7ff1fcad3017d194eb40bb3c2ec5864cf1e8c107fa4d9ff90675f09b&w=740"
					src={allAvatars.Girl11}
					alt="Girl11"
				/>

				<img
					data-img-url="https://img.freepik.com/free-photo/portrait-beautiful-girl-pink-helmet-3d-rendering_1142-40639.jpg?t=st=1721755069~exp=1721758669~hmac=2fb508158b12ac849ef4e09c44b875c0355f4c16d11b7fd1c7c51f2cb96d6c35&w=740"
					src={allAvatars.Girl8}
					alt="Girl8"
				/>
				<img
					data-img-url="https://img.freepik.com/free-photo/3d-rendering-cartoon-character-with-eyeglasses-jacket_1142-51310.jpg?t=st=1721755248~exp=1721758848~hmac=23abd345c15018f640851aeb2a01b8e5256ba95428f081cef92471d645b12161&w=740"
					src={allAvatars.boy1}
					alt="boy"
				/>
				<img
					data-img-url="https://img.freepik.com/free-photo/fashion-portrait-beautiful-woman-sunglasses-bokeh-background_1142-42746.jpg?t=st=1721755363~exp=1721758963~hmac=915d416ea6bcd5de1508e775598548a70a28a927cadb3654094bb61e911096b8&w=740"
					src={allAvatars.Girl7}
					alt="Girl8"
				/>

				<img
					data-img-url="https://img.freepik.com/free-photo/portrait-beautiful-young-woman-with-curly-hair-brown-hat_1142-42780.jpg?t=st=1721755512~exp=1721759112~hmac=2c1160acc0ef35fd84e5129f9b0f08ecfce412c14543da9e8cc2fa01f29fa1ba&w=740"
					src={allAvatars.Girl9}
					alt="Girl9"
				/>


				<img
					data-img-url="https://img.freepik.com/free-photo/3d-rendering-female-ninja-doll-city-street_1142-41373.jpg?t=st=1721755694~exp=1721759294~hmac=f80dc4ed007ebf606e63f32c7bbc0953d6a9fe6f835310658bf9fd21b14b9bb2&w=740"
					src={allAvatars.Girl5}
					alt="Girl5"
				/>
				<img
					data-img-url="https://img.freepik.com/free-photo/3d-rendering-cute-cartoon-girl-with-glasses-cap_1142-43420.jpg?t=st=1721755768~exp=1721759368~hmac=0a47dbecc31d5bd1b18c8b52fee5c2627793d642a6f9c90b147f6ecf648351c7&w=740"
					src={allAvatars.Girl4}
					alt="Girl4"
				/>

			</div>

			<button className={style["hide-section-button"]}>Hide Section</button>
		</article>
	);
};
