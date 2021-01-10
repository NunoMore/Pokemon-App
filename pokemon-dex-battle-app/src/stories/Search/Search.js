import "./search.css";

/**
 * Search bar component
 */
export const SearchBar = ({ filterAction }) => {
  return (
    <div id='searchDiv'>
      <input
        id="searchInput"
        placeholder={"search"}
        onChange={(e) => filterAction(e.target.value)}
      />
    </div>
  );
};
