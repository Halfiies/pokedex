import React from 'react'
import Card from '../Card/Card';

const Cards = (props) => {

    const {pokemon} = props;

     
    
    return (
        <section className="pokemon">
           <Card  name={pokemon.name} img={pokemon.sprites.front_default} id={pokemon.id} />
        </section>
          
    
    )
}

export default Cards
 