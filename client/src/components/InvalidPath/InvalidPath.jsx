import style from "../InvalidPath/InvalidPath.module.css";

import backImage from "./images/lost-in-money.jpg";


export const InvalidPath = () => {


    return (
        <>
            {/* LMAOOO */}
            <img className={style['back-image']} src={backImage} alt="labirinth-lost" />
            <h1 className={style['invalid-text']}>You navigated to an Invalid URL !</h1>
            <img src="" alt="" />
        </>
    );
}