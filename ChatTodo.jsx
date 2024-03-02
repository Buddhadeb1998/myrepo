import React, { useState } from 'react'

const ChatTodo = () => {
    const [todos, setTodos] = useState([]);
    const [inputText, setInputText] = useState('');
    const [filter, setFilter] = useState('all');

    const addTodoHandler = () => {
        if (inputText.trim() !== '') {
            const newTodo = { text: inputText, completed: false };
            setTodos([...todos, newTodo]);
            setInputText(''); 
        }
    };

    const deleteHandler = (key) => {
        const updatedTodos = todos.filter((todo, index) => index !== key);
        setTodos(updatedTodos);
    };

    const toggleComplete = (key) => {
        const updatedTodos = todos.map((todo, index) => {
            if (index === key) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const clearCompleted = () => {
        const filteredTodos = todos.filter((todo) => !todo.completed);
        setTodos(filteredTodos);
    };

    const filterTasks = (type) => {
        setFilter(type);
    };

    const filteredTodos = filter === 'active' ? todos.filter(todo => !todo.completed) :
        filter === 'completed' ? todos.filter(todo => todo.completed) :todos;

    return (
        <article className="mainBox">
            <h1>Learning TODO</h1>
            <div className="heading-style"></div>
            <div>
                <div className="inputContainer">
                    <input
                        className="inputText"
                        type="text"
                        placeholder="Enter Your Todos Here"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    />
                    <button onClick={addTodoHandler} className="btn btn-warning">ADD</button>
                </div>
                <div className="listContainer">
                    <hr />
                    <ul>
                        {filteredTodos.map((todo, key) => (
                           <>
                                <li key={key}>
                                    <input
                                        type="checkbox"
                                        checked={todo.completed}
                                        onChange={() => toggleComplete(key)}
                                    />
                                    <label className={todo.completed ? 'completed' : ''}>
                                        {todo.text}
                                    </label>
                                    <button onClick={() => deleteHandler(key)} className="btn btn-danger">Delete</button>

                                </li>
                                <hr />
                           </>
                        ))}
                    </ul>
                </div>
                <div className="buttonContainer">
                    <button className="btn btn-warning m-2" onClick={() => filterTasks('all')}>All</button>
                    <button className="btn btn-warning m-2" onClick={() => filterTasks('active')}>Active</button>
                    <button className="btn btn-warning m-2" onClick={() => filterTasks('completed')}>Completed</button>
                    <button className="btn btn-warning m-2" onClick={clearCompleted}>Clear Completed</button>
                </div>
            </div>
        </article>
    );
};

export default ChatTodo;