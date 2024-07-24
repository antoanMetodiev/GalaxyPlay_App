import styles from "../Header/Header.module.css";

import site_logo from "../../images/old-logo.jfif";

import { Link, useNavigate } from "react-router-dom";
import { SearchEngine } from "../Body/SearchEngine/SearchEngine";
import { animateScroll as scroll } from "react-scroll";
import { scroller } from "react-scroll";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  let titleRef = useRef("");

  const logOutUser = (event) => {
    event.preventDefault();
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    const titleElement = titleRef.current;
    const text = titleElement.textContent;
    titleElement.textContent = ""; // Изчиства текста

    // Добавяме класа, за да започне анимацията
    titleElement.classList.add(styles["title-animation"]);

    // Възстановяваме текста буква по буква
    for (let i = 0; i < text.length; i++) {
      const letterSpan = document.createElement("span");
      letterSpan.classList.add("title-el");
      letterSpan.textContent = text[i];
      titleElement.appendChild(letterSpan);
    }
  }, []);


  return (
    <>
      <div id="scroll-target" className={styles["logo-data-wrapper"]}>
        <img src={site_logo} alt="GalaxyPlay-Logo" />
        <h1 ref={titleRef} className={styles["site-title"]}>
          GalaxyPlay
        </h1>
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
              <Link to="/profile-details">Profile Details</Link>
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
              <Link onClick={logOutUser}>
                Log Out
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};
