import React from 'react'
import { TodosContext } from '../App/TodosContext'
import './CreateTodoButton.css'
function CreateTodoButton({setOpenModal}){
   // const {setOpenModal } = React.useContext(TodosContext);

    return (
        <button onClick={()=>{setOpenModal(state => !state)}} className='CreateTodoButton'>+</button>
    )
}

export {CreateTodoButton}