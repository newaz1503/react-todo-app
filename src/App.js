// import 'font-awesome/css/font-awesome.min.css';
import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  const loadedTodos = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];
  //state
const [inputText, setInputText] = useState("");
const [todos, setTodos] = useState(loadedTodos);
const [status, setStatus] = useState("all");
const [filteredTodos, setFilteredTodos] = useState([]);



useEffect(() => {
  filterHandler();
  saveLocalTodos(); 
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [todos, status]);

//functions
const filterHandler = () => {
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.complete === true ));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.complete === false ));
        break;
      default: 
        setFilteredTodos(todos);
        break;
    }
 }
  
  //save to local storage
  const saveLocalTodos = () => {
    const json = JSON.stringify(todos);
    window.localStorage.setItem("todos", json);
  };

  return(
    <div className='App'>
          <header>
            <h2>Todo List</h2>
          </header>
          <Form setInputText={setInputText} inputText={inputText}  todos={todos} setTodos={setTodos}  status={status} setStatus={setStatus} />
          <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  )
}
export default App;
