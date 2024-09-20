import style from "./GameReviewItem.module.css";

import { LikesAndComments } from "./structure/LikesAndComments/LikesAndComments";
import { Details } from "./structure/Details/Details";
import { useState } from "react";
import { AllComments } from "./structure/LikesAndComments/AllComments/AllComments";

export const GameReviewItem = ({
    rewiew,
    allReviewsList,
    setAllReviewsListHandler,
}) => {

    // console.log(rewiew);
    let [showDetails, setShowDetails] = useState(false);
    let [showComments, setShowComments] = useState(false);

    function openDetailsHandler(event) {
        let childrens = event.currentTarget.children;

        if (showDetails === false) {
            // debugger;
            childrens[0].textContent = 'Hide Details';
            childrens[1].classList.remove('fa-arrow-down');
            childrens[1].classList.add('fa-arrow-up');
            setShowDetails(true);
        } else {
            // debugger;
            childrens[0].textContent = 'Open Details';
            childrens[1].classList.remove('fa-arrow-up');
            childrens[1].classList.add('fa-arrow-down');
            setShowDetails(false);
        }
    };


    function showCommentsHandler(value) {
        setShowComments(value);
    };


    return (
        <div className={style['main-wrapper']}>
            <article className={style['rewiew-container']}>

                <img className={style['game-review-img']} src={rewiew.imgCoverUrl} alt="game-review-img" loading="lazy"/>

                <div className={style['content']}>

                    <h2 className={style['game-title-name']}>{rewiew.gameTitleName}</h2>

                    <section className={style[['table-item']]}>

                        <section className={style['row']}>
                            <div>
                                <h3>Genres:</h3>
                                <p>{rewiew.genres}</p>
                            </div>
                            <div>
                                <h3>Developers:</h3>
                                <p>{rewiew.developers}</p>
                            </div>
                            <div>
                                <h3>Release Date:</h3>
                                <p>{rewiew.releaseDate}</p>
                            </div>
                        </section>

                        <section className={style['row']}>
                            <div>
                                <h3>Franchises:</h3>
                                <p>{rewiew.franchises}</p>
                            </div>
                            <div>
                                <h3>Publishers:</h3>
                                <p>{rewiew.publishers}</p>
                            </div>
                            <div>
                                <h3>Platforms:</h3>
                                <p>{rewiew.platforms}</p>
                            </div>
                        </section>
                    </section>


                    <div onClick={openDetailsHandler} className={style['open-details-container']}>
                        <h3>Open Details</h3>
                        <i className="fa-solid fa-arrow-down" />
                    </div>
                </div>
            </article>



            {/* Here: */}
            {showDetails && <Details rewiew={rewiew} />}

            <LikesAndComments
                rewiew={rewiew}
                showComments={showComments}
                showCommentsHandler={showCommentsHandler}
                allReviewsList={allReviewsList}
                setAllReviewsListHandler={setAllReviewsListHandler}
            />

            {showComments && <AllComments rewiew={rewiew} />}

        </div>
    );
}