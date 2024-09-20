
import style from "../../GameReviews.module.css";

export const DeleteReview = ({
    deleteReviewModalRef,
    deleteReviewHandler
}) => {


    return (

        <article
            ref={deleteReviewModalRef}
            className={`${style['create-reviews-wrapper']} ${style['delete-reviews-wrapper']}`}
        >

            <form
                onSubmit={deleteReviewHandler}
                className={style['create-reviews-container']}>

                <section>
                    <div>
                        <label htmlFor="gameTitleName">Game Title Name</label>
                        <input type="text" name="gameTitleName" id="gameTitleName" required/>
                    </div>
                </section>

                <button className={style['create-review-button']}>Delete Review</button>
            </form>
        </article>
    );
}