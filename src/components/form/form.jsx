import React, {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import './form.css'
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoSlice";

const Form = ({inputValue,setInputValue,todos,setTodos}) =>{
  const inputValueHandler = (e) =>{
    setInputValue(e.target.value)
  }
  const dispatchEvent = useDispatch()
  const todoHandler = (e) =>{
    // setTodos([
    //   ...todos,{text:inputValue, completed:false, id:Math.floor(Math.random()*1000)}
    // ])
    dispatchEvent(addTodo({
      title : inputValue
    }))
    setInputValue("")
  }
  return(
    <div className="formContent">
        <input
        value={inputValue}
        className="todoInput"
        onChange={inputValueHandler}
        />
        <button
         type="submit"
         onClick={todoHandler}
        ><FontAwesomeIcon icon={faPlus}/></button>
    </div>
  )
}

export default Form