
import { HeroesCard } from "./HeroesCard";
import { getHeroesByPublisher } from "../helpers"
import { useMemo } from "react";

export const HeroesList = ({ publisher }) => {

    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [publisher])    

    return (

    <div  className="row row-cols-1 row-cols-md-3  g-3">
        {
            heroes.map( heroe => (
                <HeroesCard 
                    key={heroe.id}
                    {...heroe}
                />
            ))
        }
    </div>

  )
}
