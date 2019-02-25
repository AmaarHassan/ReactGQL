import React, { Component } from 'react';

//components
import BookList from './components/BookList';

class App extends Component {
  render() {
    return (
      <div id="main">
       <h1> Welcome to the World of React </h1>
        <h2 ><BookList/> </h2>
      </div>
    );
  }
}

export default App;
