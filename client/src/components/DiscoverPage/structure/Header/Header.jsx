import LastLogo from "../../resources/images/old-log.webp";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css"; // Импорт на CSS модул стиловете
import { useState, useEffect } from "react";
import { HeaderContacts } from "../HeaderContacts";
import { auth, signOut } from '../../../../firebase/firebase'; // Коригирайте пътя към firebase.js
import { onAuthStateChanged } from "firebase/auth";

import Cookies from "js-cookie";

export const Header = ({
	removeLogStatus,
	logStatus
}) => {
	const [user, setUser] = useState(null);
	const [showContacts, setShowContacts] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			console.log(currentUser);
		});

		return () => unsubscribe(); // Чистене на подписката при размонтиране на компонента
	}, []);

	const logOutUserHandler = async () => {

		debugger;
		try {
			await signOut(auth); // Изчакване на завършване на операцията по излизане
			Cookies.remove('session'); // Изтриване на cookie при изход
			removeLogStatus();
		} catch (error) {
			console.error('Error during logout:', error); // Обработка на грешки
		}
	};

	const showContactsHandler = () => {
		setShowContacts(prevShowContacts => !prevShowContacts);
	};

	return (
		<header className={styles["site-header"]} id="HomePage-header">
			<div className={styles["logo-data-wrapper"]}>
				<img src={LastLogo} alt="GalaxyPlay-Logo" />
				<h1 className={styles["site-title"]}>GalaxyPlay</h1>
				<span className={styles["title-border"]}></span>
			</div>
			<nav className={styles["header-nav"]}>
				<ul style={{ listStyle: "none" }}>
					{!logStatus ? (
						<>
							<li>
								<Link to="/login">Sign In</Link>
							</li>
							<li>
								<Link to="/register">Sign Up</Link>
							</li>
						</>
					) : (
						<>
							<li>
								<Link to="/categories">Categories</Link>
							</li>
							<li>
								<Link to="/game-reviews">Blog</Link>
							</li>
							<li>
								<Link to="/profile-details">Profile Details</Link>
							</li>
							<li onClick={logOutUserHandler}>
								<Link to="#">Log Out</Link>
							</li>
						</>
					)}
				</ul>

				<ul className={styles['contacts-li-item']}>
					<li onClick={showContactsHandler}>Contacts</li>
				</ul>

				{showContacts && <HeaderContacts />}
			</nav>
		</header>
	);
};
