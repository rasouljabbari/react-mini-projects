import React, {useState} from 'react';
import {observer} from "mobx-react-lite";

const MobxTodoList = observer(({animalStore,todoStore}) => {

    const [value, setValue] = useState('')
    const status = todoStore.status

    return (
        <div>
            <input
                className={'border border-gray-600 rounded-md p-3 w-40 h-11'}
                value={value}
                onChange={({target}) => setValue(target.value)}
                type="text"/>
            <button
                className={'bg-sky-500 text-white rounded-md h-11 p-2 ml-2'}
                onClick={() => {
                    if (value) {
                        todoStore.addTodo(value)
                        setValue('')
                    }
                }}
            >Submit
            </button>
            <br/>
            Completed : {status.completed}
            <br/>
            Remaining : {status.remaining}

            <ul>
                {
                    todoStore.todos.map(todo => {
                        return <li
                            key={todo.id}
                            onClick={() => todoStore.toggleTodo(todo.id)}
                        >[{todo.completed ? 'x' : ' '}] {todo.title}</li>
                    })
                }
            </ul>
        </div>
    );
})

export default MobxTodoList;