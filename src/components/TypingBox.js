
import React, { Component } from 'react';

class TypingBox extends Component {

  render(){
    return(
      <div>
        <p>TypingBox</p>
        <input type="text" name="typing-box" onChange={this.props.handleText}/>
      </div>
    );
  }

}

export default TypingBox;
