import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Feature/todoslice'

const AddTodo = () => {

    const [task,setTask]=useState("")

    const dispatchTask=useDispatch()

    const handleAdd = () => {
        dispatchTask(addTodo({
            id:Date.now(),
            text:task
        }))
    }

    function handleChange(e){
        setTask(e.target.value)
    }


  return (
    <div>
        <input type="text" value={task} onChange={handleChange}/>
        <button onClick={handleAdd}>Add Todo</button>
    </div>
  )
}

export default AddTodo