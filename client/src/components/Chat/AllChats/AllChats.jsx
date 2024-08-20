import { Chat } from "./structure/Chat/Chat";
import style from "../AllChats/AllChats.module.css";
import { useContext, useEffect, useRef, useState } from "react";

import { SearchEngine } from "./structure/SearchEngine/SearchEngine";
import showUserContainer from "../AllChats/images/show-user-list-container.webp";

import { AllAvatarsContext } from "../../../contexts/allAvatarsContext";

export const AllChats = ({
	bigImageRef,
	showBigImage,
	currentBigImageRef,
}) => {
	let [allChatUsers, setAllChatUsers] = useState({});
	let [filteredUsers, setFilteredUsers] = useState({});
	let [showConcreteChatPermission, setShowConcreteChatPermission] = useState(false);
	let myUsername = JSON.parse(localStorage.getItem("user")).username;
	let [myFriendUsername, setmyFriendUsername] = useState("");
	let [showUsersList, setShowUsersList] = useState(false);


	let { allAvatarsReversed } = useContext(AllAvatarsContext);


	function setFilteredUsersHandler(value) {
		setFilteredUsers(value);
	}


	useEffect(() => {
		let getAllChatUsers = async () => {
			try {
				let result = await fetch(
					"https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/chatUsers.json"
				);

				if (!result.ok) {
					throw new Error("Network response was not ok");
				}

				result = await result.json();

				result = Object.fromEntries(
					Object.entries(result).filter(([key]) => key !== myUsername)
				);
				setAllChatUsers(result);
			} catch (error) {
				console.error("Fetch error:", error);
			}
		};

		getAllChatUsers();
	}, [myUsername]);

	// Преобразуване на обектите в масив от потребители
	const chatUsersArray = Object.values(allChatUsers).flatMap((user) =>
		Object.values(user)
	);

	let filteredChatUsersArray = Object.values(filteredUsers).flatMap((user) =>
		Object.values(user)
	);

	function openMessagesWithConcreteUser(event) {
		debugger;
		setFilteredUsers({});
		setmyFriendUsername(event.currentTarget.dataset.username);
		setShowConcreteChatPermission(true);
	}

	function setShowConcreteChatPermissionHandler() {
		setShowConcreteChatPermission(false);
	}

	function showUsersListHandler(event) {
		setFilteredUsers({});
		if (!showUsersList) {
			event.target.style.right = "23.1em";
		} else {
			event.target.style.right = "1.8em";
		}

		setShowUsersList(showUsersList ? false : true);
	};


	let showUsersListImgRef = useRef(null);
	return (
		<>
			<img
				ref={showUsersListImgRef}
				onClick={showUsersListHandler}
				className={style["show-users-list-img"]}
				src={showUserContainer}
				alt="showUserContainer"
			/>

			{showUsersList && (
				<article className={style["wrapper-all-GalaxyPlay-users"]}>
					{!showConcreteChatPermission && (
						<section className={style["all-GalaxyPlay-users"]}>

							<SearchEngine
								allChatUsers={allChatUsers}
								setFilteredUsersHandler={setFilteredUsersHandler}
							/>

							{chatUsersArray.length > 0 && (filteredChatUsersArray.length > 0
								? filteredChatUsersArray : chatUsersArray)
								.map((chatUser, index) => (
									<div
										data-username={chatUser.username}
										onClick={openMessagesWithConcreteUser}
										value={chatUser.username}
										key={index}
										className={style["chat-user-item"]}
									>
										<img
											src={allAvatarsReversed[chatUser.photoURL]}
											alt={`${chatUser.username}'s profile`}
										/>
										<p>{chatUser.username}</p>
									</div>
								))}
						</section>
					)}

					{showConcreteChatPermission && (
						<>
							<Chat
								currentBigImageRef={currentBigImageRef}
								showBigImage={showBigImage}
								bigImageRef={bigImageRef}
								myFriendUsername={myFriendUsername}
								setShowConcreteChatPermissionHandler={setShowConcreteChatPermissionHandler}
								showUsersListImgRef={showUsersListImgRef}
							/>
						</>
					)}
				</article>)}
		</>
	);
};
