import React from 'react'
import { TodosContext } from '../App/TodosContext'
import './CreateTodoButton.css'
function CreateTodoButton(){
    const {setOpenModal } = React.useContext(TodosContext);

    return (
        <button onClick={()=>{setOpenModal(true)}} className='CreateTodoButton'>+</button>
    )
}

export {CreateTodoButton}