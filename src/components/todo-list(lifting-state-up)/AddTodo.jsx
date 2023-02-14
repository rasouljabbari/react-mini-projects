import {memo, useRef} from 'react';

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
                className={'ml-0 mr-2 bg-white py-2 px-4 rounded-sm border border-gray-400 text-lg m-6 w-[320px]'}
                type="text" id="todo" />
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default memo(AddTodo);