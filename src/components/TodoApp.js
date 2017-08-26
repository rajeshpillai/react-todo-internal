import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoItems from './TodoItems';
export default class TodoApp extends Component {
  constructor () {
      super();
      var todo = {
        id: 0,
        title: "",
        completed: false
      }

      this.state = {
        ...todo,
        items: []
      }
  
      this.addTodo = this.addTodo.bind(this);
      this.toggleEdit = this.toggleEdit.bind(this);
      this.saveEdit = this.saveEdit.bind(this);
  }

  componentDidMount() {
    var todos = [];
    for (let i = 1; i <= 10; i++) {
        let todo = {
            id: todos.length + 1,
            title: "todo " + i,
            completed: false,
            desc: `A lenghty todo to be do in ${i} iteration`
        };

        todos.push(todo);
    }

    this.setState({
        ...this.state,
        items: todos
    })
  }

  toggleEdit (id) {
    var state = this.state;
    
    var items = this.state.items.slice();

    items.forEach(function (item) {
        if (item.id == id) {
            item.editMode = !item.editMode;
            return;
        }
    });

    this.setState({
        ...state,
        items

    })
  }

  addTodo(title, desc) {
     var state = this.state;

     this.setState({
         ...state,
         items: state.items.concat([{id: state.items.length+1,
            title: title, 
            desc: desc,
            completed: false}])
     })
  }

  saveEdit(id, title, desc) {
    var state = this.state;
    
    var items = this.state.items.slice();

    items.forEach(function (item) {
        if (item.id == id) {
            item.editMode = !item.editMode;
            item.title = title;
            item.desc = desc;
            return;
        }
    });

    this.setState({
        ...state,
        items

    })
  }

  render() {
    console.log(this.state);
    return (
        <div>
            <TodoForm onAdd={this.addTodo} />
            <div className="row">
                <TodoItems items = {this.state.items} 
                    toggleEdit= {this.toggleEdit}
                    onEditSave = { this.saveEdit}
                />
            </div>
        </div>
    );
  }
}