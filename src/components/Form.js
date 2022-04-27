function Form({setInputText, inputText, todos, setTodos, status, setStatus, setFilteredTodos}){
    const inputHandler = (e) =>{
        setInputText(e.target.value);
      }
      const submitHandler = (e) =>{
          e.preventDefault();
          setTodos((prevTodos) => {
             return [...prevTodos, {id: Math.floor(Math.random() * 1000) , text: inputText, complete: false}]
          })
          setInputText("")
      }
      const statusHandler = (e) => {
            setStatus(e.target.value)
      }
    return(
        <form onSubmit={submitHandler}>
            <input type="text" className="todo-input" onChange={inputHandler} value={inputText} required />
            <button className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo" onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
      </form>
    )
}
export default Form;