import { combineReducers } from '@reduxjs/toolkit';
import taskReducer from './taskReducers';

const rootReducer = combineReducers({
  tasks: taskReducer,
});

export default rootReducer;
