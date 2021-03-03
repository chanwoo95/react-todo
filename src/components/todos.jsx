import React, { Component } from 'react';
import Todo from './todo';

class Todos extends Component {
    render() {
        return (
            <ul className="todo-list">
                {this.props.todos.map((item) => (
                    <Todo
                        key={item.id}
                        todo={item}
                        onDelete={this.props.onDelete}
                    />
                ))}
            </ul>
        );
    }
}

export default Todos;
