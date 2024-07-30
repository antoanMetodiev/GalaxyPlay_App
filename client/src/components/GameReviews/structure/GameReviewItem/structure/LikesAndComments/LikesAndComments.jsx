
import { useEffect, useRef, useState } from "react";
import style from "./LikesAndComments.module.css";

export const LikesAndComments = ({
    rewiew,
    showComments,
    showCommentsHandler,
    allReviewsList,
    setAllReviewsListHandler,
}) => {
    let [likesCount, setLikesCount] = useState(rewiew.likes ? Object.keys(rewiew.likes).length : 0);

    let myUsername = JSON.parse(localStorage.getItem('user')).username;

    // Refs:
    let likeIconRef = useRef(null);

    useEffect(() => {
        if (rewiew.likes && Object.keys(rewiew.likes).includes(myUsername)) {
            likeIconRef.current.style.color = 'blue';
        }
    }, [])


    // Like Review Logic:
    async function likeUnlikeReviewHandler(event) {

        debugger;
        if (likeIconRef.current.style.color === 'blue') {

            likeIconRef.current.style.color = 'unset';
            await fetch(`https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/reviews/${rewiew.id}/likes/${myUsername}.json`, {
                method: 'DELETE',
            });

            debugger;
            let newObject = { ...allReviewsList };
            let newLikeList = {};

            debugger;
            let currentLikeList = newObject[rewiew.id].likes;
            for (const currentKey in currentLikeList) {
                if (currentKey !== myUsername) {
                    newLikeList[currentKey] = currentLikeList[currentKey];
                }
            }

            newObject[rewiew.id].likes = newLikeList;

            setLikesCount(likesCount - 1);
            setAllReviewsListHandler(newObject);

        } else {

            likeIconRef.current.style.color = 'blue';
            let response = await fetch(`https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/reviews/${rewiew.id}/likes/${myUsername}.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    liker: myUsername,
                })
            });

            response = await response.json();

            debugger;
            let newObject = { ...allReviewsList };
            newObject[rewiew.id].likes = {...newObject[rewiew.id].likes, [myUsername]: {[response.name]: {
                liker: myUsername,
            }}}

            setLikesCount(likesCount + 1);
            setAllReviewsListHandler(newObject);
        }
    };


    function invokeShowCommentsHandler() {
        debugger;
        if (showComments) {
            showCommentsHandler(false);
        } else {
            showCommentsHandler(true);
        }
    }


    return (

        <form className={style['comments-from']}>

            <span className={style['likes-count']}>{likesCount}</span>

            <div ref={likeIconRef} onClick={likeUnlikeReviewHandler}>
                <i className="fa-solid fa-thumbs-up" />
                <h2>Like</h2>
            </div>

            <div onClick={invokeShowCommentsHandler}>
                <i className="fa-solid fa-message" />
                <h2>Comments</h2>
            </div>
            <div>
                <i className="fa-solid fa-paper-plane" />
                <h2>Send</h2>
            </div>

        </form>

    );
}