import './filterbox.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteDone } from '../../store/todoSlice'
import { filterCompleted } from '../../store/todoSlice'
import { setAll } from '../../store/todoSlice'
import { filterUncompleted } from '../../store/todoSlice'

function Filterbox({setStatus}){
    const todos = useSelector( state => state.todos.todos )
    const filterTodos = useSelector( state => state.todos.filteredTodos )
    const statusHandler = (e) =>{
        setStatus(e.target.value)
    }
    const id = todos.map(item => item.id)
    let counter = todos.filter((item) => item.completed).length
    const dispatch = useDispatch()
    const deleteCompleted = () => {
        dispatch(deleteDone({
            id : id
        }))
    }
    const filterDone = () => {
        dispatch(filterCompleted({
            id : id
        }))
    }
    const allTodos = () => {
        dispatch(setAll())
    }

    const uncompletedTodos = () => {
        dispatch(filterUncompleted())
    }

    return(
        <div className="filterbox">
            <div className="complete item">Completed:{counter}</div>
            <div className="selectors" onClick={statusHandler}>
                <option className="filter item" value="all" onClick={allTodos}>All</option>
                <option className="filter item" value="completed" onClick={filterDone}>Completed</option>
                <option className="filter item" value="uncompleted" onClick={uncompletedTodos}>Uncompleted</option>
            </div>
            <div className="clear item" onClick={deleteCompleted} >Clear completed</div>
        </div>
    )
}
export default Filterbox