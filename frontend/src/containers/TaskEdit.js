import {connect} from 'react-redux';
import {fetchTaskIfNeeded, taskInvalidate} from '../actions/task_edit';

import TaskEdit from '../components/TaskEdit';

const mapStateToProps = state => ({
    task: state.task_edit.task,
    isFetching: state.task_edit.isFetching,
    err: state.task_edit.err,
});

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
