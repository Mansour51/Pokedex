function PokemonCard(props) {
  console.log(props);

  return (
    <figure>
      {props.pokemon[0].imgSrc ? (
        <img src={props.pokemon[0].imgSrc} alt={props.pokemon[0].name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{props.pokemon[0].name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
