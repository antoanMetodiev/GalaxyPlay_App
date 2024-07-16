import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import styles from "./Footer.module.css"; // Импорт на CSS модул стиловете

export const Footer = () => {
  return (
    <footer>
      {/* <section>
        <h2>Contacts:</h2>
        <p>+359 77 999 4321</p>
        <p>GalaxyPlay_support@gmail.com</p>
      </section> */}
      <p>
        &copy; 2024 <span>GalaxyPlay</span>. All rights reserved.
      </p>
      
      {/* <Link
        className={styles["to-Header"]}
        to="HomePage-header"
        spy={true}
        smooth={true}
        offset={-100}
        duration={1200}
      >
        <FontAwesomeIcon className={styles["up-Image"]} icon={faAngleUp} />
      </Link> */}
    </footer>
  );
};
