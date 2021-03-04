import React, { Component } from 'react';

class TodoAddForm extends Component {
    inputRef = React.createRef();
    formRef = React.createRef();

    onSubmit = (event) => {
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.formRef.current.reset();
    };
    render() {
        return (
            <>
                <form
                    ref={this.formRef}
                    className="todo-form"
                    onSubmit={this.onSubmit}
                >
                    <input
                        ref={this.inputRef}
                        type="text"
                        className="todo-input"
                        placeholder="Add new Item.."
                    />
                    <button className="todo-add">Add</button>
                </form>
            </>
        );
    }
}

export default TodoAddForm;
