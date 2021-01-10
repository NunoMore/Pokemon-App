import PropTypes from "prop-types";
import "./view.css";

/**
 * View component
 */
export const View = ({ detailed, type, pokemonInfo }) => {
  let srcLink = ""; // todo : change links to backgrounds :-D
  switch (type) {
    case "Bug":
      srcLink =
        "https://static.wikia.nocookie.net/pokemongo/images/7/7d/Bug.png/revision/latest/scale-to-width-down/62?cb=20161013132753";
      break;
    case "Dark":
      srcLink =
        "https://static.wikia.nocookie.net/pokemongo/images/0/0e/Dark.png/revision/latest/scale-to-width-down/62?cb=20161013132800";
      break;
    case "Dragon":
      srcLink =
        "https://static.wikia.nocookie.net/pokemongo/images/c/c7/Dragon.png/revision/latest/scale-to-width-down/62?cb=20161013132807";
      break;
    case "Electric":
      srcLink =
        "https://static.wikia.nocookie.net/pokemongo/images/2/2f/Electric.png/revision/latest/scale-to-width-down/62?cb=20161013132813";
      break;
    case "Fairy":
      srcLink =
        "https://static.wikia.nocookie.net/pokemongo/images/4/43/Fairy.png/revision/latest/scale-to-width-down/62?cb=20161013132820";
      break;
    case "Fighting":
      srcLink =
        "https://static.wikia.nocookie.net/pokemongo/images/3/30/Fighting.png/revision/latest/scale-to-width-down/62?cb=20161013132827";
      break;
    case "Fire":
      srcLink =
        "https://static.wikia.nocookie.net/pokemongo/images/3/30/Fire.png/revision/latest/scale-to-width-down/62?cb=20161013132833";
      break;
    case "Flying":
      srcLink =
        "https://static.wikia.nocookie.net/pokemongo/images/7/7f/Flying.png/revision/latest/scale-to-width-down/62?cb=20161013132839";
      break;
    case "Ghost":
      srcLink =
        "https://static.wikia.nocookie.net/pokemongo/images/a/ab/Ghost.png/revision/latest/scale-to-width-down/62?cb=20161013132847";
      break;
    case "Grass":
      srcLink =
        "https://static.wikia.nocookie.net/pokemongo/images/c/c5/Grass.png/revision/latest/scale-to-width-down/62?cb=20161013132855";
      break;
    case "Ground":
      srcLink =
        "https://static.wikia.nocookie.net/pokemongo/images/8/8f/Ground.png/revision/latest/scale-to-width-down/62?cb=20161013132902";
      break;
    case "Ice":
      srcLink =
        "https://static.wikia.nocookie.net/pokemongo/images/7/77/Ice.png/revision/latest/scale-to-width-down/62?cb=20161013132908";
      break;
    case "Normal":
      srcLink =
        "https://static.wikia.nocookie.net/pokemongo/images/f/fb/Normal.png/revision/latest/scale-to-width-down/62?cb=20161013132914";
      break;
    case "Poison":
      srcLink =
        "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png/revision/latest/scale-to-width-down/62?cb=20161013133014";
      break;
    case "Psychic":
      srcLink =
        "https://static.wikia.nocookie.net/pokemongo/images/f/f8/Type_Background_Psychic.png/revision/latest/scale-to-width-down/62?cb=20171026003814";
      break;
    case "Rock":
      srcLink =
        "https://static.wikia.nocookie.net/pokemongo/images/0/0b/Rock.png/revision/latest/scale-to-width-down/62?cb=20161013133022";
      break;
    case "Steel":
      srcLink =
        "https://static.wikia.nocookie.net/pokemongo/images/c/c9/Steel.png/revision/latest/scale-to-width-down/62?cb=20161013133029";
      break;
    case "Water":
      srcLink =
        "https://static.wikia.nocookie.net/pokemongo/images/9/9d/Water.png/revision/latest/scale-to-width-down/62?cb=20161013133222";
      break;
    default:
      srcLink = "";
      break;
  }

  return (
    <div
      id="viewDiv"
      style={{
        backgroundImage: "url(" + srcLink + ")",
      }}
    >
      {detailed && <p className={type}>{pokemonInfo.name}</p>}
      <img alt="Pokemon" src={pokemonInfo.image} />
      {!detailed && <p className={type}>{pokemonInfo.name}</p>}
      {detailed && <div></div>}
    </div>
  );
};

View.propTypes = {
  /**
   * Detailed view
   */
  detailed: PropTypes.bool.isRequired,
  /**
   * Set colors and icon based on type eg: Grass - Green
   */
  type: PropTypes.oneOf([
    "",
    "Bug",
    "Dark",
    "Dragon",
    "Electric",
    "Fairy",
    "Fighting",
    "Fire",
    "Flying",
    "Ghost",
    "Grass",
    "Ground",
    "Ice",
    "Normal",
    "Poison",
    "Psychic",
    "Rock",
    "Steel",
    "Water",
  ]),
};

View.defaultProps = {
  detailed: false,
  type: "",
  pokemonInfo: {
    name: "Bulbasaur",
    image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
    weight: {
      minimum: "6.04kg",
      maximum: "7.76kg",
    },
    height: {
      minimum: "0.61m",
      maximum: "0.79m",
    },
    attacks: {
      fast: [
        {
          name: "Tackle",
          type: "Normal",
          damage: 12,
        },
        {
          name: "Vine Whip",
          type: "Grass",
          damage: 7,
        },
      ],
      special: [
        {
          name: "Power Whip",
          type: "Grass",
          damage: 70,
        },
        {
          name: "Seed Bomb",
          type: "Grass",
          damage: 40,
        },
        {
          name: "Sludge Bomb",
          type: "Poison",
          damage: 55,
        },
      ],
    },
  },
};
