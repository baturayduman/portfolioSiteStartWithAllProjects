import React, { useState } from "react";

function TodoPaneli() {

    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);


    const handleInputChange = (event) => {
        setTodo(event.target.value);
    };

    const handleAddTodo = () => {
        if (todo.trim() !== "") {
            setTodos([...todos, todo]);
            setTodo("");
        }
    };

    return (
        <div className="anadiv">

            <h1>TODO EKRANIM</h1>

            <input
                className="inputtodo"
                value={todo}
                onChange={handleInputChange}
                placeholder="YENİ TODO GİRİNİZ"
            />
            <button className="inputbuton" onClick={handleAddTodo} > YENİ TODO OLUŞTUR </button>

            <div className="todo-list">
                {todos.map((todo, index) => (
                    <div key={index} className="todo-item">{todo}</div>

                ))}

            </div>
        </div >
    )
}

export default TodoPaneli



