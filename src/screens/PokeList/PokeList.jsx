import React, { useEffect, useState } from 'react';
import { Layout } from '../../components/Layout/Layout'
import { api } from '../../utils/api'
import { Pagination } from '../../components/Pagination/Pagination'
import BeatLoader from 'react-spinners/BeatLoader'

const PokeList = () => {

    const [loader, setLoader] = useState(true)
    const [pokemon, setPokemon] = useState([])
    const [offset, setOffset] = useState(0)

    const getPokemon = (offset) => {
        setLoader(true)
        api.get(`/pokemon?limit=100&offset=${offset}`)
            .then(response => {
                const { data } = response
                setPokemon(data.results)
                setTimeout(() => {
                    setLoader(false)
                }, 2000)
            })
    }
    
    useEffect(() => {
        getPokemon(offset)
    }, [offset])

    const next = () => {
        setOffset(offset + 100)
        getPokemon(offset)
    }
    const prev = () => {
        offset !== 0 && setOffset(offset - 100)
        getPokemon(offset)
    }


    return(
        <Layout>
            {!loader ? pokemon.map((item, index) => <Pagination key={index} item={item} />) : <BeatLoader size={15} margin={2} />}
            <button onClick={() => prev()} style={{width: '50px'}} disabled={offset === 0 && "disabled"}>Prev</button>
            <button onClick={() => next()} style={{width: '50px'}}>Next</button>
        </Layout>
    )
}

export { PokeList }