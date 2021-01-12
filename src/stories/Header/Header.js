import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { BattleActions } from "../../redux/battle.reducer";
import { Button } from "../Button/Button";
import "./header.css";

/**
 * Header component
 */
export const Header = ({ fighting, isTeamReady }) => {
  const dispatch = useDispatch();
  const pokemon_logo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png";
  return (
    <div>
      <img className="pokemonLogoImg" alt="" src={pokemon_logo} />
      {(fighting && isTeamReady && (
        <Button
          label="Quit"
          onClick={() => dispatch(BattleActions.endFight())}
        />
      )) ||
        (isTeamReady && (
          <Button
            label="FIGHT"
            onClick={() => dispatch(BattleActions.fight())}
          />
        ))}
    </div>
  );
};

Header.propTypes = {
  /**
   * In battle
   */
  fighting: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  fighting: false,
  isTeamReady: true,
};
