import style from "./GameCharacteristics.module.css";

export const GameCharacteristics = () => {


  return (
    <>
      <h2 className={style["all-characteristics-title"]}>
        All Characteristics
      </h2>

      <article className={style['characteristics-container']}>
        <section className={style['left section']}>

            <div className={style['row-container']}>
                <p>Categories:</p>
                <section className={style['internal-section']}>
                    <p>Gaiming</p>
                    <p>Video Games</p>
                    <p>Games for PS5</p>
                </section>
            </div>

            <div className={style['row-container']}>
                <p>Group:</p>
                <p>Fighting Games, Games 18+</p>
            </div>

            <div className={style['row-container']}>
                <p>Resolution:</p>
                <p>1080i, 1080p, 4K, 720p</p>
            </div>

            <div className={style['row-container']}>
                <p>Genre:</p>
                <p>Fighting</p>
            </div>

            <div className={style['row-container']}>
                <p>Audio:</p>
                <p>Dolby Digital</p>
            </div>

            <div className={style['row-container']}>
                <p>Players:</p>
                <p>1-2</p>
            </div>
        </section>

        <section className={style['right section']}>

            <div className={style['row-container']}>
                <p>Edition:</p>
                <section className={style['internal-section']}>
                    <p>Gaiming</p>
                    <p>Video Games</p>
                    <p>Games for PS5</p>
                </section>
            </div>

            <div className={style['row-container']}>
                <p>Language:</p>
                <p>Fighting Games, Games 18+</p>
            </div>

            <div className={style['row-container']}>
                <p>Intended for:</p>
                <p>For Gamers</p>
            </div>

            <div className={style['row-container']}>
                <p>Weight:</p>
                <p>0.095 kg</p>
            </div>

            <div className={style['row-container']}>
                <p>Product size:</p>
                <p>17 x 1.5 x 13.5 cm</p>
            </div>

            <div className={style['row-container']}>
                <p>Package size:</p>
                <p>17 x 1.5 x 13.5 cm</p>
            </div>
        </section>
      </article>
    </>
  );
};
