import { connect } from 'react-redux';
import {
  fetchTasksIfNeeded,
  taskCompletedUpdate,
  tasksInvalidate,
  taskSave,
  taskUpdate,
} from '../actions/tasks';
import TasksList from '../components/TasksList';

const mapStateToProps = state => ({
  isFetching: state.tasks.isFetching,
  tasks: state.tasks.tasks,
});

const mapDispatchToProps = dispatch => ({
  onToggleClick: (task) => {
    const newTask = Object.assign({}, task, {
      completed: !task.completed,
    });
    dispatch(taskCompletedUpdate(newTask));
  },
  setUp: () => {
    dispatch(tasksInvalidate());
    dispatch(fetchTasksIfNeeded());
  },
  refresh: () => {
    dispatch(fetchTasksIfNeeded());
  },
  onSubmitClick: (task) => {
    dispatch(taskSave(task));
  },
  onEditSaveClick: (task) => {
    dispatch(taskUpdate(task));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
