import React, { useState, useEffect } from 'react'
import { Container, TextField, Button, CircularProgress, Grid } from '@mui/material'
import { getPokemonList } from '../services/pokeService'
import PokemonCard from '../components/PokemonCard'


export default function Home() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [pokemons, setPokemons] = useState([])
    const [page, setPage] = useState(0)
    const limit = 20
    const [search, setSearch] = useState('')


    useEffect(() => {
        let isMounted = true
        const fetch = async () => {
            setLoading(true)
            setError(null)
            try {
                const data = await getPokemonList(limit, page * limit)
                if (isMounted) setPokemons(data.results)
            } catch (err) {
                setError('Erro ao buscar Pokémons. Tente novamente.')
            } finally {
                setLoading(false)
            }
        }


        fetch()
        return () => { isMounted = false }
    }, [page])


    const filtered = pokemons.filter(p => p.name.includes(search.toLowerCase()))


    return (
        <Container sx={{ mt: 4 }}>
            <TextField label="Buscar por nome" value={search} onChange={(e) => setSearch(e.target.value)} fullWidth />


            {loading ? <CircularProgress sx={{ mt: 2 }} /> : error ? <div>{error}</div> : (
                <Grid container spacing={3} justifyContent="center" sx={{ mt: 2 }}>
                    {filtered.map(p => (
                        <Grid item xs={12} sm={6} md={3} lg={2} key={p.name}>
                            <PokemonCard pokemon={p} />
                        </Grid>
                    ))}
                </Grid>
            )}


            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
                <Button variant="contained" disabled={page === 0} onClick={() => setPage(page - 1)}>Anterior</Button>
                <Button variant="contained" onClick={() => setPage(page + 1)}>Próxima</Button>
            </div>
        </Container>
    )
}