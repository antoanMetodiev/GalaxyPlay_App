import { useEffect, useState } from "react";
import style from "../UserDetails/UserDetails.module.css";

import wallper from "./images/user-details-image.jpg";
import coolSpinner from "../components/Register-Login_Page/images/coll-spiner.gif";

export const UserDetails = () => {
  let myUsername = JSON.parse(localStorage.getItem("user")).username;
  let [userData, setUserData] = useState({});

  useEffect(() => {
    let getUserData = async () => {
      let responce = await fetch(
        `https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/users/${myUsername}/.json`
      );
      responce = await responce.json();

      // debugger;
      let random = responce[Object.keys(responce)[0]];
      setUserData(random);
    };

    getUserData();
  }, []);

  return (
    <>
      {userData && Object.keys(userData).length > 0 && (
        <>
          {/* <img
            className={style["cool-spinner"]}
            src={coolSpinner}
            alt="cool-spiner"
          /> */}

          <h1 className={style["site-title"]}>GalaxyPlay</h1>
          {/* <img
            className={style["wallper-image"]}
            src={wallper}
            alt="smooth backgr"
          /> */}

          <article className={style["user-details-wrapper"]}>
            <div>
              <div className={style["user-details-container"]}>
                <aside>
                  <img
                    className={style["user-image"]}
                    src={userData.photoURL}
                    alt="mlad-chovek"
                  />
                </aside>

                <section className={style["content"]}>
                  <h2 className={style["my-profile-title"]}>My Profile</h2>

                  <section>
                    <div>
                      <label>Username</label>
                      <input value={userData.username} type="text" disabled />
                    </div>
                    <div>
                      <label>Password</label>
                      <input value={userData.password} type="text" disabled />
                    </div>
                  </section>

                  <section>
                    <div>
                      <label>Gender</label>
                      <input value={userData.gender} type="text" disabled />
                    </div>
                    <div>
                      <label>Phone Number</label>
                      <input
                        value={userData.phoneNumber}
                        type="number"
                        disabled
                      />
                    </div>
                  </section>

                  <section>
                    <div>
                      <label>Email Address</label>
                      <input
                        value={userData.email}
                        className={style["email"]}
                        type="email"
                        disabled
                      />
                    </div>
                  </section>
                </section>

                <div id={style["user-details-foot"]}></div>
              </div>
            </div>
          </article>
        </>
      )}
    </>
  );
};
