import { useDispatch } from "react-redux";
import { HomeActions } from "../../redux/home.reducer";
import "./search.css";

/**
 * Search bar component
 */
export const SearchBar = () => {
  const dispatch = useDispatch();
  return (
    <div id="searchDiv">
      <input
        id="searchInput"
        placeholder={"Search by number, name or type..."}
        onChange={(e) => dispatch(HomeActions.filterPokemon(e.target.value))} // since component is in storybook, to use redux I had to pass action as prop
      />
    </div>
  );
};
