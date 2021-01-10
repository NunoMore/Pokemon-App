import PropTypes from "prop-types";
import { Button } from "../Button/Button";
import "./header.css";

/**
 * Header component
 */
export const Header = () => {
  const pokemon_logo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png";
  return (
    <div id="headerDiv">
      <img id='pokemonLogoImg' alt="" src={pokemon_logo} />
      <Button label="FIGHT" />
    </div>
  );
};