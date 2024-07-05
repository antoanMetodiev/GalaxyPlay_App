import styles from "./Register_Login.module.css";
import { useForm } from "./hooks/useForm";

import backgroundVideo from "./videos/register wallper video.mp4";

export const Register = () => {
  const {formValues, onChangeHandler, onSubmitRegisterHandler} = useForm({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
  });


  return (
    <div className={styles["register-page-container"]}>
      <video
        autoPlay
        loop
        muted
        preload="auto"
        className={styles["video-bkg"]}
        src={backgroundVideo}
      >
        Your browser does not support the video tag.
      </video>
      <form onSubmit={onSubmitRegisterHandler} className={styles["register"]}>
        <header className={styles["header"]}>
          <h1>Sign Up</h1>
        </header>
        <fieldset>
          <legend>Username &amp; Email:</legend>
          <div
            className={`${styles["field"]} ${styles["text"]} ${styles["icon-username"]}`}
          >
            <input onChange={onChangeHandler} name="username" type="text" id="username" />
            <i className="fa fa-user" />
            <label htmlFor="username">Username: </label>
            <span className={styles["helper"]}>Hello there</span>
          </div>
          <div
            className={`${styles["field"]} ${styles["text"]} ${styles["icon-email"]}`}
          >
            <input onChange={onChangeHandler} name="email" type="email" id="email" />
            <label htmlFor="email">Email: </label>
            <i className="fa fa-envelope" />
          </div>
        </fieldset>
        <fieldset>
          <legend>Phone Number &amp; Password:</legend>
          <div
            className={`${styles["field"]} ${styles["text"]} ${styles["icon-password"]}`}
          >
            <input
              className={styles["phone-input"]}
              type="number"
              id="password"
              name="phoneNumber"
			  onChange={onChangeHandler}
            />
            <label htmlFor="password">Phone Number:</label>
            <i className="fa-solid fa-phone phone-icon" />
          </div>
          <div
            className={`${styles["field"]} ${styles["text"]} ${styles["icon-password"]}`}
          >
            <input
              name="password"
              type="password"
              id="re-password"
			  onChange={onChangeHandler}
            />
            <label htmlFor="re-password">Password:</label>
            <i className="fa fa-key" />
          </div>
        </fieldset>

        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};
