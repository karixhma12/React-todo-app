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

  function deleteTodo(id){
    const newTodos = todos.filter(todo=>{
      return todo.id!==id
    })
    setTodos(newTodos);
  }


  function toggleTodo(id){
    const newTodos = todos.map((todo)=>{
      if(id ===todo.id){
        return {...todo, done: !todo.done};
      }
      else{
        return todo;
      }
    })
    setTodos(newTodos);
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
          {todos.map((todo)=>{
            return(<li key={todo.id}>
              <input 
                type="checkbox"
                checked={todo.done}
                onChange = {()=>toggleTodo(todo.id)}/>
              <span style={{textDecoration:todo.done?"line-through":"none"}}>
                {todo.text}
              </span>  
              <button onClick={()=>deleteTodo(todo.id)}> Delete Todo </button>
            </li>)
          })}
        </ul>
    </div>
  )
}

export default App;

