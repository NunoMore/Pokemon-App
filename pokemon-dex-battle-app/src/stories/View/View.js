import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { SidePanelActions } from "../../redux/side-panel.reducer";
import { Button } from "../Button/Button";
import "./view.css";

/**
 * View component
 */
export const View = ({ detailed, pokemonInfo }) => {
  const dispatch = useDispatch();
  const allPokemon = useSelector((state) => state.homeState.allPokemon);
  const type = pokemonInfo.types[0];
  let srcLink = "";
  switch (type) {
    case "Bug":
      srcLink =
        "https://static.wikia.nocookie.net/pokemongo/images/0/05/Type_Background_Bug.png/revision/latest/scale-to-width-down/62?cb=20171026003543";
      break;
    case "Dark":
      srcLink =
        "https://static.wikia.nocookie.net/pokemongo/images/f/f5/Type_Background_Dark.png/revision/latest/scale-to-width-down/62?cb=20171026003554";
      break;
    case "Dragon":
      srcLink =
        "https://static.wikia.nocookie.net/pokemongo/images/2/28/Type_Background_Dragon.png/revision/latest/scale-to-width-down/62?cb=20171026003601";
      break;
    case "Electric":
      srcLink =
        "https://static.wikia.nocookie.net/pokemongo/images/6/6c/Type_Background_Electric.png/revision/latest/scale-to-width-down/62?cb=20171026003611";
      break;
    case "Fairy":
      srcLink =
        "https://static.wikia.nocookie.net/pokemongo/images/1/19/Type_Background_Fairy.png/revision/latest/scale-to-width-down/62?cb=20171026003635";
      break;
    case "Fighting":
      srcLink =
        "https://static.wikia.nocookie.net/pokemongo/images/1/17/Type_Background_Fighting.png/revision/latest/scale-to-width-down/62?cb=20171026003644";
      break;
    case "Fire":
      srcLink =
        "https://static.wikia.nocookie.net/pokemongo/images/6/64/Type_Background_Fire.png/revision/latest/scale-to-width-down/62?cb=20171026003653";
      break;
    case "Flying":
      srcLink =
        "https://static.wikia.nocookie.net/pokemongo/images/6/65/Type_Background_Flying.png/revision/latest/scale-to-width-down/62?cb=20171026004151";
      break;
    case "Ghost":
      srcLink =
        "https://static.wikia.nocookie.net/pokemongo/images/4/44/Type_Background_Ghost.png/revision/latest/scale-to-width-down/62?cb=20171026003713";
      break;
    case "Grass":
      srcLink =
        "https://static.wikia.nocookie.net/pokemongo/images/9/92/Type_Background_Grass.png/revision/latest/scale-to-width-down/62?cb=20171026003722";
      break;
    case "Ground":
      srcLink =
        "https://static.wikia.nocookie.net/pokemongo/images/a/a3/Type_Background_Ground.png/revision/latest/scale-to-width-down/62?cb=20171026003731";
      break;
    case "Ice":
      srcLink =
        "https://static.wikia.nocookie.net/pokemongo/images/8/85/Type_Background_Ice.png/revision/latest/scale-to-width-down/62?cb=20171026003739";
      break;
    case "Normal":
      srcLink =
        "https://static.wikia.nocookie.net/pokemongo/images/f/f6/Type_Background_Normal.png/revision/latest/scale-to-width-down/62?cb=20171026003751";
      break;
    case "Poison":
      srcLink =
        "https://static.wikia.nocookie.net/pokemongo/images/d/db/Type_Background_Poison.png/revision/latest/scale-to-width-down/62?cb=20171026003759";
      break;
    case "Psychic":
      srcLink =
        "https://static.wikia.nocookie.net/pokemongo/images/f/f8/Type_Background_Psychic.png/revision/latest/scale-to-width-down/62?cb=20171026003814";
      break;
    case "Rock":
      srcLink =
        "https://static.wikia.nocookie.net/pokemongo/images/5/5d/Type_Background_Rock.png/revision/latest/scale-to-width-down/62?cb=20171026003823";
      break;
    case "Steel":
      srcLink =
        "https://static.wikia.nocookie.net/pokemongo/images/3/30/Type_Background_Steel.png/revision/latest/scale-to-width-down/62?cb=20171026003833";
      break;
    case "Water":
      srcLink =
        "https://static.wikia.nocookie.net/pokemongo/images/d/d2/Type_Background_Water.png/revision/latest/scale-to-width-down/62?cb=20171026003849";
      break;
    default:
      srcLink = "";
      break;
  }

  return (
    <div
      id="viewDiv"
      className={type + (detailed ? " detailed" : "")}
      style={{
        maxWidth: detailed ? "100%" : "200px",
        maxHeight: detailed ? "100%" : "250px",
        backgroundImage: "url(" + srcLink + ")",
      }}
    >
      {detailed && (
        <div className="mainGrid">
          <p className={type}>{pokemonInfo.name + " " + pokemonInfo.number}</p>
          <Button
            type={type}
            label="X"
            onClick={() => dispatch(SidePanelActions.closeSidePanel())}
          />
        </div>
      )}
      <img
        id="pokeImg"
        alt="Pokemon"
        src={pokemonInfo.image}
        onClick={() => dispatch(SidePanelActions.selectPokemon(pokemonInfo))}
      />
      {detailed ? (
        <div className="grid">
          {pokemonInfo.evolutions &&
            pokemonInfo.evolutions.map((ev) => (
              <img
                className="evolutionImg"
                alt=""
                src={ev.image}
                onClick={() =>
                  dispatch(
                    SidePanelActions.selectPokemon(
                      allPokemon.find((p) => p.name === ev.name)
                    )
                  )
                }
              />
            ))}
        </div>
      ) : (
        <p>{pokemonInfo.name}</p>
      )}
    </div>
  );
};

View.propTypes = {
  /**
   * Detailed view
   */
  detailed: PropTypes.bool.isRequired,
};

View.defaultProps = {
  detailed: false,
  pokemonInfo: {
    name: "Charmander",
    number: "004",
    maxHP: 955,
    image: "https://img.pokemondb.net/artwork/charmander.jpg",
    weaknesses: ["Water", "Ground", "Rock"],
    types: ["Fire"],
    resistant: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
    evolutions: [
      {
        name: "Charmeleon",
        image: "https://img.pokemondb.net/artwork/charmeleon.jpg",
      },
      {
        name: "Charizard",
        image: "https://img.pokemondb.net/artwork/charizard.jpg",
      },
    ],
    attacks: {
      fast: [
        {
          name: "Ember",
          type: "Fire",
          damage: 10,
        },
        {
          name: "Scratch",
          type: "Normal",
          damage: 6,
        },
      ],
      special: [
        {
          name: "Flame Burst",
          type: "Fire",
          damage: 30,
        },
        {
          name: "Flame Charge",
          type: "Fire",
          damage: 25,
        },
        {
          name: "Flamethrower",
          type: "Fire",
          damage: 55,
        },
      ],
    },
  },
};
