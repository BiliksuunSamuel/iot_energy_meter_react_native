import {combineReducers} from '@reduxjs/toolkit';
import {ResponseReducer, UserReducer} from '../features/slice';

export default combineReducers({
  ResponseReducer,
  UserReducer,
});
