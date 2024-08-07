import { useNavigate } from "react-router-dom";
import style from "../Header/Header.module.css";
import LastLogo from "../../images/new-logo.webp";

import { Link } from "react-router-dom";

import Cookies from "js-cookie";

import { AllAvatarsContext } from "../../../../contexts/allAvatarsContext";
import { useContext } from "react";

export const Header = () => {
    let navigate = useNavigate();

    let { allAvatars, allAvatarsReversed } = useContext(AllAvatarsContext);
    let userImage = JSON.parse(localStorage.getItem('user')).photoUrl;

    function navigateToWantedPath(event) {
        debugger;
        if (event.target.textContent === 'Log Out') {
            localStorage.removeItem('user');
            Cookies.remove("session");
            navigate('/');
            window.location.reload();
        } else {
            navigate(event.target.value);
        }
    }


    return (
        <>
            <header className={style["site-header"]} id="HomePage-header">
                <div className={style["logo-data-wrapper"]}>
                    <img src={LastLogo} alt="GalaxyPlay-Logo" />
                    <h1 className={style["site-title"]}>GalaxyPlay</h1>
                    <span className={style["title-border"]}></span>
                </div>

                <nav className={style["header-nav"]}>
                    <ul style={{ listStyle: "none" }}>
                        {!localStorage.getItem("user") && (
                            <>
                                <Link to="/login">Sign In</Link>
                                <Link to="/register">Sign Up</Link>
                            </>
                        )}

                        {localStorage.getItem("user") && (
                            <>
                                <li>
                                    <button value="/" onClick={navigateToWantedPath}>Home</button>
                                </li>
                                <li>
                                    <button value="/categories" onClick={navigateToWantedPath}>Categories</button>
                                </li>

                                <li>
                                    <button value="/profile-details" onClick={navigateToWantedPath}>Profile Details</button>
                                </li>

                                <li>
                                    <button value="/" onClick={navigateToWantedPath}>Log Out</button>
                                </li>
                            </>
                        )}
                    </ul>

                </nav>

                <img
                    className={style['user-image']}
                    src={allAvatarsReversed[userImage]} alt="user-image" />
            </header>
        </>
    );
};