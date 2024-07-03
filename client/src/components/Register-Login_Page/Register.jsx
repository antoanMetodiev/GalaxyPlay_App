import styles from "./Register_Login.module.css";

export const Register = (props) => {
  return (
    <div className={styles["register-page-container"]}>
      <video
        autoPlay
        loop
        muted
        preload="auto"
        className={styles["video-bkg"]}
        src="../src/components/HomePage/resources/videos/login wallper.mp4"
      >
        Your browser does not support the video tag.
      </video>
      <form action="#" className={styles["register"]}>
        <header className={styles["header"]}>
          <h1>Register</h1>
        </header>
        <fieldset>
          <legend>Username &amp; Email:</legend>
          <div className={`${styles["field"]} ${styles["text"]} ${styles["icon-username"]}`}>
            <input type="text" id="username" required="" />
            <i className="fa fa-user" />
            <label htmlFor="username">Username: </label>
            <span className={styles["helper"]}>Hello there</span>
          </div>
          <div className={`${styles["field"]} ${styles["text"]} ${styles["icon-email"]}`}>
            <input type="email" id="email" required="" />
            <label htmlFor="email">Email: </label>
            <i className="fa fa-envelope" />
          </div>
        </fieldset>
        <fieldset>
          <legend>Phone Number &amp; Password:</legend>
          <div className={`${styles["field"]} ${styles["text"]} ${styles["icon-password"]}`}>
            <input
              className={styles["phone-input"]}
              type="number"
              id="password"
              required=""
            />
            <label htmlFor="password">Phone Number:</label>
            <i className="fa-solid fa-phone phone-icon" />
          </div>
          <div className={`${styles["field"]} ${styles["text"]} ${styles["icon-password"]}`}>
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
