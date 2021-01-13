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
  const opponentTurn = useSelector((state) => state.battleState.opponentTurn);

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
    <Button
      type={move.type}
      label={move.name}
      onClick={() => attack(move, true)}
    />
  );

  const attack = (move, attackOpponent) => {
    const attacker = attackOpponent ? currentPokemon : currentOpponent;
    const target = attackOpponent ? currentOpponent : currentPokemon;
    const targetHP = attackOpponent ? currentOpponentHP : currentHP;
    const targetTeam = attackOpponent ? opponentTeam : myTeam;

    let multiplier = target.resistant.includes(move.type)
      ? 0.5 // resistance
      : target.weaknesses.includes(move.type)
      ? 2 // weakness
      : 1;

    // multiply if stab move
    if (attacker.types.includes(move.type)) {
      multiplier = multiplier * 1.5;
    }

    const damage = move.damage * multiplier;
    if (targetTeam.length === 1 && targetHP - damage <= 0) {
      dispatch(BattleActions.endFight());
    } else if (targetHP - damage <= 0) {
      if (attackOpponent) {
        dispatch(BattleActions.faintOpponentTeam(target));
      } else {
        dispatch(BattleActions.faintMyTeam(target));
      }
    } else {
      dispatch(BattleActions.attack(damage, attackOpponent));
    }
  };

  // todo : make opponent attack
  const makeOpponentAttack = () => {
    const oneOrTwo = Math.ceil(Math.random() * 2);
    const fastMoves = currentOpponent.attacks.fast;
    const specialMoves = currentOpponent.attacks.fast;

    let opponentMove;
    if (oneOrTwo === 1) {
      opponentMove = fastMoves[Math.floor(Math.random() * fastMoves.length)];
    } else {
      opponentMove =
        specialMoves[Math.floor(Math.random() * specialMoves.length)];
    }

    attack(opponentMove, false);
    return true;
  };

  if (opponentTurn) makeOpponentAttack();

  return (
    <div>
      {(currentOpponent && (
        <>
          <div className="bothArenas">
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
              </div>
            </div>
          </div>
          <div className="moves">
            {currentPokemon.attacks.fast.map((move) => attackButton(move))}
            {currentPokemon.attacks.special.map((move) => attackButton(move))}
          </div>
        </>
      )) ||
        dispatch(BattleActions.setOpponentTeam(newOpponentTeam))}
    </div>
  );
};
