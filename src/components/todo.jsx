import React, { Component } from 'react';

class Todo extends Component {
    handleDelete = () => {
        this.props.onDelete(this.props.todo);
    };
    render() {
        const { name } = this.props.todo;
        return (
            <li className="todo">
                <span className="todo-name">{name}</span>
                <button className="todo-delete" onClick={this.handleDelete}>
                    <i class="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Todo;
