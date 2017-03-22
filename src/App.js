
import React, { Component } from 'react';

//* import components here: *//
import TypingBox from './components/TypingBox';
import AppendingBox from './components/AppendingBox';

import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      typedLetters: "Append here."
    }

    // One Ring to find them,
    // One Ring to bring them all,
    // And in the darkness BIND them
    this.handleText = this.handleText.bind(this);
  }

  handleText(event){
    console.log("val:", event.target.value);
    this.setState({
      typedLetters: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React Instant Typing Demo</h1>
        <TypingBox handleText={this.handleText}/>
        <hr />
        <AppendingBox appendThisText={this.state.typedLetters}/>
      </div>
    );
  }
}

export default App;
