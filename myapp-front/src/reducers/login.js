/**
 * reducers login
 */
import {ADD_USER, FIND_STORIES, SEND_MAIL} from "../actions/actions";

export default function login(state={},action) {
    switch (action.type){
        case ADD_USER:
            return Object.assign({},state,{user:action.user});
        case FIND_STORIES:
            return Object.assign({},state,{stories:action.stories});
        case SEND_MAIL:
            return state;
        default:
            return state;
    }
}


