
import style from "../../GameReviews.module.css";

export const CreateReview = ({
    createReviewHandler,
    createReviewModalRef,
}) => {


    return (

        <article
            ref={createReviewModalRef}
            className={style['create-reviews-wrapper']}>

            <form
                onSubmit={createReviewHandler}
                className={style['create-reviews-container']}>

                <section>
                    <div>
                        <label htmlFor="gameTitleName">Game Title Name</label>
                        <input type="text" name="gameTitleName" id="gameTitleName" required/>
                    </div>

                    <div>
                        <label htmlFor="genres">Genres</label>
                        <input type="text" name="genres" id="genres" required/>
                    </div>

                    <div>
                        <label htmlFor="imgCoverUrl">Img Cover Url</label>
                        <input type="text" name="imgCoverUrl" id="imgCoverUrl" required/>
                    </div>

                    <div>
                        <label htmlFor="otherImages">Other Images</label>
                        <input type="text" name="otherImages" id="otherImages" required/>
                    </div>

                    <div>
                        <label htmlFor="description">Description Text</label>
                        <input type="text" name="description" id="description" required/>
                    </div>

                    <div>
                        <label htmlFor="trailer">Trailer</label>
                        <input type="text" name="trailer" id="trailer" required/>
                    </div>
                </section>

                <section>
                    <div>
                        <label htmlFor="platforms">Platforms</label>
                        <input type="text" name="platforms" id="platforms" required/>
                    </div>

                    <div>
                        <label htmlFor="developers">Developers</label>
                        <input type="text" name="developers" id="developers" required/>
                    </div>

                    <div>
                        <label htmlFor="publishers">Publishers</label>
                        <input type="text" name="publishers" id="publishers" required/>
                    </div>

                    <div>
                        <label htmlFor="releaseDate">Release Date</label>
                        <input type="text" name="releaseDate" id="releaseDate" required/>
                    </div>

                    <div>
                        <label htmlFor="franchises">Franchises</label>
                        <input type="text" name="franchises" id="franchises" required/>
                    </div>

                    <div>
                        <label htmlFor="gameplay">GamePlay Video</label>
                        <input type="text" name="gameplay" id="gameplay" required/>
                    </div>
                </section>

                <button className={style['create-review-button']}>Create Review</button>
            </form>
        </article>

    );
}