import { useDispatch, useSelector } from "react-redux";
import { BattleActions } from "../../redux/battle.reducer";
import "./team.css";

/**
 * Team component
 */
export const Team = ({ team }) => {
  const dispatch = useDispatch();

  const fighting = useSelector((state) => state.battleState.fighting);

  const image = (pokemon) => (
    <img
      className="teamImg"
      alt=""
      src={pokemon.image}
      onClick={() => !fighting && dispatch(BattleActions.faintMyTeam(pokemon))}
    />
  );

  return (
    <div className="teamDiv">
      My Team
      <div className="teamGrid">{team.map((p) => image(p))}</div>
    </div>
  );
};

Team.defaultProps = {
  team: [
    {
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
    {
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
    {
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
    {
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
    {
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
  ],
};
