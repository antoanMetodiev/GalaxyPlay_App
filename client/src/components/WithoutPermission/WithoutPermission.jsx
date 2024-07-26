import { Link } from "react-router-dom";
import style from "../WithoutPermission/WithoutPermission.module.css";

import gates from "../WithoutPermission/images/without-permission.jpg";
import coolSpinner from "../Register-Login_Page/images/coll-spiner.gif";

export const WithoutPermission = () => {

    return (
        <>

            <img
                className={style["cool-spinner"]}
                src={coolSpinner}
                alt="cool-spiner"
            />

            <img className={style['closed-gates']} src={gates} alt="closed-gates" />

            <div className={style['without-permission-container']}>


                <section className={style['content-container']}>
                    <h2 className={style['permission-title']}>You don't have permission !</h2>
                    <h3>But you can fix that:</h3>
                    <div>
                        <Link to="/login" className={style['link-button-login']}>Login</Link>
                        <Link to="/register" className={style['link-button-register']}>Register</Link>
                    </div>
                </section>


            </div>
        </>
    );
};