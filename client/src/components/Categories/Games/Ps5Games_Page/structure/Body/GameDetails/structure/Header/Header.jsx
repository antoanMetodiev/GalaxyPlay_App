import { useNavigate } from "react-router-dom";
import style from "../Header/Header.module.css";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cleanUpForGameDetails = location.state?.cleanUpForGameDetails;

  const logOutUserHandler = (event) => {
    event.preventDefault();
    localStorage.clear();
	  navigate('/');
  };

  function navigateToWantedPath(event) {

    debugger;
    cleanUpForGameDetails();

    let path = event.target.value;
    navigate(path);
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
      </header>
    </>
  );
};
