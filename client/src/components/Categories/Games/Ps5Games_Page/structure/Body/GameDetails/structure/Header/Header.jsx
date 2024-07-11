import { useNavigate } from "react-router-dom";
import style from "../Header/Header.module.css";

export const Header = () => {
  const navigate = useNavigate();

  const logOutUserHandler = (event) => {
    event.preventDefault();
    localStorage.clear();
	navigate('/');
  };

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
                <li>
                  <Link to="/categories">Categories</Link>
                </li>
              </>
            )}

            <li>
              <Link to="/register">About Us</Link>
            </li>

            {localStorage.getItem("user") && (
              <li>
                <Link to="/" onClick={logOutUserHandler}>Log Out</Link>
              </li>
            )}
          </ul>
          <HeaderContacts />
        </nav>
      </header>
    </>
  );
};
