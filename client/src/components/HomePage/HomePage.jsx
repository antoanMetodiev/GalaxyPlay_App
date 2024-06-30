import LastLogo from "./images/last-logo.jfif";
import "../HomePage/HomePage.css";

export const HomePage = () => {
  
    return (
      <>
        <header className="site-header">
        <div className="logo-data-wrapper">
          <img src={LastLogo} alt="GalaxyPlay-Logo" />
          <h1 className="site-title">GalaxyPlay</h1>
		  <span className="title-border"></span>
        </div>
        <nav className="header-nav">
          {/* TODO: Replace with Link components */}
          <ul>
            <a href="#">Sign In</a>
            <a href="#">Register</a>
          </ul>
          <ul>
            <a href="#">For Us</a>
            <a href="#">Contacts</a>
          </ul>
        </nav>
      </header>            
      </>
    );
  };