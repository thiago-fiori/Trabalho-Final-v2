# Pokédex

Uma aplicação web interativa desenvolvida em **React** que consome a [PokeAPI](https://pokeapi.co/).  
O projeto foi desenvolvido como trabalho final da disciplina **Frameworks Web I**.

---

## Funcionalidades

- Listagem de Pokémons com **paginação**
- **Busca global por nome** em toda a Pokédex
- Página de **detalhes** de cada Pokémon com:
  - Nome e imagem oficial
  - Tipos (com cores diferentes)
  - Altura e peso
  - Experiência base
  - Habilidades
  - Estatísticas (HP, ataque, defesa etc.)
  - Descrição oficial (flavor text)
- **Roteamento** entre páginas usando `react-router-dom`
- Feedback de **carregamento**
- Design responsivo

---

## Tecnologias Utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PokeAPI](https://pokeapi.co/)

---

## Estrutura de Pastas

src/
├── components/ # Componentes reutilizáveis
├── pages/ # Páginas (Home e Detalhes)
├── services/ # Arquivos de integração com API
├── App.jsx # Configuração de rotas
└── main.jsx # Entrada principal


---

## Como Executar o Projeto

1. Clone este repositório:

   ```bash
   git clone https://github.com/thiago-fiori/Trabalho-Final-v2.git
   cd pokedex

Instale as dependências:

npm install


Rode o projeto em ambiente de desenvolvimento:

npm run dev


Acesse no navegador:
http://localhost:5173