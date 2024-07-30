import style from "../../Details.module.css";

export const Description = ({
    rewiew,
}) => {

    // Images: 
    const otherImagesUrls = rewiew.otherImages.split(', ');

    // desc text: 
    let descText = rewiew.description.split(',# ');

    return (


        <article className={style['description-container']}>
            <h2>Description</h2>
            
            <p>{descText[0]}</p>
            <img className={style['desc-image']} src={otherImagesUrls[0]} alt="img" />

            <p>{descText[1]}</p>
            <img className={style['desc-image']} src={otherImagesUrls[1]} alt="img" />

            <p>{descText[2]}</p>
            <img className={style['desc-image']} src={otherImagesUrls[2]} alt="img" />
        </article>
    );
}