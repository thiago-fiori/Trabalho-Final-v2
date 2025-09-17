import React from 'react'
import { AppBar, Toolbar, Typography, Container } from '@mui/material'
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component={Link}
                        to="/"
                        sx={{ color: 'inherit', textDecoration: 'none' }}
                    >
                        Pokédex
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}