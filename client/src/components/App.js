import React, { Component } from 'react';
import styled from 'styled-components';
import * as R from 'ramda';

const AppHeading = styled.h1`
  font-family: Spectral, serif;
  text-align: center;
`;

const TaskListWrapper = styled.ul`
  list-style: none;
`;

const TaskList = (props) => (
  <TaskListWrapper>
    {props.children}
  </TaskListWrapper>
);

const TaskItem = (props) => (
  <li>
    {props.item}
    <button
      className="delete-button"
      onClick={(event) => { event.preventDefault(); props.deleteItem(props.item); }}
    >
      X
    </button>
  </li>
);

const initTasks = [
  'Do this',
  'Do that',
  'Save the world'
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTaskText: '',
      tasks: initTasks
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
    const tasks = this.state.tasks;
    tasks.push(this.state.newTaskText);
    console.log(this.state.tasks);
    this.setState(R.merge(this.state, { tasks }));
  }

  deleteItem(item) {
    console.log('deleteListItem');
    console.log(item);
    const itemToDelete = item;
    const preDeleteTasks = this.state.tasks;
    const tasks = R.filter((item) => R.compose(R.not, R.equals(itemToDelete))(item), preDeleteTasks);
    console.log(tasks);
    this.setState(R.merge(this.state, { tasks }));
  }

  render() {
    return (
      <div id="todo-list">
        <TaskList>
          {R.map((item, index) => (<TaskItem key={index} item={item} deleteItem={this.deleteItem} />), this.state.tasks)}
        </TaskList>
        <input id="new-task" type="text" onChange={this.onChangeNewTask} />
        <button id="big-button" onClick={this.addListItem}>Click Me</button>
      </div>
    );
  }
}

export default App;
