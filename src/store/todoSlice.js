import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name : 'todos',
    initialState : {
        todos : [],
        filteredTodos : []
    },
    reducers : {
        addTodo : ( state, action ) => {
            const newTodo = {
                id : Date.now(),
                name : action.payload.title,
                completed : false
            }
            state.todos.push(newTodo)
            state.filteredTodos = state.todos
        },
        completeTodo : ( state, action ) => {
            const index = state.todos.findIndex(
                item => item.id === action.payload.id)
            state.todos[index].completed = action.payload.completed
            state.filteredTodos[index].completed = action.payload.completed
        },
        deleteTodo : ( state, action ) => {
            state.todos = state.todos.filter(item => item.id !== action.payload.id)
            state.filteredTodos = state.todos.filter(item => item.id !== action.payload.id)
        },
        deleteDone : ( state ) => {
            state.todos = state.todos.filter(item => item.completed === false)
            state.filteredTodos = state.todos.filter(item => item.completed === false)
        },
        filterCompleted : ( state ) => {
            state.filteredTodos = state.todos.filter(item => item.completed === true)
        },
        setAll : ( state ) => {
            state.filteredTodos = state.todos
        },
        filterUncompleted : ( state ) => {
            state.filteredTodos = state.todos.filter(item => item.completed === false)
        }
    }
})

export const { addTodo, completeTodo, deleteTodo, deleteDone, filterCompleted, setAll, filterUncompleted } = todoSlice.actions

export default todoSlice.reducer