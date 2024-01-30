import PropTypes from "prop-types";
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

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};

export default PokemonCard;
