import "./search.css";

/**
 * Search bar component
 */
export const SearchBar = ({ filterAction }) => {
  return (
    <div id="searchDiv">
      <input
        id="searchInput"
        placeholder={"Search by number, name or type..."}
        onChange={(e) => filterAction(e.target.value)} // since component is in storybook, to use redux I had to pass action as prop
      />
    </div>
  );
};
