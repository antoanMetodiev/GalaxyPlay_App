import style from "./Chat.module.css";
import { useState, useEffect, useRef, useContext } from "react";
import { database, ref, onValue } from "../../../../../firebase/firebase";

import onlineImage from "../../images/online image.webp";
import sendImageButton from "../../images/send-icon.webp";
import backToUsersList from "../../images/back-to-users-list.webp";
import { useLocation } from "react-router-dom";

import image1 from "../../videos/boats.webp";
import image3 from "../../videos/cars.webp";


import picture1 from "../../videos/far cry.webp";
import picture2 from "../../videos/kosmonavt.webp";
import picture3 from "../../videos/mountain.webp";


import backgoundVideo1 from "../../videos/message-section-wallper.mp4";
import backgoundVideo3 from "../../videos/cars-video.mp4";

let allBackImages = [picture1, picture2, picture3];

function isValidImageUrl(url) {
	const pattern = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg|bmp|ico|tiff?))(?:\?.*)?$/i;
	const flexiblePattern = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg|bmp|ico|tiff?))(\?.*)?$/i;
	const keywordsPattern = /images|media|photo|photos|gallery|picture|img/i;
	return pattern.test(url) || flexiblePattern.test(url) || keywordsPattern.test(url);
}

import { AllAvatarsContext } from "../../../../../contexts/allAvatarsContext";


