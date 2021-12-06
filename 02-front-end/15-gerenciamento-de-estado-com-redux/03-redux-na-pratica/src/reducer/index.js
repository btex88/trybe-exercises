import { combineReducers } from 'redux';
import userAuth from './userAuth';
import registeredUsers from './registeredUsers';

const rootReducer = combineReducers({ userAuth, registeredUsers });

export default rootReducer;
