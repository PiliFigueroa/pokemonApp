import React, { useState } from 'react';
import './Card.css'

const Card = ({ pokemon }) => {

    const {name, img, img_back, hp, attack, defense, types} = pokemon
    const [mouse, setMouse] = useState(false)

    const handleMouse = () => setMouse(!mouse)

    return(
        <div className='pokemon-container'>
            <h3>{name}</h3>
            <img onMouseOver={() => handleMouse()} src={mouse ? img : img_back} alt={`Imagen de ${name}`} />
            <ul>
                <li><b>HP:</b> {hp}</li>
                <li><b>Attack:</b> {attack}</li>
                <li><b>Defense:</b> {defense}</li>
            </ul>
            <b>Types:</b>{types.map(({type:{name}}) => name).join(', ')}
        </div>
    )
}

export { Card }