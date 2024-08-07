
import style from "./Header/Header.module.css";

import backgroundImage from "../resources/images/old-log.webp";

export const HeaderContacts = () => {





	return (
		<>


			<h2 className={style['contacts-title']}>GalaxyPlay</h2>

			<div className={style['contacts-container']}>

				<img className={style['background-image']} src={backgroundImage} alt="bear-logo" />

				<section className={style['meta-info-container']}>
					<div className={style['phoneNumber-container']}>
						<h2>Phone Number:</h2>
						<h3>- 0891238541</h3>
					</div>

					<div className={style['email-container']}>
						<h2>Email:</h2>
						<h3>- GalaxyPlay_support@gmail.com</h3>
					</div>
				</section>

				<section className={style['our-shops']}>
					<h2>Our Shops:</h2>
					<h3>GalaxyPlay  Bulgaria Mall</h3>
					<h3>GalaxyPlay Park Center</h3>
					<h3>GalaxyPlay Sofia Ring Mall</h3>
					<h3>GalaxyPlay Bulgaria Mall</h3>
					<h3>GalaxyPlay South Mall</h3>
					<h3>GalaxyPlay Grand Mall Varna</h3>
					<h3>GalaxyPlay Grand Mall Plovdiv</h3>
				</section>

				<div className={style['creator-container']}>
					<span>created by -  </span>
					<h2 className={style['typing-animation']}> Antoan Metodiev</h2>
				</div>
			</div>
		</>
	);
};
