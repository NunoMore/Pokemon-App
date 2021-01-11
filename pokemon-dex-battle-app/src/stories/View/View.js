import PropTypes from "prop-types";
import "./view.css";

/**
 * View component
 */
export const View = ({ detailed, pokemonInfo }) => {
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

  const details = [];
  if (detailed && pokemonInfo && typeof pokemonInfo === "object") {
    Object.keys(pokemonInfo).forEach((entry) => {
      if (entry && entry !== "name" && entry !== "image") {
        const entryObj = pokemonInfo[entry];
        if (entryObj && typeof entryObj === "object") {
          details.push(<h3>{entry + " :"}</h3>);
          Object.keys(entryObj).forEach((subEntry) => {
            const subEntryObj = entryObj[subEntry];
            if (subEntryObj && typeof subEntryObj === "object") {
              details.push(<h4>{subEntry + " :"}</h4>);
              Object.keys(subEntryObj).forEach((subSubEntry) => {
                const subSubEntryObj = subEntryObj[subSubEntry];
                if (subSubEntryObj && typeof subSubEntryObj === "object") {
                  details.push(<h5>{subSubEntry + " :"}</h5>);
                  Object.keys(subSubEntryObj).forEach((subSubSubEntry) => {
                    details.push(
                      <h6>
                        {subSubSubEntry +
                          " : " +
                          subSubEntryObj[subSubSubEntry]}
                      </h6>
                    );
                  });
                } else {
                  details.push(
                    <h5>{subSubEntry + " : " + subSubEntryObj[subSubEntry]}</h5>
                  );
                }
              });
            } else {
              details.push(<h4>{subEntry + " : " + subEntryObj[subEntry]}</h4>);
            }
          });
        } else {
          details.push(<h3>{entry + " : " + entryObj[entry]}</h3>);
        }
      }
    });
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
      {detailed && <p className={type}>{pokemonInfo.name}</p>}
      <img id="pokeImg" alt="Pokemon" src={pokemonInfo.image} />
      {!detailed && <p>{pokemonInfo.name}</p>}
      {detailed && <div id="detailedView">{details}</div>}
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
    types: ["Grass"],
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
