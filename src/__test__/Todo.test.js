import {act, fireEvent, render, screen} from "@testing-library/react";
import Todo from "../components/todo-list(lifting-state-up)/Todo";
import TodoCount from "../components/todo-list(lifting-state-up)/TodoCount";
import TodoList from "../components/todo-list(lifting-state-up)/TodoList";
import AddTodo from "../components/todo-list(lifting-state-up)/AddTodo";

describe('Todo', function () {
    const setUp = () => {
        const todos = ["item 1", "item 2", "item 3"]
        const setTodos = jest.fn();
        return {todos, setTodos}
    }

    test('should render todo', () => {
        const {todos, setTodos} = setUp()
        render(
            <Todo>
                <TodoCount todos={todos}/>
                <TodoList todos={todos}/>
                <AddTodo setTodos={setTodos}/>
            </Todo>
        )
        const todoElement = screen.getByTestId('todo')
        expect(todoElement).toBeInTheDocument()
    })

    test('should render input field and Add Todo button', () => {
        render(<AddTodo />);
        const inputElement = screen.getByTestId('todo-input');
        const buttonElement = screen.getByRole('button', { name: /add todo/i });
        expect(inputElement).toBeInTheDocument();
        expect(buttonElement).toBeInTheDocument();
    });

    test('submitting the form adds a new todo item', async () => {
        const {todos,setTodos} = setUp()
        render(<AddTodo setTodos={setTodos}/>)
        const todoInput = screen.getByTestId('todo-input')
        const submitButton = screen.getByRole('button', {name: 'Add Todo'});
        const newTodo = 'Buy milk';

        fireEvent.change(todoInput, {target: {value: newTodo}})
        fireEvent.click(submitButton)
        act(() => {
            todos.push(newTodo)
        })

        expect(setTodos).toHaveBeenCalledTimes(1)
        expect(todos).toHaveLength(4)
        expect(todoInput).toHaveValue('');
    })
});