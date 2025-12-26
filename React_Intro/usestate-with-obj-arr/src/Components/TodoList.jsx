import React, { useState } from 'react'

const TodoList = () => {

    const [tasks , setTasks]=useState([])


    function addTask(e){
        e.preventDefault()
        setTasks([...tasks,e.target[0].value])
        console.log(e);
    }
    
  return (
    <div>

        <form onSubmit={(e)=> addTask(e)}>
            <input placeholder='Enter the name' />
             {/* H/W when you add next item -> pichle item ko saafkarna */}
            <button>Submit</button>
        </form>

        <ul>
            {tasks.map((t)=> <li key={t}>{t}</li>)}
        </ul>

    </div>
  )
}

export default TodoList