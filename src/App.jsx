import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

function App() {
const [todos, setTodos] = useState([]);

function addTodo(todo){
  if( todo.length === 0 ){
  alert('Please enter a Details');
  return;
}
// 
let todoObject ={
  id:Math.floor(Math.random() * 100000),
  text:todo,
  isCompleted:false,
  time: new Date().toLocaleTimeString(),
  date: new Date().toLocaleDateString()

}
setTodos([...todos, todoObject]);
}


//Deletetodo- function that checks for id and delete them
function deleteTodo(id) {
  setTodos(todos.filter(todo => todo.id !==id))
}


// toggle complete
function toggleComplete(id) {
  setTodos(todos.map(todo => {
    if(todo.id === id) {
      return {
        ...todo,
        isCompleted: !todo.isCompleted
      }
    }
    return todo;
  }))
}
  return (
    <div className="container">
      <div className="inner-container">
        <Header />
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos} toggleComplete={toggleComplete}/>
      </div>
          </div>
  )
}

export default App


