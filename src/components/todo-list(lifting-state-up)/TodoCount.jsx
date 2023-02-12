import { memo } from 'react';

function TodoCount({ todos }) {
    return (
        <div>Total Todos: {todos.length}</div>
    );
}

export default memo(TodoCount);