import React from 'react';
import { TodosContext } from '../App/TodosContext';
import './TodoCounter.css'

function TodoCounter() {
  const {completedTodos: completed,totalTodos:total}  = React.useContext(TodosContext)
  if(total === completed && total !== 0){
    return <h1 className='TodoCounter'>Felicitaciones!! has completado tus TODO TODOS</h1>;
  }
  return <h1 className='TodoCounter'>Has completado <span>{completed}</span> de <span>{total}</span> TODOS</h1>;

}

export { TodoCounter };
