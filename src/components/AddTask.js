import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../JS/Actions/actions'

const AddTask = () => {
  const dispatch = useDispatch()
const [input , setInput] = useState({
  description :''
})
const addNewTodo = () => {
  dispatch(addTodo(input))
}
console.log(input)
  return (
    <div id='add' >
      <input type='text' id='input-add' placeholder='write your task ...' onChange={(e)=>setInput({description:e.target.value})} />
      <button  id='btn-add' onClick={addNewTodo} >add todo</button>
    </div>
  )
}

export default AddTask