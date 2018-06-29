import { Task, Tasks } from "./actions";

const initialStates = {
    tasks: [],
    isFetching: false,
    didInvalidate: false,
};

function tasks(state = initialStates, action) {
    switch (action.type) {
        case Tasks.INVALIDATE:
            return Object.assign({}, state, {didInvalidate: true});
        case Tasks.REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false,
            });
        case Tasks.RECEIVE:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                tasks: action.tasks,
                lastUpdated: action.receivedAt,
            });
        case Task.COMPLETED_TOGGLE: {
            const task = action.task;
            return Object.assign({}, state, {
                tasks: state.tasks.map((_task) => (_task.id === task.id) ? task : _task),
            });
        }
        case Task.ADD: {
            const task = action.task;
            return Object.assign({}, state, {
                tasks: [...state.tasks, task],
            });
        }
        case Task.SUBMIT:
            return state;
        default:
            return state;
    }
}

export default tasks;