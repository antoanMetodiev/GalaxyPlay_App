import LastLogo from "../resources/images/last-logo.jfif";
import { HeaderContacts } from "./HeaderContacts";
import { Link } from "react-router-dom";

export const Header = (props) => {


  return (
    <header className="site-header" id="HomePage-header">
      <div className="logo-data-wrapper">
        <img src={LastLogo} alt="GalaxyPlay-Logo" />
        <h1 className="site-title">GalaxyPlay</h1>
        <span className="title-border"></span>
      </div>
      <nav className="header-nav">
        <ul>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/">For Us</Link>
        </ul>
        <HeaderContacts />
      </nav>
    </header>
  );
};
