import axios from 'axios';
import { URL_PREFIX } from './common';

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
    task,
  };
}

function taskCompletedToggle(task) {
  return {
    type: Task.COMPLETED_TOGGLE,
    task,
  };
}

export function tasksInvalidate() {
  return {
    type: Tasks.INVALIDATE,
    tasks: [],
  };
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
  };
}

export function taskSave(task) {
  return dispatch => axios.post(URL_PREFIX, task)
    .then(response => response.data)
    .then(data => dispatch(taskAdd(data)));
}

export function taskUpdate(task) {
  return dispatch => axios.put(URL_PREFIX + task.id, task)
    .then(response => response.data)
    .then(data => dispatch(taskCompletedToggle(data)));
}

export function taskCompletedUpdate(task) {
  return dispatch => axios.patch(URL_PREFIX + task.id, task)
    .then(response => response.data)
    .then(data => dispatch(taskCompletedToggle(data)));
}

function fetchTasks() {
  return (dispatch) => {
    dispatch(tasksRequest);
    return axios.get(URL_PREFIX)
      .then(response => response.data)
      .then(json => dispatch(tasksReceive(json)));
  };
}

function shouldFetchTasks(state) {
  const { tasks } = state;
  if (!tasks) {
    return true;
  }
  if (state.isFetching) {
    return false;
  }
  return state.didInvalidate;
}

export function fetchTasksIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchTasks(getState().tasks)) {
      dispatch(fetchTasks());
    }
  };
}
