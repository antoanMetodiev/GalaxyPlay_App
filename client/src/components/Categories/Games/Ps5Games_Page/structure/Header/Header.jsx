import styles from "../Header/Header.module.css";

import site_logo from "../../images/last-logo.jfif";

import { Link, useNavigate } from "react-router-dom";
import { SearchEngine } from "./structure/SearchEngine/SearchEngine";

export const Header = () => {
  const navigate = useNavigate();
  
  const logOutUser = (event) => {
    event.preventDefault();
    localStorage.clear();
    console.log("Sega izlizam");
    navigate("/");
  };

  return (
    <header className={styles["site-header"]} id="HomePage-header">
      <div className={styles["logo-data-wrapper"]}>
        <img src={site_logo} alt="GalaxyPlay-Logo" />
        <h1 className={styles["site-title"]}>GalaxyPlay</h1>
        <span className={styles["title-border"]}></span>
      </div>

      <nav className={styles["header-nav"]}>
        <ul style={{ listStyle: "none" }}>
          {!localStorage.getItem("user") && (
            <>
              <li>
                <Link to="/login">Sign In</Link>
              </li>
              <li>
                <Link to="/register">Sign Up</Link>
              </li>
            </>
          )}

          <SearchEngine />

          {localStorage.getItem("user") && (
            <>
              <Link to="/categories">Profile Details</Link>
            </>
          )}

          {localStorage.getItem("user") && (
            <>
              <Link to="/categories">Categories</Link>
            </>
          )}

          {/* <li>
            <Link to="/register">About Us</Link>
          </li> */}

          {localStorage.getItem("user") && (
            <li>
              <Link to="/" onClick={logOutUser}>
                Log Out
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
