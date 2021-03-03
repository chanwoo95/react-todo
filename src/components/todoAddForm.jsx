import React, { Component } from 'react';

class TodoAddForm extends Component {
    inputRef = React.createRef();

    onSubmit = (event) => {
        event.preventDefault();
    };
    render() {
        return (
            <>
                <form className="todo-form" onSubmit={this.onSubmit}>
                    <input
                        ref={this.inputRef}
                        type="text"
                        className="todo-input"
                        placeholder="Add new Item.."
                    />
                    <button className="todo-button">Add</button>
                </form>
            </>
        );
    }
}

export default TodoAddForm;
