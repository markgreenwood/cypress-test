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
      <div align="center" id="todo-list">
        <ul>
          <li>Do this</li>
        </ul>
      </div>
    );
  }
}

export default App;
