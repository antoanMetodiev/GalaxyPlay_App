import style from "../BigImage/BigImage.module.css";

import { useLocation } from "react-router-dom";

export const BigImage = ({
    bigImageRef,
    currentBigImageRef,
}) => {
    let location = useLocation();

    function hideBigImageRefContainerAgain(event) {
        if (event.target.tagName === 'DIV') {
            
            let paths = location.pathname.split('/');
            paths.shift();

            debugger;
            if (paths[0] === 'categories' && paths[1]) {
                bigImageRef.current.style.height = '124vh';
            } else {
                bigImageRef.current.style.height = '100vh';
            }
            
            
            if ((paths.length == 2) && (paths[0] === 'categories' && paths[1] == 'games')) {
                bigImageRef.current.style.height = '100vh';
            }

            currentBigImageRef.current.src = '';
            bigImageRef.current.style.display = 'none';
        }
    }

    return (
        <div
            onClick={hideBigImageRefContainerAgain}
            ref={bigImageRef}
            className={style['big-image-wrapper']}>
            <img
                ref={currentBigImageRef}
                className={style['big-image']}
                src={""}
                alt="big-image"
            />v
        </div>
    );
}