import React from "react";
function Todo({todo, todos, setTodos}){
    const {text} = todo;
    const deleteHandler = (e) => {
        setTodos(todos.filter(item => todo.id !== item.id))
    }
    const completeHandler = (e) => {
        setTodos(todos.map((prevItem) => {
            if(prevItem.id === todo.id){
                return{
                    ...prevItem,
                    complete: !prevItem.complete
                }
            }
            return prevItem;
        }))
    }
    return(
        <div className="todo">
            <li className={`todo-item ${todo.complete ? 'completed' : ""} `}>{text}</li>
            <button className="complete-btn" onClick={completeHandler}>
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}
export default Todo;