
import { useEffect, useState } from "react";
import style from "../AllComments/AllComments.module.css";
import { CommentItem } from "./structure/CommentItem/CommentItem";

export const AllComments = ({
    rewiew,
}) => {
    let [allComments, setAllComments] = useState({});
    let user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {

        let initialObject = {};

        const getComments = async () => {
            let responce = await fetch(`https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/reviews/${rewiew.id}/comments/.json`);
            responce = await responce.json();

            Object.keys(responce).reverse().forEach(key => {
                initialObject[key] = responce[key];
                initialObject[key].id = key;
            });

            console.log(initialObject);
            setAllComments(initialObject);
        }

        getComments();
    }, []);


    function makeCommentHandler(event) {
        event.preventDefault()

        let makeComment = async () => {

            let makedObj = {
                image: user.photoUrl,
                username: user.username,
                text: event.currentTarget.commentText.value,
            };
            event.currentTarget.commentText.value = '';

            let responce = await fetch(`https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/reviews/${rewiew.id}/comments/.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(makedObj),
            });

            let newObj = {...allComments};
            responce = await responce.json();
            newObj[responce.name] = makedObj;

            let reversedObj = {};
            Object.keys(newObj).reverse().forEach(key => {
                reversedObj[key] = newObj[key];
                reversedObj[key].id = key;
            });

            setAllComments(reversedObj);
        };

        makeComment();
    };

    
    function setAllCommentsHandler(value) {
        setAllComments(value);
    }


    let exp = allComments ? Object.keys(allComments).length : 'nqma';
    return (

        <article className={style['main-comment-wrapper']}>

            {/* // Make Comment: */}
            <form onSubmit={makeCommentHandler} className={style['make-comment-container']}>
                <img className={style['user-image']} src={user.photoUrl} alt="user-image" />
                <input name="commentText" type="text" placeholder="Write Something..." />
                <button>Post</button>
            </form>


            <section className={style['all-comments-container']}>

                {exp > 0 &&
                    Object.keys(allComments).map(commentKey => {
                        return <CommentItem key={commentKey} 
                        commentObj={allComments[commentKey]}
                        rewiew={rewiew}
                        allComments={allComments}
                        setAllCommentsHandler={setAllCommentsHandler}
                        />
                    })
                }
            </section>
        </article>
    );
};