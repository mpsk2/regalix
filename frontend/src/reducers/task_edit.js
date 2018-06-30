import {TaskEdit} from '../actions/task_edit';

const initialState = {
    task: {
        id: -1,
        name: "nothing",
        completed: false,
    },
    isFetching: false,
    didInvalidate: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TaskEdit.INVALIDATE:
            return Object.assign({}, state, {didInvalidate: true});
        case TaskEdit.REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false,
            });
        case TaskEdit.RECEIVE:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                task: action.task,
                lastUpdated: action.receivedAt,
            });
        default:
            return state;
    }
}