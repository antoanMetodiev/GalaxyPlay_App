import { Chat } from "./structure/Chat/Chat";
import style from "../AllChats/AllChats.module.css";
import { useEffect, useRef, useState } from "react";

import showUserContainer from "../AllChats/images/show-user-list-container.png";

export const AllChats = () => {
  let [allChatUsers, setAllChatUsers] = useState({});
  let [showConcreteChatPermission, setShowConcreteChatPermission] =useState(false);
  let myUsername = JSON.parse(localStorage.getItem("user")).username;
  let [myFriendUsername, setmyFriendUsername] = useState("");
  const [showUsersList, setShowUsersList] = useState(false);

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

        console.log("Fetched Data:", result);

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

  function openMessagesWithConcreteUser(event) {
    debugger;
    setmyFriendUsername(event.currentTarget.dataset.username);
    setShowConcreteChatPermission(true);
  }

  function setShowConcreteChatPermissionHandler() {
    setShowConcreteChatPermission(false);
  }

  function showUsersListHandler(event) {

    debugger;
    if (!showUsersList) {
      event.target.style.right = "24em";
    } else {
      event.target.style.right = "2em";
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
            {chatUsersArray.length > 0 &&
              chatUsersArray.map((chatUser, index) => (
                <div
                  data-username={chatUser.username}
                  onClick={openMessagesWithConcreteUser}
                  value={chatUser.username}
                  key={index}
                  className={style["chat-user-item"]}
                >
                  <img
                    src={chatUser.photoURL}
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
