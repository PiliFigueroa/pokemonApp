import React from 'react';
import './Header.css'

const Header = () => {
    return(
        <nav>
            <h3>Logo</h3>
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