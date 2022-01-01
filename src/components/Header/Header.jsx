import React from 'react';
import PokeLogo from '../../utils/pokeball.png'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <nav>
            <img src={PokeLogo} alt="pokeball" />
            <div className="nav-buttons">
                <Link to="/" className="links">Home</Link>
                <Link to="/pokemon" className="links">Pokemon</Link>
                <p className="links">Tipos</p>
                <p className="links">Games</p>
            </div>
        </nav>
    )
}

export { Header }