import { Pokemon } from "../graphQL/graphql-types";

export function GetFakeTeam(oneToFive: number): Pokemon[] {
  const arr = [];
  for (let index = 0; index < oneToFive; index++) {
    arr.push(fakePokemon);
  }
  return arr;
}

export const fakePokemon: Pokemon = {
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
};
