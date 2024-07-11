import style from "./CommentItem.module.css";
import profileImage from "../../images/profile-image.png";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import deleteCommentImage from "../../images/remove-comment-image.webp";
import updateCommentImage from "../../images/update-comment-image.png";
import {
  DELETE,
  POST,
  PUT,
} from "../../../../../../../../../../../../../services/service";

export const CommentItem = ({ comment, allComments, setCommentsHandler }) => {
  const location = useLocation();
  const pathName = location.pathname.split("/");
  const gameId = pathName[pathName.length - 1];

  let baseUrl =
  `https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/game/ps5-games/${gameId}/comments`;


  // References:
  const garbageImageRef = useRef();
  const updateImageRef = useRef();
  const updateButtonRef = useRef();
  const textAreaRef = useRef();

  const [deleteImage, setDeleteImage] = useState(false);
  const [isDisabledImage, setisDisabledImage] = useState(true);
  const [isHiddenUpdateButton, setIsHiddenUpdateButton] = useState(true);
  const [initialTextAreaValue, setinitialTextAreaValue] = useState("");

  useEffect(() => {
    // debugger;
    setinitialTextAreaValue(textAreaRef.current.value);
  }, []);

  useEffect(() => {
    const username = JSON.parse(localStorage.getItem("user"));

    if (comment.writer === username.username) {
      garbageImageRef.current.style.display = "block";
      updateImageRef.current.style.display = "block";
      setDeleteImage(true);
      setisDisabledImage(true);
    }

    return () => {};
  }, []);

  const deleteComment = async () => {
    await DELETE(`${baseUrl}/${comment.id}.json`);
    const valueId = comment.id;
    const newArr = allComments.filter((com) => com.id != comment.id);
    setCommentsHandler(newArr);
  };

  function makeUpdatePermission() {
    updateImageRef.current.style.display = "none";
    updateButtonRef.current.style.display = "block";
    setisDisabledImage(false);
    setIsHiddenUpdateButton(false);
  }

  function updateCommentHandler(event) {
    updateButtonRef.current.style.display = "none";
    updateImageRef.current.style.display = "block";
    setisDisabledImage(true);
    setIsHiddenUpdateButton(true);

    const newComment = {
      ...comment,
      text: textAreaRef.current.value,
    };

    PUT(`${baseUrl}/${comment.id}.json`, newComment);
  }

  return (
    <section className={style["comment-container"]}>
      <div className={style["profile-image_name-container"]}>
        <img
          className={style["profile-image"]}
          src={profileImage}
          alt="profile-image"
        />
        <h2 className={style["profile-name"]}>{comment.writer}</h2>
      </div>

      <textarea
        ref={textAreaRef}
        disabled={isDisabledImage}
        className={style["comment-text"]}
      >
        {comment.text}
      </textarea>

      <img
        onClick={deleteComment}
        ref={garbageImageRef}
        src={deleteCommentImage}
        className={style["delete-comment-image"]}
      />

      <img
        onClick={makeUpdatePermission}
        src={updateCommentImage}
        ref={updateImageRef}
        className={style["update-comment-image"]}
      />

      <button
        ref={updateButtonRef}
        onClick={updateCommentHandler}
        className={style["update-button"]}
      >
        Update
      </button>
    </section>
  );
};
