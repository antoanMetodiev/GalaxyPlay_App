
import style from "../../Details.module.css";
import ReactPlayer from "react-player";


export const GameplaySection = ({
    rewiew,
}) => {

    const gameplayVideosUrls = rewiew.gameplay.split(',# ');
    let gameplayVideo = gameplayVideosUrls[0];
    let part1Video = gameplayVideosUrls[1];

    return (

        <article className={style['gameplay-videos-wrapper']}>

                <h2 className={style['gameplay-videos-title']}>Gameplay Videos:</h2>
                <div className={style['gameplay-videos-container']}>

                    <div className={style['player-container']}>
                        <h3>One Of The Cool Missions:</h3>
                        <ReactPlayer
                            url={gameplayVideo}
                            width="100%"
                            height="100%"
                            controls
                        />
                    </div>

                    <div className={style['player-container']}>
                        <h3>Part 1:</h3>
                        <ReactPlayer
                            url={part1Video}
                            width="100%"
                            height="100%"
                            controls
                        />
                    </div>
                    
                    <div className={style['player-container']}>
                        <h3>Annoying Trailer:</h3>
                        <ReactPlayer
                            url={rewiew.trailer}
                            width="100%"
                            height="100%"
                            controls
                        />
                    </div>
                </div>
            </article>
    );
}