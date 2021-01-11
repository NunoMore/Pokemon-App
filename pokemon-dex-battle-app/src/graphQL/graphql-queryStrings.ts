import { gql } from "@apollo/client";

export const GetAllPokemonQuery = gql`
  {
    pokemons(first: 151) {
      name
      maxHP
      number
      image
      weaknesses
      types
      resistant
      evolutions {
        name
        image
      }
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
    }
  }
`;

export default GetAllPokemonQuery;
