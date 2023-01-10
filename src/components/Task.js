import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, editTodo, toggleTodo } from '../JS/Actions/actions'

const Task = ({ elm }) => {
  const [todoUpdated, setTodoUpdated] = useState(elm)
  const dispatch = useDispatch()
  const removeTodo = () => {
    dispatch(deleteTodo(elm.id))
  }
  const handleToggle = () => {
    dispatch(toggleTodo(elm.id))

  }
  const handleEdit = () => {
    dispatch(editTodo(todoUpdated))
  }


  return (
    <div id='card' >
      <div id='checkbox'>
        <input type="checkbox" onClick={handleToggle} ></input>
        <br></br>
      </div>

      <div id='todo' >
        <h1 style={{ textDecoration: elm.isDone ? "line-through" : "none" }} >{elm.description}</h1>
      </div>
      <div id='edit' >
        <div>
        <input type="text" id='input-edit' value={todoUpdated.description} onChange={(e) => setTodoUpdated({ ...todoUpdated, description: e.target.value })}  ></input>

        </div>
        <div id='btn' >
        <button onClick={removeTodo} id='btn-delete' >delete</button>
        <button onClick={handleEdit} id='btn-update' >update</button>
        </div>
      </div>
    </div>
  )
}

export default Task