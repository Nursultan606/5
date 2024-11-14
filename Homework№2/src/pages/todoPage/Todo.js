import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions";
import TodoList from "./TodoList";

const Todo = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const handleAddTodo = () => {
        dispatch(addTodo(text))
    }

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                placeholder="Enter a new task"
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
            <button onClick={handleAddTodo}>Add task</button>
            <TodoList />
        </div>
    )

}

export default Todo;