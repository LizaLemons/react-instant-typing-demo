import React, { Component } from 'react';

class AppendingBox extends Component {
  render(){
    return(
      <div id="appending-box">
        {this.props.appendThisText}
      </div>
    );
  }
}

export default AppendingBox;
