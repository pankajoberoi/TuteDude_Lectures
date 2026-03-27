import React from 'react'
import { useSelector } from 'react-redux'

const TodoList = () => {

    const todos=useSelector(state => state.dailyTodos.todos)
    console.log(todos);

  return (
    <div>
        <ul>
        {
            todos.map((i)=>(
                <li key={i.id}>{i.text}</li>
                
            ))
        }
        </ul>
    </div>
  )
}

export default TodoList