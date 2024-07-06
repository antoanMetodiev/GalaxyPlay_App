import style from "../Body/Body.module.css";
import { GameList } from "./GameList/GameList";
import { CreateGame } from "./CreateGame/CreateGame";
import { useEffect, useState } from "react";
import { database, ref, onValue } from "../../../../../../firebase/firebase";

export const Body = () => {
    const [gameList, setGameList] = useState([]);

    useEffect(() => {
        const gameListRef = ref(database, 'game/ps5-games');

        const unsubscribe = onValue(gameListRef, (snapshot) => {
            const games = snapshot.val();
            if (games) {
                const gameArray = Object.keys(games).map((key) => ({
                    _id: key,
                    ...games[key]
                }));
                setGameList(gameArray);
            } else {
                setGameList([]);
            }
        });

        return () => {
            // Cleanup функция
            unsubscribe();
        };
    }, []);

    function createGameHandler(newGame) {
        setGameList(gameList => [...gameList, newGame]);
    };

    return (
        <>
            <CreateGame createGameHandler={createGameHandler} />

            <article>
                <div className={style["background"]}></div>
                <div className={style["content"]}>
                    <GameList />
                </div>
            </article>
        </>
    );
};
