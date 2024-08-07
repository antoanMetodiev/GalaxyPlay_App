import { useState, useEffect } from "react";
import style from "../InvalidPath/InvalidPath.module.css";
import backImage from "./images/lost-in-money.jpg";
import { useLocation } from "react-router-dom";

export const InvalidPath = ({

}) => {
    let location = useLocation();
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    console.log(location.pathname);

    return (
        <>
            {showContent && (location.pathname !== '/' && location.pathname !== '') && (
                <>
                    <img className={style['back-image']} src={backImage} alt="labirinth-lost" />
                    <h1 className={style['invalid-text']}>You navigated to an Invalid URL!</h1>
                </>
            )}
        </>
    );
};
