import LastLogo from "../../resources/images/last-logo.jfif";
import { HeaderContacts } from "../HeaderContacts";
import { Link } from "react-router-dom";
import styles from "./Header.module.css"; // Импорт на CSS модул стиловете

export const Header = () => {
  return (
    <header className={styles["site-header"]} id="HomePage-header">
      <div className={styles["logo-data-wrapper"]}>
        <img src={LastLogo} alt="GalaxyPlay-Logo" />
        <h1 className={styles["site-title"]}>GalaxyPlay</h1>
        <span className={styles["title-border"]}></span>
      </div>
      <nav className={styles["header-nav"]}>
        <ul style={{listStyle: 'none'}}>
          <li>
            <Link to="/login">Sign In</Link>
          </li>
          <li>
            <Link to="/register">Sign Up</Link>
          </li>
          <li>
            <Link to="/">About Us</Link>
          </li>
        </ul>
        <HeaderContacts />
      </nav>
    </header>
  );
};
