import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Chip,
  CircularProgress,
  Grid,
} from "@mui/material";

export default function Details() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await res.json();
      setPokemon(data);
    };
    fetchPokemon();
  }, [name]);

  if (!pokemon) return <CircularProgress />;

  return (
    <Box sx={{ p: 4, textAlign: "center", color: "text.primary" }}>
      <Typography variant="h3" sx={{ mb: 2, fontWeight: "bold" }}>
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </Typography>

      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
        width={200}
        height={200}
      />

      <Box sx={{ mt: 3 }}>
        <Typography variant="h5" sx={{ mb: 1 }}>
          Tipos
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
          {pokemon.types.map((t) => (
            <Chip key={t.type.name} label={t.type.name} />
          ))}
        </Box>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Stats
        </Typography>
        <Grid container spacing={1} justifyContent="center">
          {pokemon.stats.map((s) => (
            <Grid item xs={6} sm={4} key={s.stat.name}>
              <Typography>
                <strong>{s.stat.name}:</strong> {s.base_stat}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
