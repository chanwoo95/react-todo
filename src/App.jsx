import React, { Component } from 'react';
import Navbar from './components/navbar';
import './app.css';
import Todos from './components/todos';
import TodoAddForm from './components/todoAddForm';

class App extends Component {
    state = {
        todos: [],
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
                    <span className="total-count">
                        Total Count:
                        {this.state.todos.filter((item) => item.id > 0).length}
                    </span>
                </section>
            </>
        );
    }
}

export default App;
