import { images } from '../../resources/images';
import styles from '../Overview/Overview.module.css'; // Import на CSS модул стиловете

import { useNavigate } from 'react-router-dom';

export const Overview = () => {
  const navigate = useNavigate();

  function onClickButtonHandler() {
    navigate('/login');
  }

  
  return (
    <section className={styles['demo-website-preview']}>
      {/* Games */}
      <h2>Games</h2>

      <article className={styles.playstation}>
        <div className={`${styles.playstation} ${styles._5}`}>
          <img
            className={`${styles.playstation} ${styles._5}_img`}
            src={images.Ps5Game}
            alt="Playstation 5 image"
          />
          <div className={styles.content}>
            <h2>PS5</h2>
            <button onClick={onClickButtonHandler}>VIEW NOW</button>
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
            <button onClick={onClickButtonHandler}>VIEW NOW</button>
          </div>
          <span className={styles['bkg-color']}></span>
        </div>
        <div className={`${styles.playstation} ${styles._5}`}>
          <img
            className={`${styles.playstation} ${styles._5}_img`}
            src={images.XboxGame}
            alt="Playstation 5 image"
          />
          <div className={styles.content}>
            <h2>XBOX</h2>
            <button onClick={onClickButtonHandler}>VIEW NOW</button>
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
            <button onClick={onClickButtonHandler}>VIEW NOW</button>
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
            <h2>Acer Predator</h2>
            <button onClick={onClickButtonHandler}>VIEW NOW</button>
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
            <button onClick={onClickButtonHandler}>VIEW NOW</button>
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
            <button onClick={onClickButtonHandler}>VIEW NOW</button>
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
            <button onClick={onClickButtonHandler}>VIEW NOW</button>
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
            <button onClick={onClickButtonHandler}>VIEW NOW</button>
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
            <button onClick={onClickButtonHandler}>VIEW NOW</button>
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
            <button onClick={onClickButtonHandler}>VIEW NOW</button>
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
            <button onClick={onClickButtonHandler}>VIEW NOW</button>
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
            <h2>Lenovo Legion</h2>
            <button onClick={onClickButtonHandler}>VIEW NOW</button>
          </div>
          <span className={styles['bkg-color']}></span>
        </div>
        <div className={`${styles.playstation} ${styles._5}`}>
          <img
            className={`${styles.playstation} ${styles._5}_img`}
            src={images.AsusTuf}
            alt="Playstation 5 image"
          />
          <div className={styles.content}>
            <h2>Asus Tuf</h2>
            <button onClick={onClickButtonHandler}>VIEW NOW</button>
          </div>
          <span className={styles['bkg-color']}></span>
        </div>
        <div className={`${styles.playstation} ${styles._5}`}>
          <img
            className={`${styles.playstation} ${styles._5}_img`}
            src={images.AlienWareLaptop}
            alt="Playstation 5 image"
          />
          <div className={styles.content}>
            <h2>Alienware</h2>
            <button onClick={onClickButtonHandler}>VIEW NOW</button>
          </div>
          <span className={styles['bkg-color']}></span>
        </div>
      </article>
    </section>
  );
};
