function NavBar(props) {
  const { pokemonList, pokemonClick } = props;

  return (
    <div>
      {pokemonList.map((pokemon, item) => (
        <button key={item} onClick={() => pokemonClick(item)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}

export default NavBar;
