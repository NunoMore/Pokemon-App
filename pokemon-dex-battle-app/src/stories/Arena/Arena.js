import { useDispatch, useSelector } from "react-redux";
import { BattleActions } from "../../redux/battle.reducer";
import { Button } from "../Button/Button";
import "./arena.css";

/**
 * Arena component
 */
export const Arena = () => {
  const dispatch = useDispatch();
  const allPokemon = useSelector((state) => state.homeState.allPokemon);
  const currentHP = useSelector((state) => state.battleState.currentHP);
  const opponentHP = useSelector((state) => state.battleState.opponentHP);

  // todo : choose based on selectedPokemon weakness and resistance ; set dificulty
  const currentPokemon = useSelector(
    (state) => state.battleState.currentPokemon
  );
  const opponent = useSelector((state) => state.battleState.opponent);
  const opponentNumber = Math.round(Math.random() * 150);
  const newOpponent = allPokemon[opponentNumber];

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
      const multiplier = opponent.resistant.includes(move.type)
        ? 0.5
        : opponent.weaknesses.includes(move.type)
        ? 2
        : 1;
      const damage = move.damage * multiplier;
      dispatch(BattleActions.attack(damage, true));
    }
  };

  // todo : make opponent attack

  return (
    <div>
      {(opponent && (
        <>
          <div id="oponnent" className="arena">
            <div className="arenaDiv">{image(opponent)}</div>
            <div>
              {name(opponent)}
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
            </div>
            <div id="moves">
              {currentPokemon.attacks.fast.map((move) => attackButton(move))}
              {currentPokemon.attacks.special.map((move) => attackButton(move))}
            </div>
          </div>
        </>
      )) ||
        dispatch(BattleActions.chooseOpponent(newOpponent))}
    </div>
  );
};

Arena.defaultProps = {
  pokemonInfo: {
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
  },
};
