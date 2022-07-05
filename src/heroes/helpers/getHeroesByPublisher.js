
import { heroes } from "../data/heroes"

export const getHeroesByPublisher = ( publusher ) => {
  
    const validPublichers = ['DC Comics', 'Marvel Comics',];

    if( !validPublichers.includes(publusher) ){
        throw new Error(`${ publusher } is not a valid publisher`);
    }

    return heroes.filter( heroe => heroe.publisher === publusher );

}
