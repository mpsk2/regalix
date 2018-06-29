import fetch from 'cross-fetch';

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
        return fetch(URL_PREFIX, {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                console.log(response.status);
                if (response.status != 201) {
                    throw new Error(response.json());
                }
                return response.json()
            })
            .then(json => dispatch(taskAdd(json)));
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
        return fetch(URL_PREFIX + task.id, {
            method: 'PATCH',
            body: JSON.stringify(task),

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(json => dispatch(taskCompletedToggle(json)));
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
        return fetch(URL_PREFIX)
            .then(response => response.json())
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