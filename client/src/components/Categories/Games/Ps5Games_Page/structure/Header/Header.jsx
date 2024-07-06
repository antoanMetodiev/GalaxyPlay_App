import styles from "../Header/Header.module.css";

import site_logo from "../../images/last-logo.jfif";

export const Header = () => {

    return (

        <header className={styles['site-header']}>
            <div className={styles['site-logo-name-container']}>
                <img className={styles['site-logo']} src={site_logo} alt="site-logo" />
                <h1 className={styles['site-name']}>GalaxyPlay</h1>
            </div>

            <form>
                <input type="text" placeholder="What will you search for today?"/>
                <button className={styles['search-button']}>Search</button>
            </form>

            <div className={styles['user-container']}>
                <h2>User1</h2>
            </div>
        </header>
    );
}