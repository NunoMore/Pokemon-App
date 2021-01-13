import PropTypes from "prop-types";
import "./button.css";

/**
 * Button component
 */
export const Button = ({ type, onClick, label }) => {
  let srcLink = "";
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
        "https://static.wikia.nocookie.net/pokemongo/images/2/21/Psychic.png/revision/latest/scale-to-width-down/62?cb=20161013133006";
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
    <button type="button" onClick={onClick} className={type}>
      {type && <img id="buttonImg" alt="typeIcon" src={srcLink} />}
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Set of colors based on type eg: Grass - Green
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

Button.defaultProps = {
  label: "",
  type: "",
  onClick: undefined,
};
