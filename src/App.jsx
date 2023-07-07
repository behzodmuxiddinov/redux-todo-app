import React, { useState,useEffect } from 'react';
import Form from './components/form/form'
import TodoList from './components/todoList/todoList'
import './App.css';
import Filterbox from './components/filterbox/filterbox';
function App(){
    const [inputValue, setInputValue] = useState("")
    const [status, setStatus] = useState("")
    return(
        <div className='app'>
            <Form
            inputValue={inputValue}
            setInputValue={setInputValue}
            />
            <TodoList 
            inputValue={inputValue}
            />
            <Filterbox 
            setStatus={setStatus}
            />
        </div>
    )
}


export default App


