import fetch from 'cross-fetch';
import axios from 'axios';

const URL_PREFIX = 'http://localhost:8000/api/tasks/';

export const Task = {
    ADD: 'TASK_ADD',
    SUBMIT: 'TASK_SUBMIT',
    COMPLETED_TOGGLE: 'TASK_COMPLETED_TOGGLE',
};

export const Tasks = {
    INVALIDATE: 'TASKS_INVALIDATE',
    REQUEST: 'TASKS_REQUEST',
    RECEIVE: 'TASKS_RECEIVE',
};

function taskAdd(task) {
    return {
        type: Task.ADD,
        task: task,
    };
}

function taskSubmit() {
    return {
        type: Task.SUBMIT,
    }
}

export function taskSave(task) {
    return dispatch => {
        return axios.post(URL_PREFIX, task)
            .then(response => {
                return response.data
            })
            .then(data => dispatch(taskAdd(data)));
    }
}

function taskCompletedToggle(task) {
    return {
        type: Task.COMPLETED_TOGGLE,
        task: task,
    }
}

export function taskCompletedUpdate(task) {
    return dispatch => {
        return axios.patch(URL_PREFIX + task.id, task)
            .then(response => response.data)
            .then(data => dispatch(taskCompletedToggle(data)));
    }
}

export function tasksInvalidate() {
    return {
        type: Tasks.INVALIDATE,
        tasks: []
    }
}


function tasksRequest() {
    return {
        type: Tasks.REQUEST,
    };
}

function tasksReceive(json) {
    return {
        type: Tasks.RECEIVE,
        tasks: json,
        receivedAt: Date.now(),
    }
}

function fetchTasks() {
    return dispatch => {
        dispatch(tasksRequest);
        return axios.get(URL_PREFIX)
            .then(response => response.data)
            .then(json => dispatch(tasksReceive(json)));
    }
}

function shouldFetchTasks(state) {
    const tasks = state.tasks;
    if (!tasks) {
        return true;
    } else if (state.isFetching) {
        return false;
    } else {
        return state.didInvalidate;
    }
}

export function fetchTasksIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchTasks(getState())) {
            return dispatch(fetchTasks())
        }
    }
}