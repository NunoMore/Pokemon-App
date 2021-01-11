import { useDispatch, useSelector } from "react-redux";
import { BattleActions } from "../../redux/battle.reducer";
import { PokemonAppActions } from "../../redux/home.reducer";
import { Button } from "../Button/Button";
import "./header.css";

/**
 * Header component
 */
export const Header = () => {
  const dispatch = useDispatch();
  const fighting = useSelector((state) => state.battleState.fighting);
  const selectedPokemon = useSelector(
    (state) => state.sidePanelState.selectedPokemon
  );
  const pokemon_logo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png";
  return (
    <div id="headerDiv">
      <img id="pokemonLogoImg" alt="" src={pokemon_logo} />
      {(fighting && selectedPokemon && (
        <Button
          label="Quit"
          onClick={() => dispatch(BattleActions.endFight())}
        />
      )) ||
        (selectedPokemon && (
          <Button
            label="FIGHT"
            onClick={() => dispatch(BattleActions.fight())}
          />
        ))}
    </div>
  );
};
