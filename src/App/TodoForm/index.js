import React from "react";
import "./TodoForm.css";
import { TodosContext } from "../TodosContext";
function TodoForm() {
  const { addTodo, setOpenModal } = React.useContext(TodosContext);

  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = (event) => {
    event.preventDefault();
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo todo</label>
      <textarea
        placeholder="Escribe tu todo"
        value={newTodoValue}
        onChange={onChange}
      ></textarea>
      <div className="TodoForm--buttonContainer">
        <button
          type="button"
          onClick={onCancel}
          className="TodoForm-button TodoForm-button--cancel"
        >
          CANCELAR
        </button>
        <button className="TodoForm-button TodoForm-button--add">
          AGREGAR
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
