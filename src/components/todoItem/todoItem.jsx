import React from 'react'
import Form from '../form/form'
import './todoItem.css'
import { faTrash} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { completeTodo } from '../../store/todoSlice'
import { deleteTodo } from '../../store/todoSlice'
import { useDispatch } from 'react-redux'


const TodoItem = ({todo,id,completed}) => {
    
    const dispatch = useDispatch()
    const handleComplete = () =>{
        dispatch( completeTodo({
            id : id,
            completed : !completed
        }))
    }
    const deleteItem = () =>{
        dispatch(deleteTodo({
            id : id
        }))
    }
    return (
        <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
            <div className={`checked-btn ${todo.completed ? "marked" : ""}`} onClick={handleComplete}></div>
            <li className='todo'>{todo.name}</li>
            <button className='delete' onClick={deleteItem}><FontAwesomeIcon icon={faTrash} /></button>
        </div>
    )
} 

export default TodoItem