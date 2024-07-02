import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

export const Footer = () => {

    return (

        <footer id="HomePage-footer">
            <section>
                <h2>Contacts:</h2>
                <p>+359 77 999 4321</p>
                <p>GalaxyPlay_support@gmail.com</p>
            </section>
            <p>&copy; 2024 <span>GalaxyPlay</span>. All rights reserved.</p>
            <Link className="to-Header" to="HomePage-header" spy={true} smooth={true} offset={-100} duration={1200}>
                <FontAwesomeIcon className="up-Image" icon={faAnglesUp} />
            </Link>
        </footer>
    );
}