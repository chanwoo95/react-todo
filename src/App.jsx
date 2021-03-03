import React, { Component } from 'react';
import Navbar from './components/navbar';
import './App.css';
import Todos from './components/todos';
import TodoAddForm from './components/todoAddForm';

class App extends Component {
    state = {
        todos: [
            { id: 0, name: 'coding' },
            { id: 1, name: 'running' },
            { id: 2, name: 'eating' },
        ],
    };

    handleDelete = (todo) => {
        this.state.todos.filter((item) => todo.id !== item.id);
    };
    render() {
        return (
            <>
                <Navbar />
                <TodoAddForm />
                <Todos todos={this.state.todos} onDelete={this.handleDelete} />
            </>
        );
    }
}

export default App;
