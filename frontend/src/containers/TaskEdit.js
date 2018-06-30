import {connect} from 'react-redux';
import {fetchTaskIfNeeded, taskInvalidate} from '../actions/task_edit';

import TaskEdit from '../components/TaskEdit';

const mapStateToProps = state => {
    console.log(state);
    return {
    task: state.task_edit.task,
    isFetching: state.task_edit.isFetching,
};};
const mapDispatchToProps = dispatch => ({
    setUp: id => {
        dispatch(taskInvalidate());
        dispatch(fetchTaskIfNeeded(id));
    },
    refresh: id => {
        dispatch(fetchTaskIfNeeded(id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskEdit);
