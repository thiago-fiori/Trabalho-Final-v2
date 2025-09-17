import React from 'react'
import { Card, CardContent, Typography, CardMedia, CardActionArea } from '@mui/material'
import { Link } from 'react-router-dom'


const getIdFromUrl = (url) => {
    const parts = url.split('/').filter(Boolean)
    return parts[parts.length - 1]
}


export default function PokemonCard({ pokemon }) {
    const id = getIdFromUrl(pokemon.url)
    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`


    return (
        <Card sx={{ borderRadius: 3, boxShadow: 3, transition: '0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
            <CardActionArea component={Link} to={`/pokemon/${pokemon.name}`}>
                <CardMedia component="img" height="140" image={img} alt={pokemon.name} />
                <CardContent>
                    <Typography variant="h6" textTransform="capitalize">{pokemon.name}</Typography>
                    <Typography variant="body2">#{id}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}