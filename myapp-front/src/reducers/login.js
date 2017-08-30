/**
 * reducers login
 */
import {ADD_USER} from "../actions/actions";

export default function login(state={},action) {
    switch (action.type){
        case ADD_USER:
            return Object.assign({},state,{user:action.user});
        default:
            return state;
    }
}


