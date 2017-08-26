import React, { Component } from 'react';
import './App.css';

import Layout  from './components/common/Layout';
import TodoApp from './components/TodoApp';

var Header = (props) => <h1>{props.title}</h1>;
var Footer = (props) => <h2>&copy; Algorisys Technologies Pvt. Ltd. </h2>;

class App extends Component {
  render() {
    return (
      <Layout className="App">
           <TodoApp />
      </Layout>
     
    );
  }
}

export default App;
