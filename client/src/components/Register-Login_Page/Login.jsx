import styles from "./Register_Login.module.css";
import { useForm } from "./hooks/useForm";

import backgroundVideo from "./videos/login wallper.mp4";

export const Login = () => {
  const [formValues, onChangeHandler, onSubmitHandler] = useForm({
    username: "",
    password: "",
  });

  console.log(formValues);

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
      <form onSubmit={onSubmitHandler} className={styles["register"]}>
        <header className={styles["header"]}>
          <h1>Login</h1>
        </header>
        <fieldset>
          <legend>Username &amp; Email:</legend>
          <div className={`${styles["field"]} ${styles["text"]} ${styles["icon-username"]}`}>
            <input onChange={onChangeHandler} name="username" type="text" id="username" required="" />
            <i className="fa fa-user" />
            <label htmlFor="username">Username: </label>
            <span className={styles["helper"]}>Hello there</span>
          </div>
          <div className={`${styles["field"]} ${styles["text"]} ${styles["icon-password"]}`}>
            <input onChange={onChangeHandler} name="password" type="password" id="re-password" />
            <label htmlFor="re-password">Password:</label>
            <i className="fa fa-key" />
          </div>
        </fieldset>

        <input type="submit" value="Login" />
      </form>
    </div>
  );
};
