import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table} from 'reactstrap';
import Task from './Task';
import TaskAdd from './TaskAdd';

class TasksList extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const {setUp} = this.props;
    setUp();
    document.title = 'Tasks List | Regalix';
  }

  handleChange() {
    const {refresh} = this.props;
    refresh();
  }

  render() {
    const {
      tasks, onToggleClick, onSubmitClick, onEditSaveClick,
    } = this.props;
    let tasksRows;
    if (!tasks) {
      tasksRows = (
          <tr>
            <td>
              No records!
            </td>
          </tr>
      );
    } else {
      tasksRows = tasks.map(task => (
          <Task
              key={task.id}
              id={task.id}
              name={task.name}
              completed={task.completed}
              onToggleClick={() => onToggleClick(task)}
              onEditSaveClick={onEditSaveClick}
          />
      ));
    }

    return (
        <div>
          <TaskAdd onSubmitClick={onSubmitClick}/>
          <Table bordered striped>
            <thead>
            <tr>
              <th>
                SI
              </th>
              <th>
                Name
              </th>
              <th>
                Completed?
              </th>
              <th>
                Action
              </th>
            </tr>
            </thead>
            <tbody>
            {tasksRows}
            </tbody>
          </Table>
        </div>
    );
  }
}

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
  ).isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  onToggleClick: PropTypes.func.isRequired,
  setUp: PropTypes.func.isRequired,
  refresh: PropTypes.func.isRequired,
  onSubmitClick: PropTypes.func.isRequired,
  onEditSaveClick: PropTypes.func.isRequired,
};

export default TasksList;
