import React from 'react'
import './TodoForm.css'
import { useState } from 'react'

function TodoForm({addTodo}) {

  const [todoText,setTodoText] = useState('');

  return (
    <div className='todo-form'>
      <input onChange={ e => setTodoText(e.target.value)}     
        type="text" value={todoText}/>

      <button onClick={() => { addTodo(todoText); 
        setTodoText('');}}>Add</button>
    </div>
  )
}

export default TodoForm
