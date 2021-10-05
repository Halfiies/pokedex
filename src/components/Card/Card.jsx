import React from 'react'

const Card = (props) => {

    const {name, img, id} = props;

    return (
        <div>
            <h2 className="name">{name}</h2>
            <img src={img} alt={name}className="pokemon__image" />
            <p className="pokemon__id">{id}</p>
        </div>
    )
}

export default Card
