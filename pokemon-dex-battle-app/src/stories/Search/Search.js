import "./search.css";

/**
 * Search bar component
 */
export const SearchBar = ({ filterAction }) => {
  return (
    <input
      id="searchInput"
      placeholder={"search"}
      onChange={(e) => filterAction(e.target.value)}
    />
  );
};
