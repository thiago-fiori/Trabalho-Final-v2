import axios from 'axios'


const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
})


export const getPokemonList = async (limit = 20, offset = 0) => {
    const res = await api.get(`/pokemon?limit=${limit}&offset=${offset}`)
    return res.data
}


export const getPokemonDetails = async (nameOrId) => {
    const res = await api.get(`/pokemon/${nameOrId}`)
    return res.data
}