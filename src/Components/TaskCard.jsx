import React from 'react'
import { useDispatch } from 'react-redux'
import { handleComplete, handleDelete } from '../redux/actions'
import Edit from './Edit'

const TaskCard = ({task}) => {
    const dispatch=useDispatch()
  return (
    <div>
        <h1>{task.todo}</h1>
        <button  onClick={()=>dispatch(handleDelete(task.id))} >Delete</button>
        <button onClick={()=>dispatch(handleComplete(task.id))} >{task.isDone?"Undo":"Complete"}</button>
        <Edit task={task} />
        
    </div>
  )
}

export default TaskCard