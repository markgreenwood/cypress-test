import React, { Component } from 'react';
import styled from 'styled-components';
import * as R from 'ramda';

const AppHeading = styled.h1`
  font-family: Spectral, serif;
  text-align: center;
`;

const TaskList = (props) => (
  <ul>
    {props.children}
  </ul>
);

const tasks = [
  'Do this',
  'Do that',
  'Save the world'
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTaskText: '',
      tasks
    };
    this.addListItem = this.addListItem.bind(this);
    this.onChangeNewTask = this.onChangeNewTask.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  onChangeNewTask(event) {
    event.preventDefault();
    this.setState(R.merge(this.state, { newTaskText: event.target.value }));
  }

  addListItem(event) {
    event.preventDefault();
    console.log('addListItem');
    tasks.push(this.state.newTaskText);
    console.log(tasks);
    this.setState(R.merge(this.state, { tasks }));
  }

  deleteItem(event) {
    event.preventDefault();
    console.log('deleteListItem');
    console.log(event.target.value);
  }

  render() {
    return (
      <div id="todo-list">
        <TaskList>
          {R.map(item => <li>{item} <button className="delete-button" onClick={this.deleteItem}>X</button></li>, this.state.tasks)}
        </TaskList>
        <input id="new-task" type="text" onChange={this.onChangeNewTask} />
        <button id="big-button" onClick={this.addListItem}>Click Me</button>
      </div>
    );
  }
}

export default App;
