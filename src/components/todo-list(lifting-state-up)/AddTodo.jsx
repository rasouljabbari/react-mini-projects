import {memo, useRef} from 'react';
import {inputClass} from "../../utils/stateList";

function AddTodo({ setTodos }) {
    const inputRef = useRef()
    function handleSubmit(event) {
        event.preventDefault();
        const todo = inputRef.current['value'];
        setTodos(prevTodos => [...prevTodos, todo]);
        inputRef.current.value = ''
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                data-testid={'todo-input'}
                ref={inputRef}
                className={inputClass}
                type="text" id="todo" />
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default memo(AddTodo);