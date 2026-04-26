import {useState} from "react";


function App(){
  const [todos,setTodos] = useState([])
  const [inputValue,setInputValue] = useState("");


  function addTodo(){
    let todo = {
      id : Date.now(),
      text : inputValue,
      done : false
    }
    setTodos([...todos,todo]);
    setInputValue("");
  }

  function toggleTodo(id){
    {todos.map((todos)=>{
      if(id===todos.id){
        done : true
      }
    })}
    setTodos(todos);
  }

  return(
    <div>
      <h1> Todo App </h1>
        <input 
          type = "text"
          value = {inputValue}
          onChange = {e => setInputValue(e.target.value)}
          placeholder = "Enter a todo...."
        />
        <button onClick={addTodo}> Add </button>
        <ul>
          {todos.map((todo) => {
            return <li key={todo.id}>
              {todo.text}
            </li>
          })}
        </ul>
    </div>
  )
}

export default App;

