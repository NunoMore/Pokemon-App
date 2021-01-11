import { Button } from "../Button/Button";
import "./arena.css";

/**
 * Arena component
 */
export const Arena = ({ pokemonInfo, opponentInfo }) => {
  const image = (pokemon) => (
    <img className="arenaImg" alt="" src={pokemon.image} />
  );
  const name = (pokemon) => <p>{pokemon.name}</p>;
  const healthBar = (pokemon) => <p>{pokemon.maxHP}</p>;
  const attackButton = (move) => (
    <Button type={move.type} label={move.name} onClick={attack(move)} />
  );
  const attack = (move) => {
    console.log(move.damage);
  };

  return (
    <div>
      <div id="oponnent" className="arena">
        <div className="arenaDiv">{image(opponentInfo)}</div>
        <div>
          {name(opponentInfo)}
          {healthBar(opponentInfo)}
        </div>
      </div>
      <div id="player">
        <div className="arena">
          <div>
            {name(pokemonInfo)}
            {healthBar(pokemonInfo)}
          </div>
          <div>{image(pokemonInfo)}</div>
        </div>
        <div id="moves">
          {pokemonInfo.attacks.fast.map((move) => attackButton(move))}
          {pokemonInfo.attacks.special.map((move) => attackButton(move))}
        </div>
      </div>
    </div>
  );
};

Arena.defaultProps = {
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
