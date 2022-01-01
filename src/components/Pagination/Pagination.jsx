import React from 'react';
import { Link } from 'react-router-dom'
import './Pagination.css'

const Pagination = ({ item }) => {

    // console.log(item.url)

    return(
        <Link to={`/pokemon/${item.name}`} className="poke-links">{item.name}</Link>
    )
}

export { Pagination }