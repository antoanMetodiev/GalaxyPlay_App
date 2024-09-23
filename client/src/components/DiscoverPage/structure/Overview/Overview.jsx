import { images } from '../../resources/images';
import styles from '../Overview/Overview.module.css'; // Import на CSS модул стиловете
import backImage from "../../resources/images/3d sales.webp";

import { Link, useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

export const Overview = () => {
	const { ref, inView } = useInView({
        triggerOnce: true, // Анимацията да се стартира само веднъж
        threshold: 0.1, // Процент от видимостта, за да се активира анимацията
    });


	return (
		<section className={styles['demo-website-preview']}>

			<img 
				className={styles['back-image']}
				src={backImage} 
				alt="backImage" 
			/>

			{/* Games */}
			<h2>Games</h2>

			<article 
				ref={ref}
				className={styles.playstation}>
				<div className={`${styles.playstation} ${styles._5}`}>
					<img
						className={`${styles.playstation} ${styles._5}_img`}
						src={images.Ps5Game}
						alt="Playstation 5 image"
					/>
					<div className={styles.content}>
						<h2>PS5</h2>
						<Link to="/categories/games/ps5-games">View Now</Link>
					</div>
					<span className={styles['bkg-color']}></span>
				</div>
				<div className={`${styles.playstation} ${styles._5}`}>
					<img
						className={`${styles.playstation} ${styles._5}_img`}
						src={images.Ps4Game}
						alt="Playstation 5 image"
					/>
					<div className={styles.content}>
						<h2>PS4</h2>
						<Link to="/categories/games/ps4-games" >View Now</Link>
					</div>
					<span className={styles['bkg-color']}></span>
				</div>
				<div className={`${styles.playstation} ${styles._5}`}>
					<img
						className={`${styles.playstation} ${styles._5}_img`}
						src={images.XboxGame}
						alt="XBOX"
					/>
					<div className={styles.content}>
						<h2>XBOX</h2>
						<Link to="/categories/games/xbox-games" >View Now</Link>
					</div>
					<span className={styles['bkg-color']}></span>
				</div>
			</article>

			{/* PC */}
			<h2>PC</h2>

			<article className={styles.playstation}>
				<div className={`${styles.playstation} ${styles._5}`}>
					<img
						className={`${styles.playstation} ${styles._5}_img`}
						src={images.Corsair}
						alt="Playstation 5 image"
					/>
					<div className={styles.content}>
						<h2>Corsair</h2>
						<Link to="/categories/pc" >View Now</Link>
					</div>
					<span className={styles['bkg-color']}></span>
				</div>
				<div className={`${styles.playstation} ${styles._5}`}>
					<img
						className={`${styles.playstation} ${styles._5}_img`}
						src={images.AcerPredator}
						alt="Playstation 5 image"
					/>
					<div className={styles.content}>
						<h2>Acer</h2>
						<Link to="/categories/pc" >View Now</Link>
					</div>
					<span className={styles['bkg-color']}></span>
				</div>
				<div className={`${styles.playstation} ${styles._5}`}>
					<img
						className={`${styles.playstation} ${styles._5}_img`}
						src={images.AlienWare}
						alt="Playstation 5 image"
					/>
					<div className={styles.content}>
						<h2>Alienware</h2>
						<Link to="/categories/pc" >View Now</Link>
					</div>
					<span className={styles['bkg-color']}></span>
				</div>
			</article>

			{/* Playstation */}
			<h2>Playstation</h2>

			<article className={styles.playstation}>
				<div className={`${styles.playstation} ${styles._5}`}>
					<img
						className={`${styles.playstation} ${styles._5}_img`}
						src={images.Playstation5Image}
						alt="Playstation 5 image"
					/>
					<div className={styles.content}>
						<h2>Playstation 5</h2>
						<Link to="/categories/ps5" >View Now</Link>
					</div>
					<span className={styles['bkg-color']}></span>
				</div>
				<div className={`${styles.playstation} ${styles._5}`}>
					<img
						className={`${styles.playstation} ${styles._5}_img`}
						src={images.Playstation4ProImage}
						alt="Playstation 5 image"
					/>
					<div className={styles.content}>
						<h2>Playstation 4 Pro</h2>
						<Link to="/categories/ps4" >View Now</Link>
					</div>
					<span className={styles['bkg-color']}></span>
				</div>
				<div className={`${styles.playstation} ${styles._5}`}>
					<img
						className={`${styles.playstation} ${styles._5}_img`}
						src={images.Playstation4SlimImage}
						alt="Playstation 5 image"
					/>
					<div className={styles.content}>
						<h2>Playstation 4 Slim</h2>
						<Link to="/categories/ps4" >View Now</Link>
					</div>
					<span className={styles['bkg-color']}></span>
				</div>
			</article>

			{/* XBOX */}
			<h2>XBOX</h2>

			<article className={styles.playstation}>
				<div className={`${styles.playstation} ${styles._5}`}>
					<img
						className={`${styles.playstation} ${styles._5}_img`}
						src={images.Xbox_X}
						alt="Playstation 5 image"
					/>
					<div className={styles.content}>
						<h2>XBOX X</h2>
						<Link to="/categories/xbox" >View Now</Link>
					</div>
					<span className={styles['bkg-color']}></span>
				</div>
				<div className={`${styles.playstation} ${styles._5}`}>
					<img
						className={`${styles.playstation} ${styles._5}_img`}
						src={images.Xbox_S}
						alt="Playstation 5 image"
					/>
					<div className={styles.content}>
						<h2>XBOX S</h2>
						<Link to="/categories/xbox" >View Now</Link>
					</div>
					<span className={styles['bkg-color']}></span>
				</div>
				<div className={`${styles.playstation} ${styles._5}`}>
					<img
						className={`${styles.playstation} ${styles._5}_img`}
						src={images.Xbox_One}
						alt="Playstation 5 image"
					/>
					<div className={styles.content}>
						<h2>XBOX One X</h2>
						<Link to="/categories/xbox" >View Now</Link>
					</div>
					<span className={styles['bkg-color']}></span>
				</div>
			</article>

			{/* Laptops */}
			<h2>Laptop</h2>

			<article className={styles.playstation}>
				<div className={`${styles.playstation} ${styles._5}`}>
					<img
						className={`${styles.playstation} ${styles._5}_img`}
						src={images.LenovoLegion}
						alt="Playstation 5 image"
					/>
					<div className={styles.content}>
						<h2>Lenovo</h2>
						<Link to="/categories/laptop" >View Now</Link>
					</div>
					<span className={styles['bkg-color']}></span>
				</div>
				<div className={`${styles.playstation} ${styles._5}`}>
					<img
						className={`${styles.playstation} ${styles._5}_img`}
						src={images.Mac}
						alt="Playstation 5 image"
					/>
					<div className={styles.content}>
						<h2>Mac</h2>
						<Link to="/categories/laptop" >View Now</Link>
					</div>
					<span className={styles['bkg-color']}></span>
				</div>
				<div className={`${styles.playstation} ${styles._5}`}>
					<img
						className={`${styles.playstation} ${styles._5}_img`}
						src={images.AcerAspire}
						alt="Playstation 5 image"
					/>
					<div className={styles.content}>
						<h2>Acer</h2>
						<Link to="/categories/laptop" >View Now</Link>
					</div>
					<span className={styles['bkg-color']}></span>
				</div>
			</article>
		</section>
	);
};
