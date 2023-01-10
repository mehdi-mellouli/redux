import React from 'react'
import Task from './Task'

const ListTask = ({allTodos}) => {
  return (
    <div id='tasks' >
{      allTodos.map((elm,i) => <Task elm={elm} key={i} />)}    
</div>
  )
}

export default ListTask