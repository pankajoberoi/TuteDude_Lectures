import React from 'react'
import { useState } from 'react';

const Task = ({todo,onchange,onDelete}) => {
    console.log(todo);
    const [isEditing,setIsEditing]=useState(false);
    let todoContent;

    if(isEditing){
        todoContent = (
            <>
                 <input 
                    value={todo.title}
                    onChange={e=>{
                        onchange({
                            ...todo,
                            title:e.target.value
                        })                                            

                    }}
                />
                <button onClick={()=> setIsEditing(false)}>Save</button>
            </>
           
            
        )

    }
    else{
        todoContent = (
            <>
                {todo.title}
                <button onClick={()=> setIsEditing(true)}>Edit</button>
            </>
        )
    }


  return (
    <div>
        <input type="checkbox" 
        checked={todo.done}
        onChange={e=>{
            onchange({
                ...todo,
                done:e.target.checked
            })
        }}/>
        {todoContent}
        <button onClick={()=> onDelete(todo.id)}>Delete</button>


    </div>
  )
}

export default Task