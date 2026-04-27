import {useState} from "react";


function App(){
  const [todos,setTodos] = useState([])
  const [inputValue,setInputValue] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText,setEditText] = useState("");


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

  function saveTodo(){
    const newTodos = todos.map(todo=>{
      if(todo.id===editingId){
        return {...todo,text : editText};
      }
      else{
        return todo;
      }
    })
    setTodos(newTodos);
    setEditingId(null);
  }

  function cancelEdit(){
    setEditingId(null);
  }

  return(
    <div>
      <h1> Todo App </h1>
        <input 
          type = "text"
          value = {inputValue}
          onChange = {e => setInputValue(e.target.value)}
          onKeyDown = {e=>{
            if(e.key==="Enter"){
              addTodo()
            }
          }}
          placeholder = "Enter a todo...."
        />
        <button onClick={addTodo}> Add </button>
        <ul>
          {todos.map((todo)=>{

            return(<li key={todo.id}>
              <>
                <input 
                type="checkbox"
                checked={todo.done}
                onChange = {()=>toggleTodo(todo.id)}/>
              </>
              {
                editingId == todo.id ? (
                  <>
                    <input
                    type = "text"
                    value = {editText}
                    onChange = {e=>{setEditText(e.target.value)}}
                    />
                   <button onClick={saveTodo}> Save </button>
                   <button onClick={cancelEdit}> Cancel </button>
                  </>
                  
                ) :
                (
                  <span style={{textDecoration: todo.done ? "line-through" : "none"}}>
                    {todo.text}
                  </span>
                )

              }

              <button onClick={()=>{setEditText(todo.text), setEditingId(todo.id)}}> Edit Todo </button>

              <button onClick={()=>deleteTodo(todo.id)}> Delete Todo </button>
            </li>)
          })}
        </ul>
    </div>
  )
}

export default App;

