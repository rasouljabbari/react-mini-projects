import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import {inputClass} from "../../utils/stateList";

const MobxTodoList = observer(({animalStore,todoStore}) => {

    const [value, setValue] = useState('')
    const status = todoStore.status

    return (
        <div>
            <div className="flex items-center">
                <input
                    className={inputClass}
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
            </div>
            <br/>
            Completed : {status.completed}
            <br/>
            Remaining : {status.remaining}
            <br/>
            <br/>
            <ul>
                {
                    todoStore.todos.map(todo => {
                        return <li
                            className='cursor-pointer dark:text-amber-50'
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