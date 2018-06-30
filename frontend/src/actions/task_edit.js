import axios from "axios/index";

const URL_PREFIX = 'http://localhost:8000/api/tasks/';

export const TaskEdit = {
    INVALIDATE: 'TASK_EDIT_INVALIDATE',
    REQUEST: 'TASK_EDIT_REQUEST',
    RECEIVE: 'TASK_EDIT_RECEIVE',
};


export function taskInvalidate() {
    return {
        type: TaskEdit.INVALIDATE,
        tasks: []
    }
}

function taskRequest(id) {
    return {
        type: TaskEdit.REQUEST,
        id,
    };
}

function taskReceive(task) {
    return {
        type: TaskEdit.RECEIVE,
        task: task,
        receivedAt: Date.now(),
    }
}

function fetchTask(id) {
    return dispatch => {
        dispatch(taskRequest);
        return axios.get(URL_PREFIX + id)
            .then(response => response.data)
            .then(task => dispatch(taskReceive(task)));
    }
}

function shouldFetchTask(state, id) {
    const task = state.task;
    if (!task) {
        return true;
    } else if (task.id !== id) {
        return true;
    } else if (state.isFetching) {
        return false;
    } else {
        return state.didInvalidate;
    }
}

export function fetchTaskIfNeeded(id) {
    return (dispatch, getState) => {
        if (shouldFetchTask(getState(), id)) {
            return dispatch(fetchTask(id))
        }
    };
}