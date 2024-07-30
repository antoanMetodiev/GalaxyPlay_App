import style from "./Chat.module.css";
import { useState, useEffect, useRef } from "react";
import { database, ref, onValue } from "../../../../../firebase/firebase";

import onlineImage from "../../images/online image.png";
import sendImageButton from "../../images/send-icon.png";
import backToUsersList from "../../images/back-to-users-list.png";
import showUserContainer from "../../images/show-user-list-container.png";

export const Chat = ({
	myFriendUsername,
	setShowConcreteChatPermissionHandler,
	showUsersListImgRef,
}) => {
	let [currentFriendData, setCurrentFriendData] = useState({});
	const [messageText, setMessageText] = useState("");
	let mainContainerWrapper = useRef(null);

	// Всички съобщения за конкретната дискусия:
	let [
		allMessagesForCurrentConversation,
		setAllMessagesForCurrentConversation,
	] = useState([]);
	const [receiver, setReceiver] = useState(myFriendUsername); // username на получателя

	let currentUserUsername = JSON.parse(localStorage.getItem("user"));

	// Референция към контейнера на съобщенията
	const messagesContainerRef = useRef(null);

	// This is event listener when user try to send me message:
	useEffect(() => {

		showUsersListImgRef.current.style.right = '26em';
		if (currentUserUsername) {
			currentUserUsername = currentUserUsername.username;

			const messagesRef = ref(
				database,
				`users/${currentUserUsername}/messages/${receiver}`
			);

			const unsubscribe = onValue(messagesRef, (snapshot) => {
				const data = snapshot.val();
				const messagesList = data
					? Object.keys(data).map((key) => ({ id: key, ...data[key] }))
					: [];
				setAllMessagesForCurrentConversation(messagesList);
			});

			// Връщаме функция за почистване на слушателя, когато компонентът се демонтира
			return () => unsubscribe();
		}
	}, [receiver]);

	// Скролиране до дъното на контейнера при обновяване на съобщенията
	useEffect(() => {
		if (messagesContainerRef.current) {
			messagesContainerRef.current.scrollTo({
				top: messagesContainerRef.current.scrollHeight,
				behavior: "smooth", // Плавно скролиране
			});
		}
	}, [allMessagesForCurrentConversation]);

	// I Send Message logic:
	async function sendMessage(e) {
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
					ref={messagesContainerRef} // Добавете референцията тук
					className={style["messages-section"]}
				>
					{allMessagesForCurrentConversation.map((msg) => (
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
					))}
				</section>

				<div className={style["chat-form"]}>
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
				</div>
			</article>
		</>
	);
};
