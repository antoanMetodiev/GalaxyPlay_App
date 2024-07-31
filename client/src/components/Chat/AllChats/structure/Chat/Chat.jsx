import style from "./Chat.module.css";
import { useState, useEffect, useRef } from "react";
import { database, ref, onValue } from "../../../../../firebase/firebase";

import onlineImage from "../../images/online image.png";
import sendImageButton from "../../images/send-icon.png";
import backToUsersList from "../../images/back-to-users-list.png";
import showUserContainer from "../../images/show-user-list-container.png";
import { useLocation } from "react-router-dom";

import backgoundVideo from "../../videos/message-section-wallper.mp4";


function isValidImageUrl(url) {
	const pattern = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg|bmp|ico|tiff?))(?:\?.*)?$/i;
	const flexiblePattern = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg|bmp|ico|tiff?))(\?.*)?$/i;
	const keywordsPattern = /images|media|photo|photos|gallery|picture|img/i;

	return pattern.test(url) || flexiblePattern.test(url) || keywordsPattern.test(url);
}

export const Chat = ({
	myFriendUsername,
	setShowConcreteChatPermissionHandler,
	showUsersListImgRef,
	bigImageRef,
	showBigImage,
	currentBigImageRef,
}) => {
	let location = useLocation();
	let [currentFriendData, setCurrentFriendData] = useState({});
	const [messageText, setMessageText] = useState("");
	let mainContainerWrapper = useRef(null);

	// Всички съобщения за конкретната дискусия:
	let [allMessagesForCurrentConversation, setAllMessagesForCurrentConversation] = useState([]);
	const [receiver, setReceiver] = useState(myFriendUsername); // username на получателя

	let currentUserUsername = JSON.parse(localStorage.getItem("user"));

	// Референция към контейнера на съобщенията
	const messagesContainerRef = useRef(null);

	// This is event listener when user try to send me message:
	useEffect(() => {

		showUsersListImgRef.current.style.right = '26.2em';
		if (currentUserUsername) {
			currentUserUsername = currentUserUsername.username;

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

	// Скролиране до дъното на контейнера при обновяване на съобщенията
	useEffect(() => {
		if (messagesContainerRef.current) {
			setTimeout(() => {
				messagesContainerRef.current.scrollTo({
					top: messagesContainerRef.current.scrollHeight,
					behavior: "smooth", // плавен скрол
				});
			}, 500);
		}
	}, [allMessagesForCurrentConversation]);

	// I Send Message logic:
	async function sendMessage(e) {
		debugger;
		e.preventDefault();

		if (messageText.trim()) {
			currentUserUsername = currentUserUsername.username;

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
		debugger;
		let a = mainContainerWrapper.current;

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

		debugger;
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


	return (
		<>
			<article
				ref={mainContainerWrapper}
				className={style["chat-container-wrapper"]}
			>
				<header className={style["username-and-avatar"]}>
					<img
						className={style["current-friend-img"]}
						src={currentFriendData.photoURL}
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

					<img
						onClick={backToUsersListHandler}
						className={style["back-to-users-list"]}
						src={backToUsersList}
						alt="backToUsersList"
					/>
				</header>

				<section
					ref={messagesContainerRef}
					className={style["messages-section"]}
				>


					<p className={style['shadow']}></p>

					<video
						autoPlay
						loop
						muted
						className={style['message-section-wallper-video']}
						src={backgoundVideo} />

					{allMessagesForCurrentConversation.map((msg) => (
						isValidImageUrl(msg.text) ? (
							msg.userName === currentUserUsername.username ? (

								<div className={style['img-message-wrapper-container']}>
									<img
										onClick={showBigImageHandler}
										// onMouseEnter={() => setIsHovered(true)}
										// onMouseLeave={() => setIsHovered(false)}
										value={msg.text} className={style['my-img-message']}
										src={msg.text} alt="my-img-message" key={msg.id}
									/>

									{/* <div className={style['hidden-tag-in-img-messages']}>
										<button onClick={showBigImageHandler}>View</button>
									</div> */}
								</div>

							) : (

								<div className={style['other-img-message-wrapper-container']}>
									<img
										onClick={showBigImageHandler}
										value={msg.text} className={style['other-user-img-message']}
										src={msg.text} alt="my-img-message" key={msg.id}
									/>

									{/* <img value={msg.text} className={style['other-user-img-message']}
										src={msg.text} alt="other-user-img-message" key={msg.id} /> */}

									{/* <div className={style['hidden-tag-in-img-messages']}>
										<button onClick={showBigImageHandler}>View</button>
									</div> */}
								</div>




							)
						) : (
							<li
								className={
									msg.userName === currentUserUsername.username
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

					<button hidden></button>
				</form>
			</article>



		</>
	);
};
