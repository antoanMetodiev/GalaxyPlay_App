
import style from "../Details/Details.module.css";

import { GameplaySection } from "./structure/GameplaySection/GameplaySection";
import { Description } from "./structure/Description/Description";

export const Details = ({
    rewiew,
}) => {

    

    return (

        <section className={style['details-container']}>

            <GameplaySection rewiew={rewiew} />

            <Description rewiew={rewiew} />




        </section>

    );
}