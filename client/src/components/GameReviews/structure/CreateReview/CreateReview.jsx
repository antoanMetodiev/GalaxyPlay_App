
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
                        <input type="text" name="gameTitleName" id="gameTitleName" />
                    </div>

                    <div>
                        <label htmlFor="genres">Genres</label>
                        <input type="text" name="genres" id="genres" />
                    </div>

                    <div>
                        <label htmlFor="imgCoverUrl">Img Cover Url</label>
                        <input type="text" name="imgCoverUrl" id="imgCoverUrl" />
                    </div>

                    <div>
                        <label htmlFor="otherImages">Other Images</label>
                        <input type="text" name="otherImages" id="otherImages" />
                    </div>

                    <div>
                        <label htmlFor="description">Description Text</label>
                        <input type="text" name="description" id="description" />
                    </div>

                    <div>
                        <label htmlFor="trailer">Trailer</label>
                        <input type="text" name="trailer" id="trailer" />
                    </div>
                </section>

                <section>
                    <div>
                        <label htmlFor="platforms">Platforms</label>
                        <input type="text" name="platforms" id="platforms" />
                    </div>

                    <div>
                        <label htmlFor="developers">Developers</label>
                        <input type="text" name="developers" id="developers" />
                    </div>

                    <div>
                        <label htmlFor="publishers">Publishers</label>
                        <input type="text" name="publishers" id="publishers" />
                    </div>

                    <div>
                        <label htmlFor="releaseDate">Release Date</label>
                        <input type="text" name="releaseDate" id="releaseDate" />
                    </div>

                    <div>
                        <label htmlFor="franchises">Franchises</label>
                        <input type="text" name="franchises" id="franchises" />
                    </div>

                    <div>
                        <label htmlFor="gameplay">GamePlay Video</label>
                        <input type="text" name="gameplay" id="gameplay" />
                    </div>
                </section>

                <button className={style['create-review-button']}>Create Review</button>
            </form>
        </article>

    );
}