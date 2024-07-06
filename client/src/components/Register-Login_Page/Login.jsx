import styles from "./Register_Login.module.css";
import { useForm } from "./hooks/useForm";

import backgroundVideo from "./videos/login wallper.mp4";
import { useNavigate } from 'react-router-dom';

export const Login = (props) => {
  const {formValues, onChangeHandler, onSubmitLoginHandler} = useForm({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const onClickSignUpHandler = () => {
    navigate('/register');
  };

  async function doLogin(event) {
    const result = await onSubmitLoginHandler(event);

    if (result.accessToken) {
		const newData = {email: formValues.email, password: formValues.password };
		props.setUsDataHandler(newData);
		navigate("/categories");
    }
  }

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
      <form onSubmit={doLogin} className={`${styles["register"]} ${styles["other"]}}`}>
        <header className={styles["header"]}>
          <h1>Sign In</h1>
        </header>
        <fieldset>
          <legend>Email &amp; Password:</legend>
          <div className={`${styles["field"]} ${styles["text"]} ${styles["icon-username"]}`}>
            <input onChange={onChangeHandler} name="email" type="email" id="username" placeholder="Email..."/>
            <i className="fa fa-user" />
            <label htmlFor="username">Email: </label>
            <span className={styles["helper"]}>Hello there</span>
          </div>
          <div className={`${styles["field"]} ${styles["text"]} ${styles["icon-password"]}`}>
            <input onChange={onChangeHandler} name="password" type="password" id="re-password"  placeholder="Password..."/>
            <label htmlFor="re-password">Password:</label>
            <i className="fa fa-key" />
          </div>
        </fieldset>

        <span onClick={onClickSignUpHandler} className={styles["sign-up-option"]}>Sign Up</span>
        <input type="submit" value="Sign In" />
      </form>
    </div>
  );
};
