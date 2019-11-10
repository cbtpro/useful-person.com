import { combineReducers } from 'redux';
import config from './config';
import tasks from './tasks';
import visiblityFilter from './visibilityFilter';

const userfulPersionApp = combineReducers({ config, tasks, visiblityFilter })

export default userfulPersionApp;
