import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoItems from './TodoItems';
export default class TodoApp extends Component {
  render() {
    return (
        <div>
            <TodoForm />
            <TodoItems />
        </div>
    );
  }
}