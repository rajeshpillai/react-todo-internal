import React, { Component } from 'react';

export default class TodoForm extends Component {

    constructor() {
        super();
        this.saveTodo = this.saveTodo.bind(this);
    }

    saveTodo(event) {
        event.preventDefault();
        this.props.onAdd(this.todoInput.value, this.todoDesc.value);
    }

    render() {
        return (
            <div className="form-group row">
                <h2>Todo Form</h2>
                <form >
                    <input type="text" placeholder="todo"
                        ref={(input) => { this.todoInput = input; }} 
                        className="col-md-8" />

                      Description:
                      <textarea
                        ref={(input) => { this.todoDesc = input; }} 
                        className="col-md-8"/>

                    <input onClick ={this.saveTodo} 
                        className="col-md-2" type="submit" value="+" />
                </form>
            </div>
        );
  }
}