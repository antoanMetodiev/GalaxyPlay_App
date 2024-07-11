import { useEffect, useState } from "react";
import profileImage from "../../images/profile-image.png";
import style from "./CommentForm.module.css";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
import { POST } from "../../../../../../../../../../../../../services/service";
import { useLocation } from "react-router-dom";

const baseUrl = `https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/game/ps5-games`;

export const CommentForm = ({
  gameDetails,
  addCommentHandler,
  username,
  setUsername,
  comments,
  commentForm,
  showCommentFormHandler,
}) => {
  const [comment, setComment] = useState("");

  const location = useLocation();
  const pathName = location.pathname.split("/");
  const gameId = pathName[pathName.length - 1];

  const makeCommentHandler = async (event) => {
    event.preventDefault();
    const newComment = { writer: username, text: comment };

    try {
      const url = `${baseUrl}/${gameId}/comments.json`;

      const generatedId = await POST(
        `${baseUrl}/${gameId}/comments.json`,
        newComment
      );
      newComment.id = generatedId.name;
      addCommentHandler([newComment, ...comments]);
      setComment("");
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  return (
    <>
      <article className={style['main-wrapper']}>
        <div
          className={style["comment-formWrapper-container"]}
          ref={commentForm}
        >
          <h2 className={style["add-comment-request-h2"]}>Add Comment...</h2>

          <article className={style["article-container"]}>
            <div className={style["profile-image_name-container"]}>
              <img
                className={style["profile-image"]}
                src={profileImage}
                alt="profile-image"
              />
              <h2 className={style["profile-name"]}>{username}</h2>
            </div>

            <form
              className={style["comment-container"]}
              onSubmit={makeCommentHandler}
            >
              <textarea
                placeholder="Add Comment..."
                className={style["comment-text"]}
                name="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>

              <div className={style["button-container"]}>
                <button type="submit">Comment</button>
              </div>
            </form>
          </article>
        </div>

        <button
          onClick={showCommentFormHandler}
          className={style["make-comment-button"]}
        >
          Make Comment
        </button>
      </article>
    </>
  );
};
