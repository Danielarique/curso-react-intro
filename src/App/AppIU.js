import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import React from "react";
import { TodosLoading } from "./TodosLoading";
import { TodosErrors } from "./TodosError";
import { TodosEmpty } from "./TodosEmpty";
import { TodosContext } from "./TodosContext";
import { Modal } from "./Modal";
import { TodoForm } from "./TodoForm";
function AppIU() {
  const {loading, error, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal } = React.useContext(TodosContext)
  return (
    <React.Fragment>
      <TodoCounter /*  completed={completedTodos} total={totalTodos}  */ />
      <TodoSearch /* searchValue={searchValue} setSearchValue={setSearchValue  }*/
      />
  {/*     <TodosContext.Consumer>
        {({ loading, error, searchedTodos, completeTodo, deleteTodo }) => ( */}
          <TodoList>
            {loading && (
              <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
              </>
            )}
            {error && <TodosErrors />}
            {!loading && searchedTodos.length === 0 && <TodosEmpty />}

            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
     {/*    )}
      </TodosContext.Consumer> */}
  
      <CreateTodoButton setOpenModal={setOpenModal} />
      {openModal && (
        <Modal>
         <TodoForm></TodoForm>
        </Modal>
      )}
    </React.Fragment>
  );
}



export { AppIU };
