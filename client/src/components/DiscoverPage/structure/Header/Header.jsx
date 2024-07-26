import LastLogo from "../../resources/images/old-log.jfif";

import { Link } from "react-router-dom";
import styles from "./Header.module.css"; // Импорт на CSS модул стиловете
import { useState } from "react";

import { HeaderContacts } from "../HeaderContacts";

export const Header = () => {
  const [imLogOut, setImLogOut] = useState(false);

  function logOutUserHandler() {
    localStorage.removeItem("user");
    window.location.reload();
    setImLogOut(true);
  }

  return (
    <header className={styles["site-header"]} id="HomePage-header">
      <div className={styles["logo-data-wrapper"]}>
        <img src={LastLogo} alt="GalaxyPlay-Logo" />
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

          {localStorage.getItem("user") && (
            <>
              <Link to="/categories">Categories</Link>

              <Link to="/profile-details">Profile Details</Link>
            </>
          )}

          {localStorage.getItem("user") && (
            <li onClick={logOutUserHandler}>
              <Link>Log Out</Link>
            </li>
          )}
        </ul>

        <HeaderContacts />
      </nav>
    </header>
  );
};
