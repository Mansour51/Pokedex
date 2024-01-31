function NavBar(props) {
  const { pokemonList, pokemonClick } = props;

  const handlePokemonClick = (item) => {
    pokemonClick(item);

    const selectedPokemon = pokemonList[item].name;
    if (selectedPokemon === "pikachu") {
      alert("pika pikachu !!!");
    }
  };

  return (
    <div>
      {pokemonList.map((pokemon, item) => (
        <button key={item} onClick={() => handlePokemonClick(item)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}

export default NavBar;
