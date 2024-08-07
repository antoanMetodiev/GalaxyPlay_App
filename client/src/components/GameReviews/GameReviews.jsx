import { useEffect, useRef, useState } from "react";
import style from "../GameReviews/GameReviews.module.css";
import marsWallper from "../GameReviews/images/creative-mars.webp";

import { GameReviewItem } from "./structure/GameReviewItem/GameReviewItem";
import { SearchEngine } from "./structure/SearchEngine/SearchEngine";
import { Filter } from "./structure/Filter/Filter";
import { Header } from "../GameReviews/structure/Header/Header";
import { CreateReview } from "./structure/CreateReview/CreateReview";
import { DeleteReview } from "./structure/DeleteReview/DeleteReview";
import { UpdateReview } from "./structure/UpdateReview/UpdateReview";

export const GameReviews = () => {
    let [allReviewsList, setAllReviewsList] = useState({});
    let [filteredReviewsByInputList, setFilteredReviewsByInputList] = useState({});
    const [filteredReviewsBySelectList, setFilteredReviewsBySelectList] = useState([]);

    // References:
    let crudContainer = useRef(null);
    let createReviewModalRef = useRef(null);
    let deleteReviewModalRef = useRef(null);
    let updateReviewModalRef = useRef(null);

    useEffect(() => {
        let getReviews = async () => {
            let responce = await fetch('https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/reviews.json');

            // debugger;
            responce = await responce.json();
            let result = {};

            responce = Object.keys(responce).reverse().forEach(key => {
                let random = responce[key];
                random.id = key;
                result[key] = random;
            });

            setAllReviewsList(result);
        }

        getReviews();

    }, []);

    // Create Review:
    async function createReviewHandler(event) {
        event.preventDefault();
        let review = {
            gameTitleName: event.target.gameTitleName.value,
            genres: event.target.genres.value,
            imgCoverUrl: event.target.imgCoverUrl.value,
            otherImages: event.target.otherImages.value,
            description: event.target.description.value,
            platforms: event.target.platforms.value,
            developers: event.target.developers.value,
            publishers: event.target.publishers.value,
            releaseDate: event.target.releaseDate.value,
            franchises: event.target.franchises.value,
            trailer: event.target.trailer.value,
            gameplay: event.target.gameplay.value,
        };

        event.target.reset();
        // debugger;

        let responce = await fetch('https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/reviews.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review),
        }).catch(err => new Error(err));

        responce = await responce.json();
        review.id = responce.name;
        let key = responce.name;
        let value = Object.fromEntries(Object.entries(review));

        setAllReviewsList({ [key]: value, ...allReviewsList });
    };



    // Delete Review:
    async function deleteReviewHandler(event) {
        event.preventDefault();

        // debugger;
        let gameForRemove = event.currentTarget.gameTitleName.value;
        let gameId = '';

        let objectAfterDeletedGame = {};
        for (const key in allReviewsList) {
            if (allReviewsList[key].gameTitleName !== gameForRemove) {
                objectAfterDeletedGame[key] = allReviewsList[key];
            } else {
                gameId = allReviewsList[key].id;
            }
        }

        setAllReviewsList(objectAfterDeletedGame);

        if (gameId.trim().length > 0) {
            await fetch(`https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/reviews/${gameId}.json`, {
                method: 'DELETE',
            });
        }
    }

    async function updateReviewHandler(event) {
        event.preventDefault();

        let oldReview = {};    // This is The Old Review:
        let oldReviewKey = '';
        for (const key in allReviewsList) {
            if (allReviewsList[key].gameTitleName === event.currentTarget.gameTitleNameForUpdate.value) {
                oldReview[key] = allReviewsList[key];
                oldReviewKey = key
            }
        }

        // debugger;

        // fun fact: Dobre che e Alt + Right Click:
        let updatedReview = {
            gameTitleName: event.target.newGameTitleName.value.trim().length == 0 ? oldReview[oldReviewKey].gameTitleName : event.target.newGameTitleName.value,
            genres: event.target.genres.value.trim().length == 0 ? oldReview[oldReviewKey].genres : event.target.genres.value,
            imgCoverUrl: event.target.imgCoverUrl.value.trim().length == 0 ? oldReview[oldReviewKey].imgCoverUrl : event.target.imgCoverUrl.value,
            otherImages: event.target.otherImages.value.trim().length == 0 ? oldReview[oldReviewKey].otherImages : event.target.otherImages.value,
            description: event.target.description.value.trim().length == 0 ? oldReview[oldReviewKey].description : event.target.description.value,
            platforms: event.target.platforms.value.trim().length == 0 ? oldReview[oldReviewKey].platforms : event.target.platforms.value,
            developers: event.target.developers.value.trim().length == 0 ? oldReview[oldReviewKey].developers : event.target.developers.value,
            publishers: event.target.publishers.value.trim().length == 0 ? oldReview[oldReviewKey].publishers : event.target.publishers.value,
            releaseDate: event.target.releaseDate.value.trim().length == 0 ? oldReview[oldReviewKey].releaseDate : event.target.releaseDate.value,
            franchises: event.target.franchises.value.trim().length == 0 ? oldReview[oldReviewKey].franchises : event.target.franchises.value,
            trailer: event.target.trailer.value.trim().length == 0 ? oldReview[oldReviewKey].trailer : event.target.trailer.value,
            gameplay: event.target.gameplay.value.trim().length == 0 ? oldReview[oldReviewKey].gameplay : event.target.gameplay.value,
        };


        // Update Request is Heree:
        let response = await fetch(`https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/reviews/${oldReviewKey}.json`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedReview),
        });

        response = await response.json();

        if (response) {
            updatedReview.id = oldReviewKey;

            let newObject = { ...allReviewsList };
            newObject[oldReviewKey] = updatedReview;

            setAllReviewsList(newObject);
        }

        event.target.reset();
    };



    // Functions About show Create/Delete/Update Modals:
    function showCreateReviewPermission() {
        if (createReviewModalRef.current.style.display === 'none' || createReviewModalRef.current.style.display === '') {
            window.scrollTo(0, 0);
            deleteReviewModalRef.current.style.display = 'none';
            updateReviewModalRef.current.style.display = 'none';
            createReviewModalRef.current.style.display = 'block';
        } else {
            createReviewModalRef.current.style.display = 'none';
        }
    };

    function showDeleteReviewPermission() {
        if (deleteReviewModalRef.current.style.display === 'none' || deleteReviewModalRef.current.style.display === '') {
            window.scrollTo(0, 0);
            createReviewModalRef.current.style.display = 'none';
            updateReviewModalRef.current.style.display = 'none';
            deleteReviewModalRef.current.style.display = 'block';
        } else {
            deleteReviewModalRef.current.style.display = 'none';
        }
    };

    function showUpdateReviewPermission() {
        if (updateReviewModalRef.current.style.display === 'none' || updateReviewModalRef.current.style.display === '') {
            window.scrollTo(0, 0);
            deleteReviewModalRef.current.style.display = 'none';
            createReviewModalRef.current.style.display = 'none';
            updateReviewModalRef.current.style.display = 'block';
        } else {
            updateReviewModalRef.current.style.display = 'none';
        }
    }


    // Functions About Filters:
    function setFilteredReviewsListHandler(value) {
        setFilteredReviewsByInputList(value);
    };

    function setFilteredReviewsBySelectListHandler(value) {
        setFilteredReviewsBySelectList(value);
    };

    function setAllReviewsListHandler(value) {
        setAllReviewsList(value);
    };

    function showCrudOperationsHandler() {
        if (crudContainer.current.style.display === 'none' || crudContainer.current.style.display === '') {
            crudContainer.current.style.display = 'block';
        } else {
            crudContainer.current.style.display = 'none';
        }
    };


    return (
        <>

            <Header />

            <img className={style['wallper-image']} src={marsWallper} alt="wallper" />

            <SearchEngine
                allReviewsList={allReviewsList}
                setFilteredReviewsByInputList={setFilteredReviewsByInputList}
            />

            {/* Create, Delete, Udpate - Review: */}

            <button
                className={style['show-crud-operations-button']}
                onClick={showCrudOperationsHandler}>CRUD</button>

            <div ref={crudContainer} className={style['crud-operations-container']}>
                <button
                    onClick={showCreateReviewPermission}
                    className={style['make-review-button']}
                >Create Review</button>

                <button
                    onClick={showDeleteReviewPermission}
                    className={style['delete-review-button']}
                >Delete Review</button>

                <button
                    onClick={showUpdateReviewPermission}
                    className={style['update-review-button']}
                >Update Review</button>
            </div>


            {/* Filter Reviews */}
            <Filter
                allReviewsList={allReviewsList}
                setFilteredReviewsBySelectListHandler={setFilteredReviewsBySelectListHandler}
            />


            <article className={style['main-wrapper']}>
                <CreateReview
                    createReviewModalRef={createReviewModalRef}
                    createReviewHandler={createReviewHandler}
                />

                <DeleteReview
                    deleteReviewModalRef={deleteReviewModalRef}
                    deleteReviewHandler={deleteReviewHandler}
                />

                <UpdateReview
                    updateReviewModalRef={updateReviewModalRef}
                    updateReviewHandler={updateReviewHandler}
                />


                <div className={style['all-reviews-wrapper']}>
                    {/* Example Review */}
                    <section className={style['all-reviews-container']}>

                        {filteredReviewsBySelectList.length > 0 ?
                            filteredReviewsBySelectList.map(game => {
                                return <GameReviewItem
                                    key={game.id}
                                    rewiew={game}
                                    allReviewsList={allReviewsList}
                                    setAllReviewsListHandler={setAllReviewsListHandler}
                                />
                            })

                            :
                            Object.keys(allReviewsList).length > 0 &&

                            Object.keys(Object.keys(filteredReviewsByInputList).length > 0 ?
                                filteredReviewsByInputList : allReviewsList
                            ).map(key => <GameReviewItem key={key}
                                rewiew={allReviewsList[key]}
                                allReviewsList={allReviewsList}
                                setAllReviewsListHandler={setAllReviewsListHandler}
                            />)
                        }
                    </section>
                </div>
            </article>
        </>
    );
}