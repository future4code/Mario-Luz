import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const MainContainer = styled.div `
margin:auto;
max-width:1000px;
padding: 0;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-image:url("https://i.pinimg.com/originals/14/7b/98/147b9882b3782651f85f034b3ee8aa5c.jpg")


`;

const EstiloDiv = styled.div `
border: 1px solid black ;
background-color: #1e272e;
margin: 15px;
padding: 1%;
width: 700px;
height: 500px;
display: flex;
flex-direction: column;
align-items: center;
`;

const TituloPokemon = styled.img `
width: 300px;
height: 200px;
margin: 10px;
`;

const DivPokemon = styled.div `
border-radius: 50px ;
background-color: #ffda79;
width: 300px;
height: 300px;
display: flex;
justify-content: center;
margin-top: 5%;
`;

const DivHabilidades = styled.div `
border-radius: 50px ;
background-color: #ffda79;
width: 180px;
height: 50px;
display: flex;
justify-content: center;

`;


const TextoHabilidades = styled.h4 `
color: white;
`;
const imgPokemon = styled.img `
height:250px
`


const baseURL = 'https://pokeapi.co/api/v2'

class Pokedex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todosPokemons: [],
            selecionePokemon: "",
            habilidade: ""
        }
    }

    buscarPokemons = async() => {
        const response = await axios.get(`${baseURL}/pokemon?limit=151`)
        this.setState({ todosPokemons: response.data.results })

    }

    componentDidMount() {
        this.buscarPokemons();
    }
    cons
    buscarDetalhes = async(event) => {
        const detalhesURL = event.target.value;
        const response = await axios.get(detalhesURL);
        const fotoURL = response.data.sprites.front_default;
        this.setState({ selecionePokemon: fotoURL });
        const habilidadePK = response.data.abilities[0].ability.name;
        this.setState({ habilidade: habilidadePK });
    }

    render() {
        return ( <
                MainContainer >

                <
                TituloPokemon src = "http://1.bp.blogspot.com/-0V4itR_v87M/UtsCF-ehNYI/AAAAAAAABjU/UEQ5Jiy_85o/s1600/pokedex-3d-logo.png"
                alt = "Título Pokémon" / >
                <
                EstiloDiv >
                <
                DivPokemon > {
                    this.state.selecionePokemon && < img src = { this.state.selecionePokemon }
                    alt = "Pokémon" / >
                } <
                /DivPokemon> <
                TextoHabilidades > Atackk < /TextoHabilidades> <
                DivHabilidades >
                <
                p > { this.state.habilidade } < /p> < /
                DivHabilidades > < br / >
                <
                select onChange = { this.buscarDetalhes } >
                <
                option > Escolha um Pokémon < /option> {
                this.state.todosPokemons.map((pokemon) => ( <
                    option value = { pokemon.url } > { pokemon.name } < /option>
                ))
            } <
            /select> < /
        EstiloDiv >

            <
            /MainContainer>


    )
}
}

export default Pokedex;