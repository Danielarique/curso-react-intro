import React from "react";
import "./TodoSearch.css";
import { TodosContext } from "../App/TodosContext";
function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodosContext)
  return (
    <input
    value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
      className="TodoSearch"
      placeholder="Cortar cebolla"
    />
  );
}

export { TodoSearch };
