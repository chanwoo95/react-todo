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
        const todos = this.state.todos.filter((item) => todo.id !== item.id);
        this.setState({ todos });
    };

    onAdd = (name) => {
        const todos = [...this.state.todos, { id: Date.now(), name }];
        this.setState({ todos });
    };
    render() {
        return (
            <>
                <Navbar />
                <section className="container">
                    <TodoAddForm onAdd={this.onAdd} />
                    <Todos
                        todos={this.state.todos}
                        onDelete={this.handleDelete}
                    />
                </section>
            </>
        );
    }
}

export default App;
