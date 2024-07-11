import style from "./CommentSection.module.css";
import starsImage from "./images/reviews-stars-image.jpg";
import { CommentsList } from "./structure/CommentsList/CommentsList";
import { CommentForm } from "../CommentSection/structure/CommentForm/CommentForm";
import { useState, useCallback, useEffect, useRef } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const CommentSection = ({ gameDetails }) => {
    const [firstComponentMount, setFirstComponentMount] = useState(true);
    const [comments, setComments] = useState([]);

    const commentForm = useRef();

    const setCommentsHandler = useCallback((newComments) => {
        setComments(newComments);
    }, []);

    const addCommentHandler = useCallback((newComment) => {
        setComments(newComment);
    }, []);


    // GET CURRENT USER DATA:
    const [username, setUsername] = useState("");
    const auth = getAuth()
    if (firstComponentMount) {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsername(user.displayName);
            } else {
                setUsername("");
            }

            setFirstComponentMount(false);
        });
    };

    const showCommentFormHandler = (event) => {
        if (event.target.textContent == 'Make Comment') {
            commentForm.current.style.display = 'block';
            event.target.textContent = 'Hide Comment Form';
            event.target.style.top = '26em';
        } else {

            commentForm.current.style.display = 'none';
            event.target.textContent = 'Make Comment';
            event.target.style.top = '6em';
        }
    };

    return (
        <article className={style['comment-section-container']}>
            <h2 className={style['comment-section-title']}>Comments...</h2>

            <CommentForm
            commentForm={commentForm}
            username={username}
            gameDetails={gameDetails}
            addCommentHandler={addCommentHandler}
            comments={comments}
            showCommentFormHandler={showCommentFormHandler}
            />

            <CommentsList 
            username={username}
            comments={comments} 
            setCommentsHandler={setCommentsHandler} 
            gameDetails={gameDetails} />

            
        </article>
    );
};
