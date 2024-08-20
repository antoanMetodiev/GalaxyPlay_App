import { useState, useEffect } from "react";
import style from "../InvalidPath/InvalidPath.module.css";
import backImage from "./images/lost-in-money.webp";
import { useLocation } from "react-router-dom";

import { validPaths } from "../../utils/validPaths";

export const InvalidPath = ({
    logStatus,
}) => {
    let location = useLocation();

    return (
        <>
            {logStatus && !validPaths.includes(location.pathname) && (
                <>
                    <img className={style['back-image']} src={backImage} alt="labirinth-lost" />
                    <h1 className={style['invalid-text']}>You navigated to an Invalid URL!</h1>
                </>
            )}
        </>
    );
};
