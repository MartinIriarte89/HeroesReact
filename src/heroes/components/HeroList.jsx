import { useMemo } from "react";
import { getHeroesByPublisher } from "../"
import { HeroCard } from "./";

export const HeroList = ({ publisher }) => {

    const heroesList = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            {
                heroesList.map(hero => <HeroCard key={hero.id} hero={hero} />)
            }
        </div>
    )
}
