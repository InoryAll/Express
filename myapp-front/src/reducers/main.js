/**
 *reducers main
 */
import {GET_ALL_USER} from "../actions/actions";

export default function main(state={},action) {
    switch (action.type){
        case GET_ALL_USER:
            return Object.assign({},state,{users:action.users});
        default:
            return state;
    }
}
