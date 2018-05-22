import React, { Component } from 'react';
import styled from 'styled-components';

const AppHeading = styled.h1`
  font-family: Spectral, serif;
  text-align: center;
`;

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="todo-list">
        <ul>
          <li>Do this</li>
          <li>Do that</li>
          <li>Save the world</li>
        </ul>
        <input id="new-task" type="text" />
      </div>
    );
  }
}

export default App;
