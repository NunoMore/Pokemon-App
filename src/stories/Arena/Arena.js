import { useDispatch, useSelector } from "react-redux";
import { BattleActions } from "../../redux/battle.reducer";
import { Button } from "../Button/Button";
import { Team } from "../Team/Team";
import "./arena.css";

/**
 * Arena component
 */
export const Arena = () => {
  const dispatch = useDispatch();
  const allPokemon = useSelector((state) => state.homeState.allPokemon);

  const currentHP = useSelector((state) => state.battleState.currentHP);
  const currentOpponentHP = useSelector(
    (state) => state.battleState.currentOpponentHP
  );

  const myTeam = useSelector((state) => state.battleState.myTeam);
  const opponentTeam = useSelector((state) => state.battleState.opponentTeam);

  const currentPokemon = useSelector(
    (state) => state.battleState.currentPokemon
  );
  const currentOpponent = useSelector(
    (state) => state.battleState.currentOpponent
  );

  // todo : create team based on selectedPokemon weakness and resistance ; set dificulty
  // create opponent team
  const newOpponentTeam = [];
  while (newOpponentTeam.length < 5) {
    const randomNumber = Math.round(Math.random() * 150);
    const newOpponent = allPokemon[randomNumber];
    if (!newOpponentTeam.find((p) => p.name === newOpponent.name)) {
      newOpponentTeam.push(newOpponent);
    }
  }

  const image = (pokemon) => (
    <img className="arenaImg" alt="" src={pokemon.image} />
  );
  const name = (pokemon) => <p>{pokemon.name}</p>;
  const healthBar = (hpValue) => <p>{hpValue}</p>; // todo : improve this
  const attackButton = (move) => (
    <Button type={move.type} label={move.name} onClick={() => attack(move)} />
  );
  const attack = (move) => {
    const multiplier = currentOpponent.resistant.includes(move.type)
      ? 0.5
      : currentOpponent.weaknesses.includes(move.type)
      ? 2
      : 1;
    const damage = move.damage * multiplier;
    if (opponentTeam.length === 1 && currentOpponentHP - damage <= 0) {
      dispatch(BattleActions.endFight());
    } else if (currentOpponentHP - damage <= 0) {
      dispatch(BattleActions.faintOpponentTeam(currentOpponent));
    } else {
      dispatch(BattleActions.attack(damage, true));
    }
  };

  // todo : make opponent attack

  return (
    <div>
      {(currentOpponent && ( // bug with currentOpponent : when undefined => sets a new team...
        <>
          <div id="oponnent" className="arena">
            <div className="arenaColumn">
              <Team team={opponentTeam} />
              {image(currentOpponent)}
            </div>
            <div className="arenaColumn">
              {name(currentOpponent)}
              {healthBar(currentOpponentHP)}
            </div>
          </div>
          <div id="player" className="arena">
            <div className="arenaColumn">
              {name(currentPokemon)}
              {healthBar(currentHP)}
            </div>
            <div className="arenaColumn">
              {image(currentPokemon)}
              <Team team={myTeam} />
              <div id="moves">
                {currentPokemon.attacks.fast.map((move) => attackButton(move))}
                {currentPokemon.attacks.special.map((move) =>
                  attackButton(move)
                )}
              </div>
            </div>
          </div>
        </>
      )) ||
        dispatch(BattleActions.setOpponentTeam(newOpponentTeam))}
    </div>
  );
};
