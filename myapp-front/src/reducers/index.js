import {combineReducers} from 'redux';
import login from './login';
import main from './main';

export const rooterReducer=combineReducers({
    login,
    main
});