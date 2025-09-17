import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getPokemonDetails } from '../services/pokeService'
import { Container, Typography, CircularProgress, Chip, Stack } from '@mui/material'


export default function Details() {
    const { name } = useParams()
    const [pokemon, setPokemon] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    useEffect(() => {
        let isMounted = true
        const fetch = async () => {
            setLoading(true)
            setError(null)
            try {
                const data = await getPokemonDetails(name)
                if (isMounted) setPokemon(data)
            } catch (err) {
                setError('Não foi possível carregar detalhes.')
            } finally {
                setLoading(false)
            }
        }


        fetch()
        return () => { isMounted = false }
    }, [name])


    if (loading) return <Container sx={{ mt: 4 }}><CircularProgress /></Container>
    if (error) return <Container sx={{ mt: 4 }}>{error}</Container>
    if (!pokemon) return null


    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" textTransform="capitalize">{pokemon.name}</Typography>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />


            <Typography variant="h6">Tipos</Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                {pokemon.types.map(t => <Chip key={t.type.name} label={t.type.name} />)}
            </Stack>


            <Typography variant="h6" sx={{ mt: 2 }}>Stats</Typography>
            <div>
                {pokemon.stats.map(s => (
                    <div key={s.stat.name}><strong>{s.stat.name}:</strong> {s.base_stat}</div>
                ))}
            </div>
        </Container>
    )
}