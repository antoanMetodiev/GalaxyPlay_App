import React, { useRef, useState } from "react";
import styles from "./Register.module.css";
import { useForm } from "../hooks/useForm";
import { useNavigate } from "react-router-dom";

import backgroundVideo from "../videos/register wallper video.mp4";
import profileImageModel from "../images/ROiiCZmW_400x400.jpg";
import coolSpinner from "../images/coll-spiner.gif";

import { AvatarSection } from "../Register/structure/AvatarSection/AvatarSection";

export const Register = () => {
  let navigate = useNavigate();
  const allInputsReferences = useRef({});
  const [imageState, setImageState] = useState(profileImageModel);

  let showAvatarContainerRef = useRef(null);
  let choosenAvatarImage = useRef("");

  const { formValues, onChangeHandler, onSubmitRegisterHandler, error } =
    useForm(
      {
        username: "",
        email: "",
        phoneNumber: "",
        password: "",
        repassword: "",
        profileImage: "",
        gender: "",
      },
      allInputsReferences
    );

  function showAvatarSectionHandler() {
    showAvatarContainerRef.current.classList.remove(
      showAvatarContainerRef.current.classList[1]
    );
    showAvatarContainerRef.current.style.display = "flex";
  }

  function setNewAvatarHandler(avatarUrl) {
    choosenAvatarImage.current = avatarUrl;
    setImageState(avatarUrl);
  }

  function callOnSubmitRegisterFunction(event) {
    event.preventDefault();
    onSubmitRegisterHandler(event, choosenAvatarImage);
    navigate('/');
  };

  return (
    <div className={styles["register-page-container"]}>
      <img
        className={styles["cool-spinner"]}
        src={coolSpinner}
        alt="cool-spiner"
      />

      <AvatarSection
        showAvatarContainerRef={showAvatarContainerRef}
        setNewAvatarHandler={setNewAvatarHandler}
      />

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
      <form
        onSubmit={callOnSubmitRegisterFunction}
        className={styles["register"]}
      >
        <header className={styles["header"]}>
          <h1>Sign Up</h1>
        </header>
        <fieldset>
          <legend>Username &amp; Email:</legend>
          <div
            className={`${styles["field"]} ${styles["text"]} ${styles["icon-username"]}`}
          >
            <label htmlFor="username">Username: </label>
            <input
              ref={allInputsReferences.username}
              onChange={onChangeHandler}
              name="username"
              type="text"
              id="username"
              value={formValues.username}
            />
            <i className="fa fa-user" />

            <span className={styles["helper"]}>Hello there</span>
          </div>
          <div
            className={`${styles["field"]} ${styles["text"]} ${styles["icon-email"]}`}
          >
            <input
              ref={allInputsReferences.email}
              onChange={onChangeHandler}
              name="email"
              type="email"
              id="email"
              value={formValues.email}
            />
            <label htmlFor="email">Email: </label>
            <i className="fa fa-envelope" />
          </div>
        </fieldset>
        <fieldset>
          <legend>Phone Number &amp; Password:</legend>
          <div
            className={`${styles["field"]} ${styles["text"]} ${styles["icon-password"]}`}
          >
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              ref={allInputsReferences.phoneNumber}
              className={styles["phone-input"]}
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              onChange={onChangeHandler}
              value={formValues.phoneNumber}
            />

            <i className="fa-solid fa-phone phone-icon" />
          </div>
          <div
            className={`${styles["field"]} ${styles["text"]} ${styles["icon-password"]}`}
          >
            <label htmlFor="password">Password:</label>
            <input
              ref={allInputsReferences.password}
              name="password"
              type="password"
              id="password"
              onChange={onChangeHandler}
              value={formValues.password}
            />

            <i className="fa fa-key" />
          </div>
          <div
            className={`${styles["field"]} ${styles["text"]} ${styles["icon-password"]}`}
          >
            <label htmlFor="repassword">Re-enter Password:</label>
            <input
              ref={allInputsReferences.repassword}
              name="repassword"
              type="password"
              id="repassword"
              onChange={onChangeHandler}
              value={formValues.repassword}
            />

            <i className="fa fa-key" />
          </div>
        </fieldset>

        <input type="submit" value="Sign Up" />

        {error && <p className={styles["error"]}>{error}</p>}

        <img
          ref={allInputsReferences.profileImage}
          src={imageState}
          className={styles["profile-image-item"]}
          alt="profile-image-item"
          name="profileImage"
        />

        <label
          onClick={showAvatarSectionHandler}
          className={styles["profile-image-title"]}
        >
          Choose Avatar
        </label>

        <div className={styles["gender-container"]}>
          <p>Gender:</p>
          <select ref={allInputsReferences.gender} name="gender">
            {/* <option disabled hidden>Gender</option> */}

            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </form>
    </div>
  );
};
