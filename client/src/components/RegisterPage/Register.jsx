import "../RegisterPage/Register.css";

export const Register = (props) => {
  return (

    <div className="register-page-container">
      <video
        autoPlay
        loop
        muted
        preload="auto"
        className="video-bkg"
        src="../src/components/HomePage/resources/videos/login wallper.mp4"
      >
        Your browser does not support the video tag.
      </video>
      <form action="#" className="register">
        <header className="header">
          <h1>Register</h1>
        </header>
        <fieldset>
          <legend>Username &amp; Email:</legend>
          <div className="field text icon-username">
            <input type="text" id="username" required="" />
            <i className="fa fa-user" />
            <label htmlFor="username">Username: </label>
            <span className="helper">Hello there</span>
          </div>
          <div className="field text icon-email">
            <input type="email" id="email" required="" />
            <label htmlFor="email">Email: </label>
            <i className="fa fa-envelope" />
          </div>
        </fieldset>
        <fieldset>
          <legend>Phone Number &amp; Password:</legend>
          <div className="field text icon-password">
            <input
              className="phone-input"
              type="number"
              id="password"
              required=""
            />
            <label htmlFor="password">Phone Number:</label>
            <i className="fa-solid fa-phone phone-icon" />
          </div>
          <div className="field text icon-password">
            <input type="password" id="re-password" required="" />
            <label htmlFor="re-password">Password:</label>
            <i className="fa fa-key" />
          </div>
        </fieldset>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};
