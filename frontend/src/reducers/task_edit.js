import {TaskEdit} from '../actions/task_edit';

const initialState = {
    task: {
        id: -1,
        name: "nothing",
        completed: false,
    },
    isFetching: false,
    didInvalidate: false,
    err: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TaskEdit.INVALIDATE:
            return Object.assign({}, state, {
                didInvalidate: true,
                err: false,
            });
        case TaskEdit.REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false,
                err: false,
            });
        case TaskEdit.RECEIVE:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                task: action.task,
                lastUpdated: action.receivedAt,
                err: false,
            });
        case TaskEdit.FAILURE:
            console.log(action.err);
            console.log(action.err.toString());
            return Object.assign({}, state, {
                err: true,
            });
        default:
            return state;
    }
}