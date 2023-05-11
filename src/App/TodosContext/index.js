import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodosContext = React.createContext();


function TodoProvider({children}){
    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage(
        "TODOS_V1",
        []
      );
      const [searchValue, setSearchValue] = React.useState("");

      const [openModal, setOpenModal] = React.useState(false);

    
      const completedTodos = todos.filter((todo) => !!todo.completed).length;
      const totalTodos = todos.length;
      const searchedTodos = todos.filter((todo) => {
        const text = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return text.includes(searchText);
      });
    
      const completeTodo = (text) => {
        const newItems = [...todos];
        const todoIndex = newItems.findIndex((todo) => todo.text === text);
        newItems[todoIndex].completed = true;
        saveTodos(newItems);
      };
    
      const deleteTodo = (text) => {
        let newItems = [...todos];
        const todoIndex = newItems.findIndex((todo) => todo.text === text);
        newItems.splice(todoIndex, 1);
    
        saveTodos(newItems);
      };
      return (
        <TodosContext.Provider value={{
          loading,
          error,
          completedTodos,
          totalTodos,
          searchValue,
          setSearchValue,
          searchedTodos,
          completeTodo,
          deleteTodo,
          openModal,
          setOpenModal
        }}>
          {children}
        </TodosContext.Provider>
      );
}

export {TodosContext,TodoProvider} 