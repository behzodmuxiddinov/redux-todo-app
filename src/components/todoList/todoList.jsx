import React, {Component} from "react";
import './todoList.css'
import TodoItem from "../todoItem/todoItem";
import { useSelector } from "react-redux";

const TodoList = () =>{
    const filterTodos = useSelector(state => state.todos.filteredTodos)
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {
                    filterTodos.map((todo) =>{
                        return <TodoItem
                        todo={todo}
                        id = {todo.id}
                        completed = {todo.completed}
                        key={todo.id}
                        />
                    })
                }
            </ul>
        </div>
    )
}
export default TodoList


