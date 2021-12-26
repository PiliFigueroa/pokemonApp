import React from 'react';
import PokeLogo from '../../utils/pokeball.png'
import './Header.css'

const Header = () => {
    return(
        <nav>
            <img src={PokeLogo} alt="pokeball" />
            <div className="nav-buttons">
                <p>Home</p>
                <p>Pokemon</p>
                <p>Tipos</p>
                <p>Games</p>
            </div>
        </nav>
    )
}

export { Header }