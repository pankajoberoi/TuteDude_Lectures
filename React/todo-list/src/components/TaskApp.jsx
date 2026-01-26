import React, { useState } from 'react'
import AddTodo from './AddTodo';
import TaskList from './TaskList';


let nextId=3;
let initialTodos=[
    {id:0,title:'Buy milk',done:true}, 
    {id:1,title:'Goto Gym',done:true},
    {id:2,title:'Meetings',done:false} 
]

const TaskApp = () => {

    const [todos,setTodos]=useState(initialTodos)

    
    function handleAddTodo(title){
        setTodos([...todos,{
            id:nextId++,
            title:title,
            done:false
        }])

    }

    function handleChangeTodo(updatedTodo){
        setTodos(todos.map(i => {
            if(i.id === updatedTodo.id){
                return updatedTodo
            }
            else{
                return i;
            }
        }))
    }

    function handleDeleteTodo(Id){
         setTodos(
            todos.filter(i => i.id !== Id)
         )
    }    


  return (
    <div>

        <AddTodo  onAddTodo={handleAddTodo}/>

        <TaskList todos={todos} onChangeTodo={handleChangeTodo} onDeleteTodo={handleDeleteTodo}/>

    </div>
  )
}

export default TaskApp