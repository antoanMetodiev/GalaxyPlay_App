import { useNavigate } from "react-router-dom";
import style from "../Header/Header.module.css";
import LastLogo from "../../images/new-logo.jpg";

import { Link } from "react-router-dom";

import { HeaderContacts } from "../../../DiscoverPage/structure/HeaderContacts";

export const Header = () => {
    let navigate = useNavigate();

    let userImage = JSON.parse(localStorage.getItem('user')).photoUrl;

    function navigateToWantedPath(event) {
        debugger;
        if (event.target.textContent === 'Log Out') {
            localStorage.removeItem('user');
            navigate(event.target.value);
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
                    src={userImage} alt="user-image" />
            </header>
        </>
    );
};