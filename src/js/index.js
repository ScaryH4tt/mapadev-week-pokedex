/* 
qdno clicar no pokemon na listagem temos que esconder o pokemons aberto e mostrar o cartao correspondente ao que foi selecionadao na listagem

pra isso vamos precisar trabalhar com dois elementos
1- listagem
2- cartao pokemon

precisamos criar 2 variaveis nos JS para trabalhar com os elementos da tela

vamos precisar trabalhar com um envento de clique feito pelo usuario na listagem de pokemons

- remover a classe aberto  só do cartao que esta aberto
- ao clicar num pokemon da listagem pegamos o ID desse pokemon para saber qual cartao mostrar
- remover a classe ativa que marca o pokemon selecionado
- adicionar a classe ativa no icone da lista selecionado
*/

/* precisamos criar 2 variaveis nos JS para trabalhar com os elementos da tela
*/

const listaSelecaoPokemons = document.querySelectorAll(".pokemon")
const pokemonsCard = document.querySelectorAll(".cartao-pokemon")


listaSelecaoPokemons.forEach(pokemon  => {
    //vamos precisar trabalhar com um envento de clique feito pelo usuario na listagem de pokemons

    pokemon.addEventListener("click", () => {
        console.log(pokemon)
        //- remover a classe aberto  só do cartao que esta aberto
        const cartaoPokemonAberto = document.querySelector(".aberto")
        cartaoPokemonAberto.classList.remove("aberto")
        //- ao clicar num pokemon da listagem pegamos o ID desse pokemon para saber qual cartao mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = "cartao-" + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add("aberto")

        //- remover a classe ativa que marca o pokemon selecionado
        const pokemonAtivoNaListagem = document.querySelector(".ativo")
        pokemonAtivoNaListagem.classList.remove("ativo")

        //- adicionar a classe ativa no icone da lista selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add("ativo")

    })
})