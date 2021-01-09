import { gql } from "@apollo/client";

export const GetAllPokemonQuery = gql`
  {
    pokemons(first: 151) {
      id
      name
      maxCP
      evolutions {
        name
      }
      evolutionRequirements {
        name
        amount
      }
      classification
      image
      fleeRate
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
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