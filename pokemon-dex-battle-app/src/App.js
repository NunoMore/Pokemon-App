import logo from "./logo.svg";
import "./App.css";
import GetAllPokemonQuery from "./constants/graphql-queries";
import { useQuery } from "@apollo/client";

function GetData() {
  const { loading, error, data } = useQuery(GetAllPokemonQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.pokemons.map(({ name, image }) => (
    <div key={name}>
      <p>
        {name}
        {/* {currency}: {rate} */}
      </p>
      <img alt='' src={image} />
    </div>
  ));
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {GetData()}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
