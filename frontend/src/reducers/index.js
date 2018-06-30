import {combineReducers} from "redux"
import tasks from './tasks';
import task_edit from './task_edit';

export default combineReducers({tasks, task_edit});