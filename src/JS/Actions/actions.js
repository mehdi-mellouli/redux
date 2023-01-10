import {ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK} from '../Constants/action-types'


 export const addTodo = newTodo =>{
    return {
        type : ADD_TASK,
        payload : {...newTodo, id : Date.now() , isDone : false}
    }
 }
 export const deleteTodo = id => {
    return {
        type : DELETE_TASK,
        payload: id
    }
 }
 export const toggleTodo = id => {
    return {
        type : TOGGLE_TASK,
        payload : id
    }
 }
 export const editTodo = (todo) => {
    return {
        type : EDIT_TASK , 
        payload : todo
    }
 }