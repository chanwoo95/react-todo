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

    handleReset = () => {
        const todos = this.state.todos.filter((item) => {
            if (item.id < 0) return item;
        });
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
                <div className="count-container">
                    <button className="reset-button" onClick={this.handleReset}>
                        Reset All
                    </button>
                    <span className="total-count">
                        Total Count:
                        {this.state.todos.filter((item) => item.id > 0).length}
                    </span>
                </div>
            </>
        );
    }
}

export default App;
