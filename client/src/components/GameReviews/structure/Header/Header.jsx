import { useNavigate } from "react-router-dom";
import style from "../Header/Header.module.css";
import LastLogo from "../../../DiscoverPage/resources/images/last-logo.jfif";

import { Link } from "react-router-dom";

import { HeaderContacts } from "../../../DiscoverPage/structure/HeaderContacts";

export const Header = () => {
    let navigate = useNavigate();

    let userImage = JSON.parse(localStorage.getItem('user')).photoUrl;

    function navigateToWantedPath(event) {
        navigate(event.target.value);
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
                                    <button value="/categories" onClick={navigateToWantedPath}>Categories</button>
                                </li>
                            </>
                        )}

                        <li>
                            <button value="/about-us" onClick={navigateToWantedPath}>About Us</button>
                        </li>

                        {localStorage.getItem("user") && (
                            <li>
                                <button value="/" onClick={navigateToWantedPath}>Log Out</button>
                            </li>
                        )}
                    </ul>

                    <HeaderContacts />
                </nav>

                <img 
                className={style['user-image']}
                src={userImage} alt="user-image" />
            </header>
        </>
    );
};