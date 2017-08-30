/**
 *reducers main
 */
import {GET_ALL_USER, UPDATE_USERINFO} from "../actions/actions";

export default function main(state={},action) {
    switch (action.type){
        case GET_ALL_USER:
            return Object.assign({},state,{users:action.users});
        case UPDATE_USERINFO:
            return Object.assign({},state,{user:action.user});
        default:
            return state;
    }
}
