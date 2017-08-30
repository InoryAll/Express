/**
 *action
 */
import 'isomorphic-fetch';

// login
export const ADD_USER='ADD_USER';
export const addUser=(user)=>{
    return {
        type:ADD_USER,
        user
    };
};
export const insertNewUser=(user) => {
    return (dispatch,getState) => {
        fetch('http://localhost:8080/api/addUser',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        }).then((response) => {
            console.log(response);
            if (response.ok){
                return response.json();
            }
        }).then((data) => {
            console.log(data);
            dispatch(addUser(user));
        }).catch((e)=>{
            console.log(e.message);
        });
    };
};

// main
export const GET_ALL_USER='GET_ALL_USER';
export const getAllUser=(users) => {
    return {
        type:GET_ALL_USER,
        users
    };
};
export const getAllUsers=()=>{
    return (dispatch,getState)=>{
        fetch('http://localhost:8080/api/getAll',{
            method:'POST'
        }).then((response) => {
            if (response.ok){
                return response.json();
            }
        }).then((data)=>{
            dispatch(getAllUser(data));
        }).catch((e) => {
            console.log(e.message);
        });
    };
};





