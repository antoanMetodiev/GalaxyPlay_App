import { images } from '../../resources/images';
import styles from '../Overview/Overview.module.css'; // Import на CSS модул стиловете

import { Link, useNavigate } from 'react-router-dom';

export const Overview = () => {
  const navigate = useNavigate();

  
  return (
    <section className={styles['demo-website-preview']}>
      {/* Games */}
      <h2>Games</h2>

      <article className={styles.playstation}>
        <div className={`${styles.playstation} ${styles._5}`}>
          <img
            className={`${styles.playstation} ${styles._5}_img`}
            src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2322010/capsule_616x353.jpg?t=1717646547"
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
            src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/03/the-last-of-us-part-2-ellie.jpg"
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
            src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg?t=1721149726https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/capsule_616x353.jpg?t=1721149726"
            alt="Playstation 5 image"
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
            src="https://pbs.twimg.com/media/Eo1QznkUUAA_GZ0.jpg:large"
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
            src="https://www.digitaltrends.com/wp-content/uploads/2022/06/acer-predator-orion-7000-review-8.jpg?p=1"
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
            src="https://cdn.mos.cms.futurecdn.net/nsJo9JeMW3y3873GQW6sSB-480-80.jpg"
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
            src="https://i0.wp.com/udaipurkiran.com/wp-content/uploads/2024/04/PlayStation-5.jpeg?resize=700%2C366&ssl=1"
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
            src="https://www.slashgear.com/img/gallery/playstation-4-pro-all-of-the-games-optimized-for-launch/intro-import.jpg"
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
            src="https://cdn.arstechnica.net/wp-content/uploads/2018/06/ps4-3-800x450.jpg"
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
            src="https://assets-prd.ignimgs.com/2023/11/30/where-to-buy-an-xbox-series-x-before-christmas-1701356399794.png"
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
            src="https://assets-prd.ignimgs.com/2022/10/06/xbox-series-s-on-sale-at-target-ign-2022-days-of-deals-1665052235848.png"
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
            src="https://www.godisageek.com/wp-content/uploads/Xbox-One-front-view-with-branding-1024x576.png"
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
            src="https://p2-ofp.static.pub/fes/cms/2022/04/19/cxv47wpzhjluoq8pe243eoa77wdfx2147295.png"
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
            src="https://hiraoka.com.pe/media/mageplaza/blog/post/m/a/macbook_air_vs._macbook_pro-_cuales_son_sus_diferencias.jpg"
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
            src="https://sm.ign.com/ign_in/screenshot/default/aspire-5-gaming-laptop-1_u3be.jpg"
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
