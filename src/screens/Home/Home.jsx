import React, { useState } from 'react';
import { Layout } from '../../components/Layout/Layout'
import './Home.css'
import { api } from '../../utils/api'
import { Card } from '../../components/Card/Card'

const Home = () => {

    const [loader, setLoader] = useState(true)
    const [error, setError] = useState(false)
    const [pokemonName, setPokemonName] = useState("")
    const [pokemon, setPokemon] = useState({
        name: "",
        img: "",
        img_back: "",
        hp: "",
        attack: "",
        defense: "",
        types: []
    })

    const searchName = (e) => setPokemonName(e.target.value)

    const searchPokemon = () => {
        api.get(`/pokemon/${pokemonName}`)
            .then(response => {
                const { data } = response
                // console.log(data)
                setPokemon({
                    name: pokemonName,
                    img: data.sprites.front_default,
                    img_back: data.sprites.back_default,
                    hp: data.stats[0].base_stat,
                    attack: data.stats[1].base_stat,
                    defense: data.stats[2].base_stat,
                    types: data.types
                })
                setLoader(false)
            })
            .catch(error => {
                console.log(error)
                setError(true)}
            )
    }

    return(
        <Layout>
            <div className="search-container">
                <h1>Search Pokemon</h1>
                <div className="search-inputs">
                    <input type="text" onChange={searchName} />
                    <button onClick={() => searchPokemon()}>Search</button>
                </div>
                {!loader && <Card pokemon={pokemon} />}
                {error && <p>No se encontro el pokemon buscado</p>}
            </div>
        </Layout>
    )
}

export { Home }