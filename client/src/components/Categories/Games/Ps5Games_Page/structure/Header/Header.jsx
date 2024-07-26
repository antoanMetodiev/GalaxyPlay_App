import styles from "../Header/Header.module.css";
import site_logo from "../../images/old-logo.jfif";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

export const Header = () => {
	const navigate = useNavigate();
	let titleRef = useRef("");

	const logOutUser = (event) => {
		event.preventDefault();
		localStorage.clear();
		navigate("/");
		window.location.reload();
	};

	useEffect(() => {
		const titleElement = titleRef.current;
		const text = titleElement.textContent;
		titleElement.textContent = "";
		titleElement.classList.add(styles["title-animation"]);

		for (let i = 0; i < text.length; i++) {
			const letterSpan = document.createElement("span");
			letterSpan.classList.add("title-el");
			letterSpan.textContent = text[i];
			titleElement.appendChild(letterSpan);
		}
	}, []);


	return (
		<>
			<div id="scroll-target" className={styles["logo-data-wrapper"]}>
				<img src={site_logo} alt="GalaxyPlay-Logo" />
				<h1 ref={titleRef} className={styles["site-title"]}>
					GalaxyPlay
				</h1>
				<span className={styles["title-border"]}></span>
			</div>

			<nav className={styles["header-nav"]}>
				<ul style={{ listStyle: "none" }}>
					{!localStorage.getItem("user") && (
						<>
							<li>
								<Link to="/login">Sign In</Link>
							</li>
							<li>
								<Link to="/register">Sign Up</Link>
							</li>
						</>
					)}

					{localStorage.getItem("user") && (
						<li>
							<Link to="/">
								Home
							</Link>
						</li>
					)}

					{localStorage.getItem("user") && (
						<>
							<Link to="/profile-details">Profile Details</Link>
						</>
					)}

					{localStorage.getItem("user") && (
						<>
							<Link to="/categories">Categories</Link>
						</>
					)}


					{localStorage.getItem("user") && (
						<li>
							<Link onClick={logOutUser}>
								Log Out
							</Link>
						</li>
					)}
				</ul>


				{localStorage.getItem("user") && (
					<img className={styles['user-image']} src={JSON.parse(localStorage.getItem('user')).photoUrl} alt="user-image" />
				)}
			</nav>



		</>
	);
};