export const Chat = ({
	myFriendUsername,
	setShowConcreteChatPermissionHandler,
	showUsersListImgRef,
	bigImageRef,
	showBigImage,
	currentBigImageRef,
}) => {
	let [firstRender, setFirstRender] = useState(true);
	let location = useLocation();
	let [currentFriendData, setCurrentFriendData] = useState({});
	const [messageText, setMessageText] = useState("");
	let mainContainerWrapper = useRef(null);


	// Avatars Context:
	let { allAvatarsReversed } = useContext(AllAvatarsContext);


	// Всички съобщения за конкретната дискусия:
	let [allMessagesForCurrentConversation, setAllMessagesForCurrentConversation] = useState([]);
	const [receiver, setReceiver] = useState(myFriendUsername); // username на получателя

	let currentUserUsername = JSON.parse(localStorage.getItem("user")).username;

	// Референция към контейнера на съобщенията
	const messagesContainerRef = useRef(null);
	let optionsDivContainerRef = useRef(null);
	let youAreBlockedContainerRef = useRef(null);
	let inputRef = useRef(null); // това ми е инпута в който си пиша съобщенията!
	let blockOrNotRef = useRef(null);
	let pillarRef = useRef(null);


	// Background Video state: 
	let [backgoundImage, setBackgoundImage] = useState(allBackImages[1]);
	let hiddenAllBackgroundVideosDivRef = useRef(null);


	// This is event listener when user try to send me message:
	useEffect(() => {

		showUsersListImgRef.current.style.right = '26.2em';
		if (currentUserUsername) {

			const messagesRef = ref(database, `users/${currentUserUsername}/messages/${receiver}`);

			const unsubscribe = onValue(messagesRef, (snapshot) => {
				const data = snapshot.val();
				const messagesList = data
					? Object.keys(data).map((key) => ({ id: key, ...data[key] }))
					: [];
				setAllMessagesForCurrentConversation(messagesList);
			});


			return () => unsubscribe();
		}
	}, [receiver]);

	// srcroll до дъното на контейнера при обновяване на съобщенията
	useEffect(() => {
		if (messagesContainerRef.current) {
			setTimeout(() => {
				messagesContainerRef.current.scrollTo({
					top: messagesContainerRef.current.scrollHeight,
					behavior: "smooth",
				});
			}, 500);
		}
	}, [allMessagesForCurrentConversation]);

	// I Send Message logic:
	async function sendMessage(e) {
		e.preventDefault();

		if (messageText.trim()) {


			// Съхранявам в нейния path
			let response = await fetch(
				`https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/users/${receiver}/messages/${currentUserUsername}.json`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						text: messageText,
						userName: currentUserUsername || "Anonymous",
					}),
				}
			);

			// Now i need to save messages on my path also:
			// Съхранявам в моя path
			response = await fetch(
				`https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/users/${currentUserUsername}/messages/${receiver}.json`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						text: messageText,
						userName: currentUserUsername || "Anonymous",
					}),
				}
			);

			if (response.ok) {
				setMessageText("");

				console.log("Send it!");
			} else {
				console.error("Error sending message: ", response.statusText);
			}
		}
	}

	// GET CURRENT FRIEND DATA:
	useEffect(() => {
		let getChatUserLitleData = async () => {
			let response = await fetch(
				`https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/chatUsers/${myFriendUsername}.json`
			);
			response = await response.json();
			setCurrentFriendData(Object.values(response)[0]);
		};

		getChatUserLitleData();
	}, [myFriendUsername]);

	console.log(currentFriendData.username);

	function backToUsersListHandler() {
		// зачиствам си всичко отворено като options, backgroundVideos (който са в options нали) и тнт:
		hiddenAllBackgroundVideosDivRef.current.style.display = 'none';
		optionsDivContainerRef.current.style.display = 'none';

		mainContainerWrapper.current.classList.add(style["hide"]);
		setTimeout(() => {
			showUsersListImgRef.current.style.right = '22em';
			setShowConcreteChatPermissionHandler();
		}, 500);
	}


	// Invoke showBigImage function in App:
	function showBigImageHandler(event) {
		let paths = location.pathname.split('/');
		paths.shift();

		if (paths[0] === 'categories' && paths[1]) {
			bigImageRef.current.style.height = '124vh';
		} else {
			bigImageRef.current.style.height = '100vh';
		}

		if ((paths.length == 2) && (paths[0] === 'categories' && paths[1] == 'games')) {
			bigImageRef.current.style.height = '100vh';
		}

		currentBigImageRef.current.src = '';
		bigImageRef.current.style.display = 'none';

		showBigImage(event.currentTarget.src);
	}


	useEffect(() => {
		setFirstRender(false);
	}, []);


	useEffect(() => {

		// Референция към пътя, който искаш да слушаш
		const blockedRef = ref(database, `users/${receiver}/blockedUsers/${currentUserUsername}`);

		// Добавяне на слушател към този път
		debugger;
		const unsubscribe = onValue(blockedRef, (snapshot) => {
			const data = snapshot.val();

			console.log('vlqzoh');
			console.log(data);

			debugger;

			if (data) {
				debugger;
				// Ако името на текущия потребител съществува, означава че е блокиран

				youAreBlockedContainerRef.current.children[0].textContent = 'You Are Blocked!';
				youAreBlockedContainerRef.current.style.display = 'block';
				blockOrNotRef.current.hidden = true;
				inputRef.current.disabled = true;

			} else {
				debugger;
				// Ако името не съществува, не е блокиран

				if (inputRef.current.disabled === true) {
					youAreBlockedContainerRef.current.style.display = 'block';
				} else {

				}

				if (youAreBlockedContainerRef.current.style.display !== 'none') {
					youAreBlockedContainerRef.current.style.display = 'none';
					inputRef.current.disabled = false;
					blockOrNotRef.current.hidden = false;
				}
			}

			console.log(blockOrNotRef.current.textContent);

			if (blockOrNotRef.current.textContent == 'Unblock') {
				youAreBlockedContainerRef.current.style.display = 'block';
				inputRef.current.disabled = true;
				console.log('tam li vlazam');
			}
		});

		// Cleanup функция за премахване на слушателя при демонтиране на компонента
		return () => unsubscribe();

	}, [currentUserUsername, receiver, blockOrNotRef.current, youAreBlockedContainerRef]); // Включване на зависимости



	// Initial check if i block this user or he/she block me:
	useEffect(() => {

		debugger;
		// проверявам дали аз случайно съм блокирал дадения user: 
		let checkIfUserIsBlocked = async () => {
			let responce = await fetch(`https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/users/${currentUserUsername}/blockedUsers/${receiver}.json`);

			responce = await responce.json();

			if (responce) {
				youAreBlockedContainerRef.current.style.display = 'block';
				youAreBlockedContainerRef.current.children[0].textContent = 'Blocked User!'

				blockOrNotRef.current.textContent = 'Unblock';

				inputRef.current.disabled = true;
			}
		}

		let checkIfTheUserIsBlockMe = async () => {
			let responce = await fetch(`https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/users/${receiver}/blockedUsers/${currentUserUsername}.json`);

			responce = await responce.json();

			if (responce) {
				youAreBlockedContainerRef.current.style.display = 'block';
				youAreBlockedContainerRef.current.children[0].textContent = 'You Are Blocked!'

				blockOrNotRef.current.hidden = true;

				inputRef.current.disabled = true;
			}
		}

		checkIfUserIsBlocked();  // if i block he/she!
		checkIfTheUserIsBlockMe(); // if he/she block me!

	}, [youAreBlockedContainerRef.current]);


	function showChatOptionsHandler() {
		if (optionsDivContainerRef.current.style.display == 'none' || optionsDivContainerRef.current.style.display == '') {
			optionsDivContainerRef.current.style.display = 'block';
			pillarRef.current.style.display = 'block';
		} else {
			optionsDivContainerRef.current.style.display = 'none';
			pillarRef.current.style.display = 'none';
		}
	}

	function showOtherBackgroundVideosHandler(event) {
		if (event.target.textContent == 'Change background video') {

			hiddenAllBackgroundVideosDivRef.current.style.display = 'flex';
			event.target.textContent = 'Hide background videos'

		} else if (event.target.textContent == 'Hide background videos') {

			hiddenAllBackgroundVideosDivRef.current.style.display = 'none';
			event.target.textContent = 'Change background video';
		}

		optionsDivContainerRef.current.style.display = 'none';
		pillarRef.current.style.display = 'none';
	}

	function changeWallperHandler(event) {
		setBackgoundImage(allBackImages[event.target.alt]);
	}



	function blockOrUnblockUserHandler(event) {

		debugger;
		if (event.target.textContent === 'Block') {


			youAreBlockedContainerRef.current.style.display = 'block';
			youAreBlockedContainerRef.current.children[0].textContent = 'Blocked User!'
			optionsDivContainerRef.current.style.display = 'none';
			pillarRef.current.style.display = 'none';
			inputRef.current.disabled = true;

			fetch(`https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/users/${currentUserUsername}/blockedUsers/${receiver}.json`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					blockedUser: receiver,
				}),
			});

			blockOrNotRef.current.textContent = 'Unblock';


		} else if (event.target.textContent === 'Unblock') {

			youAreBlockedContainerRef.current.style.display = 'none';
			optionsDivContainerRef.current.style.display = 'none';
			pillarRef.current.style.display = 'none';

			fetch(`https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/users/${currentUserUsername}/blockedUsers/${receiver}.json`, {
				method: 'DELETE'
			});

			blockOrNotRef.current.textContent = 'Block';

			inputRef.current.disabled = false;
		}
	}


	async function deleteMessagesHandler() { // ONLY MY PATH!!!
		setAllMessagesForCurrentConversation([]);
		optionsDivContainerRef.current.style.display = 'none';

		await fetch(`https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/users/${currentUserUsername}/messages/${receiver}.json`, {
			method: 'DELETE',
		});
	}

	
	return (
		<>
			<article
				ref={mainContainerWrapper}
				className={style["chat-container-wrapper"]}
			>

				<div
					ref={hiddenAllBackgroundVideosDivRef}
					className={style['all-background-videos-container']}>
					<img onClick={changeWallperHandler} src={picture1} alt="0" />
					<img onClick={changeWallperHandler} src={picture2} alt="1" />
					<img onClick={changeWallperHandler} src={picture3} alt="2" />
				</div>

				<header className={style["username-and-avatar"]}>
					<img
						className={style["current-friend-img"]}
						src={allAvatarsReversed[currentFriendData.photoURL]}
						alt="avatar-photo"
					/>
					<h2 className={style["username-title"]}>
						{currentFriendData.username}
					</h2>
					<p className={style["online-label"]}>online</p>
					<img
						className={style["online-image"]}
						src={onlineImage}
						alt="online-image"
					/>


					<p
						ref={pillarRef}
						className={style['pillar']}></p>

					<i

						onClick={showChatOptionsHandler}
						id={style['options']}
						className="fa-solid fa-gear"
					/>




					<div
						ref={optionsDivContainerRef}
						className={style['options-div-container']}
					>
						<h4 onClick={showOtherBackgroundVideosHandler}>Change background video</h4>
						<h4 ref={blockOrNotRef} onClick={blockOrUnblockUserHandler}>Block</h4>
						<h4 onClick={deleteMessagesHandler}>Delete Messages</h4>
					</div>

					<img
						onClick={backToUsersListHandler}
						className={style["back-to-users-list"]}
						src={backToUsersList}
						alt="backToUsersList"
					/>
				</header>


				{/* Blocked User: */}

				<div
					ref={youAreBlockedContainerRef}
					className={style['blocked-user-container']}>
					<h2>Blocked User!</h2>
				</div>


				<section
					ref={messagesContainerRef}
					className={style["messages-section"]}
				>

					<p className={style['shadow']}></p>

					<img
						className={style['message-section-wallper-video']}
						src={backgoundImage}
					/>

					{allMessagesForCurrentConversation.map((msg) => (
						isValidImageUrl(msg.text) ? (
							msg.userName === currentUserUsername ? (

								<div className={style['img-message-wrapper-container']}>
									<img
										onClick={showBigImageHandler}
										// onMouseEnter={() => setIsHovered(true)}
										// onMouseLeave={() => setIsHovered(false)}
										value={msg.text} className={style['my-img-message']}
										src={msg.text} alt="my-img-message" key={msg.id}
									/>
								</div>

							) : (

								<div className={style['other-img-message-wrapper-container']}>
									<img
										onClick={showBigImageHandler}
										value={msg.text} className={style['other-user-img-message']}
										src={msg.text} alt="my-img-message" key={msg.id}
									/>
								</div>
							)
						) : (
							<li
								className={
									msg.userName === currentUserUsername
										? style["myMessage-item"]
										: style["other-user-message-item"]
								}
								key={msg.id}
							>
								{msg.text}
							</li>
						)
					))}
				</section>

				<form onSubmit={sendMessage} className={style["chat-form"]}>
					<input
						ref={inputRef}
						onChange={(e) => setMessageText(e.target.value)}
						className={style["message-text-container"]}
						type="text"
						value={messageText}
						placeholder="Type Something..."
					/>
					<img
						onClick={sendMessage}
						className={style["send-message-button"]}
						src={sendImageButton}
						alt="Submit"
					/>

					<button type="submit" hidden></button>
				</form>
			</article>

		</>
	);
};
