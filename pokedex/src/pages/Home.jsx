// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { Grid, TextField, Button, Box } from "@mui/material";
import PokemonCard from "../components/PokemonCard";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const pokemonsPerPage = 20;

  // Carrega TODOS os pokémons de uma vez (somente nome e URL)
  useEffect(() => {
    const fetchAll = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1008");
        const data = await res.json();
        setPokemons(data.results);
        setFiltered(data.results);
      } catch (error) {
        console.error("Erro ao buscar pokémons:", error);
      }
    };
    fetchAll();
  }, []);

  // Função de busca
  const handleSearch = () => {
    if (search.trim() === "") {
      setFiltered(pokemons);
    } else {
      const results = pokemons.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
      setFiltered(results);
      setCurrentPage(1); // Reseta para página 1
    }
  };

  // Paginação
  const indexOfLast = currentPage * pokemonsPerPage;
  const indexOfFirst = indexOfLast - pokemonsPerPage;
  const currentPokemons = filtered.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filtered.length / pokemonsPerPage);

  return (
    <Box sx={{ p: 2 }}>
      {/* Barra de busca */}
      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <TextField
          label="Buscar Pokémon pelo nome"
          variant="outlined"
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
        />
        <Button variant="contained" onClick={handleSearch}>
          Buscar
        </Button>
      </Box>

      {/* Lista de pokémons */}
      <Grid container spacing={3} justifyContent="center">
        {currentPokemons.map((pokemon) => (
          <Grid item xs={12} sm={6} md={3} lg={2} key={pokemon.name}>
            <PokemonCard pokemon={pokemon} />
          </Grid>
        ))}
      </Grid>

      {/* Paginação */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3, gap: 2 }}>
        <Button
          variant="outlined"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Anterior
        </Button>
        <Button
          variant="outlined"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Próxima
        </Button>
      </Box>
    </Box>
  );
}
