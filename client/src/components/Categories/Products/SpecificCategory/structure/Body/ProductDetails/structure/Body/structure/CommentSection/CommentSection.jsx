import style from "./CommentSection.module.css";
import { Link } from "react-scroll";
import starsImage from "./images/reviews-stars-image.jpg";
import { CommentsList } from "./structure/CommentsList/CommentsList";
import { CommentForm } from "../CommentSection/structure/CommentForm/CommentForm";
import { useState, useCallback, useEffect, useRef } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const CommentSection = ({ gameDetails }) => {
  const [firstComponentMount, setFirstComponentMount] = useState(true);
  const [comments, setComments] = useState([]);
  let [userData, setUserData] = useState({});
  let renderChildrens = useRef(false);

  const commentForm = useRef();

  const setCommentsHandler = useCallback((newComments) => {
    setComments(newComments);
  }, []);

  const addCommentHandler = useCallback((newComment) => {
    setComments(newComment);
  }, []);

  // GET CURRENT USER DATA:
  const [username, setUsername] = useState("");
  const auth = getAuth();
  if (firstComponentMount) {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsername(user.displayName);
      } else {
        setUsername("");
      }

      setFirstComponentMount(false);
    });
  }
  
//   debugger;

  const showCommentFormHandler = (event) => {
    if (event.target.textContent == "Make Comment") {
      commentForm.current.style.display = "block";
      event.target.textContent = "Hide Comment Form";
      event.target.style.top = "26em";
    } else {
      commentForm.current.style.display = "none";
      event.target.textContent = "Make Comment";
      event.target.style.top = "6em";
    }
  };

  useEffect(() => {
    const getCurrentUserData = async () => {
      try {
        const user = localStorage.getItem("user");
        if (!user) {
          console.error("No user found in localStorage");
          return;
        }

        const username = JSON.parse(user).username;
        const response = await fetch(
          `https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/users/${username}.json`
        );

        if (!response.ok) {
          console.error("Failed to fetch user data");
          return;
        }

        const data = await response.json();
        const userData = Object.values(data);

        renderChildrens.current = true;
        setUserData(userData);
        console.log(userData);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    getCurrentUserData();
  }, []);

  return (
    <>
      {renderChildrens.current && (
        <>
          <article
            id="comment-section-id"
            className={style["comment-section-container"]}
          >
            <h2 className={style["comment-section-title"]}>Comments...</h2>

            <CommentForm
              commentForm={commentForm}
              username={username}
              gameDetails={gameDetails}
              addCommentHandler={addCommentHandler}
              comments={comments}
              showCommentFormHandler={showCommentFormHandler}
              userData={userData[0]}
            />

            <CommentsList
              username={username}
              comments={comments}
              setCommentsHandler={setCommentsHandler}
              gameDetails={gameDetails}
              userData={userData[0]}
            />

            <Link
              to="game-info-id"
              className={style["goTo-game-info"]}
              spy={true}
              smooth={true}
              duration={1300}
              offset={-300}
            >
              <i className="fa-solid fa-angles-up" />
            </Link>
          </article>
        </>
      )}
    </>
  );
};
