import {connect} from 'react-redux';
import {fetchTasksIfNeeded, taskCompletedSet, taskCompletedUpdate, tasksInvalidate, taskSave} from '../actions';
import TasksList from '../components/TasksList';

const mapStateToProps = state => ({
        isFetching: state.isFetching,
        tasks: state.tasks
});

const mapDispatchToProps = dispatch => ({
    onToggleClick: (task) => {
        let _task = Object.assign({}, task, {
                completed: !task.completed,
            });
        dispatch(taskCompletedUpdate(_task));
    },
    setUp: () => {
        dispatch(tasksInvalidate());
        dispatch(fetchTasksIfNeeded());
    },
    refresh: () => {
        dispatch(fetchTasksIfNeeded())
    },
    onSubmitClick: (task) => {
        dispatch(taskSave(task));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
