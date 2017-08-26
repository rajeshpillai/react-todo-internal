import React, { Component } from 'react';

export default class TodoItems extends Component {
  constructor () {
      super();
      this.toggleEdit = this.toggleEdit.bind(this);
      this.saveEdit = this.saveEdit.bind(this);
      this.cancelEdit = this.cancelEdit.bind(this);
  }

  toggleEdit (id) {
    console.log("EDIT: ", id);
    this.props.toggleEdit(id);
  }

  cancelEdit (id) {
    console.log("EDIT: ", id);
    this.props.toggleEdit(id);
  }

  saveEdit (id) {
    console.log("EDIT: ", id);
    this.props.onEditSave(id, this.todoInput.value, this.todoDesc.value);
  }

  render() {
    var self = this;
    var todoElems = this.props.items.map(function (item) {
        if (!item.editMode) {
            return (
                <div key={item.id}>
                    <img className="card-img-top" src="..." alt="Card image cap" />
                    <div className="card-body">
                        <h4 className="card-title">{item.title}</h4>
                        <p className="card-text">{item.desc}</p>
        
                        <button onClick={() => self.toggleEdit(item.id)} className="btn btn-primary">EDIT</button>

                    </div>
                </div>
            );
        }
        else {
            return (
                <div key={item.id}>
                    <img className="card-img-top" src="..." alt="Card image cap" />
                    <div className="card-body">
                        <h4 className="card-title">
                            <input type="text" placeholder="todo"
                                ref={(input) => { self.todoInput = input; }} 
                                defaultValue = { item.title}
                                className="col-md-8" />

                        </h4>
                        <p className="card-text">
                            <textarea
                            ref={(input) => { self.todoDesc = input; }} 
                            defaultValue = {item.desc}
                            className="col-md-8"/>
                        </p>
        
                        <button onClick={() => self.saveEdit(item.id)} 
                            className="btn btn-primary">SAVE</button>

                        <button onClick={() => self.cancelEdit(item.id)} 
                            className="btn btn-primary">CANCEL</button>

                    </div>
                </div>
            );
        }
    })
    return (
        <div>
            <div className="card" style={{"width": "20rem"}}>
               {todoElems}
            </div>
        </div>
    );
  }
}