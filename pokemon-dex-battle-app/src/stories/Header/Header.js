import { useDispatch, useSelector } from "react-redux";
import { PokemonAppActions } from "../../redux/pokemonApp.reducer";
import { Button } from "../Button/Button";
import "./header.css";

/**
 * Header component
 */
export const Header = () => {
  const dispatch = useDispatch();
  const opponentNumber = Math.round(Math.random() * 150);
  const allPokemon = useSelector((state) => state.pokemonAppState.allPokemon);
  const selectedPokemon = useSelector(
    (state) => state.pokemonAppState.selectedPokemon
  );
  const pokemon_logo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png";
  return (
    <div id="headerDiv">
      <img id="pokemonLogoImg" alt="" src={pokemon_logo} />
      <Button
        label="FIGHT"
        onClick={() =>
          dispatch(PokemonAppActions.fight(allPokemon[opponentNumber]))
        }
      />
    </div>
  );
};
