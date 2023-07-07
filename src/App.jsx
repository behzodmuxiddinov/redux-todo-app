import React, { useState,useEffect } from 'react';
import Form from './components/form/form'
import TodoList from './components/todoList/todoList'
import './App.css';
import Filterbox from './components/filterbox/filterbox';
function App(){
    const [inputValue, setInputValue] = useState("")
    // const [todos, setTodos] = useState([])
    const [status, setStatus] = useState("")
    const [filterTodo, setFilterTodo] = useState([])
    // useEffect(()=>{
    //     filterHandler()
    // },[status,todos])

    // const filterHandler = () =>{
    //     switch(status){
    //         case "completed" :
    //             setFilterTodo(todos.filter((item) => item.completed === true))
    //             break
    //         case "uncompleted" :
    //             setFilterTodo(todos.filter((item) => item.completed === false))
    //             break
    //         default :
    //             setFilterTodo(todos)
    //             break
    //     }
    // }
    return(
        <div className='app'>
            <Form
            inputValue={inputValue}
            setInputValue={setInputValue}
            // todos={todos}
            // setTodos={setTodos}
            />
            <TodoList 
            // todos={todos}
            // filterTodo={filterTodo}
            inputValue={inputValue}
            // setTodos={setTodos}
            />
            <Filterbox 
            // todos={todos}
            setStatus={setStatus}
            // setTodos={setTodos}
            />
        </div>
    )
}


export default App


