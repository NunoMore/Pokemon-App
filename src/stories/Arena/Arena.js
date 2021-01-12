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
  const opponentHP = useSelector((state) => state.battleState.opponentHP);

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
    if (opponentHP <= 0) {
      dispatch(BattleActions.endFight());
    } else {
      const multiplier = currentOpponent.resistant.includes(move.type)
        ? 0.5
        : currentOpponent.weaknesses.includes(move.type)
        ? 2
        : 1;
      const damage = move.damage * multiplier;
      dispatch(BattleActions.attack(damage, true));
    }
  };

  // todo : make opponent attack

  return (
    <div>
      {(currentOpponent && (
        <>
          <div id="oponnent" className="arena">
            <div className="arenaDiv">
              <Team team={opponentTeam} />
              {image(currentOpponent)}
            </div>
            <div>
              {name(currentOpponent)}
              {healthBar(opponentHP)}
            </div>
          </div>
          <div id="player">
            <div className="arena">
              <div>
                {name(currentPokemon)}
                {healthBar(currentHP)}
              </div>
              <div>{image(currentPokemon)}</div>
              <Team team={myTeam} />
            </div>
            <div id="moves">
              {currentPokemon.attacks.fast.map((move) => attackButton(move))}
              {currentPokemon.attacks.special.map((move) => attackButton(move))}
            </div>
          </div>
        </>
      )) ||
        dispatch(BattleActions.setOpponentTeam(newOpponentTeam))}
    </div>
  );
};
