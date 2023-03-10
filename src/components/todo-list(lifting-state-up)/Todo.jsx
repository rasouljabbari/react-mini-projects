import {useState, memo} from 'react';
import TodoCount from "./TodoCount";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

function Todo() {
    const [todos, setTodos] = useState(["item 1", "item 2", "item 3"]);

    return (
        <div data-testid={'todo'}>
            <TodoCount todos={todos} />
            <TodoList todos={todos} />
            <AddTodo setTodos={setTodos}/>
        </div>
    );
}

export default memo(Todo);