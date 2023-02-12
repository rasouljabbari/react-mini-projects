import {memo} from 'react';

function TodoList({todos}) {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo}>{todo}</li>
            ))}
        </ul>
    );
}

export default memo(TodoList);