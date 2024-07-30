
import style from "../CommentItem/CommentItem.module.css";

import deleteImage from "../../../../../../../images/delete-comment.png";
import updateCommentImage from "../../../../../../../images/update-comment-image.png";
import { useEffect, useRef, useState } from "react";

export const CommentItem = ({
    commentObj,
    rewiew,

    allComments,
    setAllCommentsHandler,
}) => {

    const [isDisabledImage, setIsDisabledImage] = useState(true);
    let myUsername = JSON.parse(localStorage.getItem('user')).username;

    // References for Update Logic:
    let textAreaRef = useRef(null);
    let updateImageRef = useRef(null);
    let updateButtonRef = useRef(null);

    useEffect(() => {
        if (commentObj.username === myUsername) {
            updateImageRef.current.style.display = 'block';
        }
    }, []);

    async function deleteCommentHandler(event) {
        await fetch(`https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/reviews/${rewiew.id}/comments/${commentObj.id}.json`, {
            method: 'DELETE',
        });

        let newObj = {};
        for (const key in allComments) {
            if (key !== commentObj.id) {
                newObj[key] = allComments[key];
            }
        }

        setAllCommentsHandler(newObj);
    };

    function makeUpdatePermission() {
        updateImageRef.current.style.display = 'none';
        updateButtonRef.current.style.display = 'block';
        setIsDisabledImage(false);
    };

    function updateCommentHandler() {
        // debugger;
        updateButtonRef.current.style.display = 'none';
        updateImageRef.current.style.display = 'block';

        let random = textAreaRef.current.value;
        commentObj.text = textAreaRef.current.value;

        fetch(`https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/reviews/${rewiew.id}/comments/${commentObj.id}.json`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(commentObj),
        });

        setIsDisabledImage(true);
    };

    return (
        <section
            // style={{ backgroundColor: comment.gender === 'Female' ? 'pink' : '#87CEEB' }}
            className={style["comment-item"]}>
            <div className={style["profile-image_name-container"]}>
                <img
                    className={style["user-image"]}
                    src={commentObj.image}
                    alt="user-image"
                />
                <h2 className={style["username"]}>{commentObj.username}</h2>
            </div>

            <textarea
                ref={textAreaRef}
                disabled={isDisabledImage}
                className={style["comment-text"]}
            >
                {commentObj.text}
            </textarea>

            <img
                onClick={deleteCommentHandler}
                src={deleteImage}
                style={{ display: commentObj.username === myUsername ? 'block' : 'none' }}
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
}