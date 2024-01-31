function NavBar(props) {
  const { previousClick, nextClick } = props;

  return (
    <div>
      <button onClick={previousClick}>Précédent</button>
      <button onClick={nextClick}>Suivant</button>
    </div>
  );
}

export default NavBar;
