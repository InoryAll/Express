/**
 *action
 */
import 'isomorphic-fetch';
import {Modal} from 'antd';

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

export const FIND_STORIES='FIND_STORIES';
export const findStories=(stories)=> {
    return {
        type:FIND_STORIES,
        stories
    };
};
export const getAllStories=() => {
    return (dispatch,getState)=>{
        fetch('http://localhost:8080/api/getStories',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            }
        }).then((response)=>{
            if (response.ok){
                return response.json();
            }
        }).then((data) => {
            console.log(data);
            dispatch(findStories(data));
        }).catch((e)=>{
            console.log(e.message);
        });
    };
};

export const SEND_MAIL='SEND_MAIL';
export const sendMail=()=>{
    return {
        type:SEND_MAIL
    };
};
export const doSendMail=() => {
    return (dispatch,getState)=>{
        fetch('http://localhost:8080/api/sendMail',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            }
        }).then((response) => {
            if (response.ok){
                return response.json();
            }
        }).then((data) => {
            console.log(data);
            dispatch(sendMail());
            Modal.success({
                title:'成功',
                content:'发送邮件成功!'
            });
        }).catch((e) => {
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

export const UPDATE_USERINFO='UPDATE_USERINFO';
export const updateUserInfo=(user)=>{
    return {
        type:UPDATE_USERINFO,
        user
    };
};
export const updateUser=(user)=>{
    return (dispatch,getState)=>{
        fetch('http://localhost:8080/api/updateUser',{
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                "Content-Type":"application/json"
            }
        }).then((response) => {
            if (response.ok){
                return response.json();
            }
        }).then((data)=>{
            console.log(data);
            if (data.code==='1'){
                const modal=Modal.success({
                    title:'成功',
                    content:'更新成功!'
                });
                setTimeout(function () {
                    modal.destroy();
                },1000);
                dispatch(updateUserInfo(user));
                dispatch(getAllUsers());
            }
            else{
                Modal.success({
                    title:'失败',
                    content:'更新失败，请重试!'
                });
            }
        }).catch((e)=>{
            console.log(e.message);
        });
    };
};

export const DELETE_USERINFO='DELETE_USERINFO';
export const deleteUserInfo=()=>{
    return {
        type:DELETE_USERINFO
    };
};
export const deleteUser=(user)=>{
    return (dispatch,getState)=>{
        fetch('http://localhost:8080/api/deleteUser',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        }).then((response) => {
            if (response.ok){
                return response.json();
            }
        }).then((data) => {
            console.log(data);
            if (data.code==='1'){
                const modal=Modal.success({
                    title:'成功',
                    content:'更新成功!'
                });
                setTimeout(function () {
                    modal.destroy();
                },1000);
                dispatch(deleteUserInfo());
                dispatch(getAllUsers());
            }
            else{
                Modal.success({
                    title:'失败',
                    content:'更新失败，请重试!'
                });
            }
        }).catch((e) => {
            console.log(e.message);
        });
    };
};





