import React, { Component } from 'react';

export default class TodoForm extends Component {

    constructor() {
        super();
        this.state = {
            title: "",
            completed: false
        };
        this.saveTodo = this.saveTodo.bind(this);
        this.titleChange = this.titleChange.bind(this);
    }

    titleChange () {
        var title = this.todoInput.value;

        this.setState({
            title: title,
            completed: false
        });
    }
    saveTodo(event) {
        event.preventDefault();
        console.log(this);
        //alert(this.todoInput.value);
    }

    render() {
    return (
        <div className="form-group row">
            <h2>Todo Form</h2>
            <form >
                <input type="text" onChange = {this.titleChange}
                    ref={(input) => { this.todoInput = input; }} 
                    value = { this.state.title}
                    className="col-md-8" />
                <input onClick ={this.saveTodo} className="col-md-2" type="submit" value="+" />
            </form>
        </div>
    );
  }
}