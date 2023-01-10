import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK } from "../Constants/action-types"



const initState = {
    todos: [
        // {
        //     description: 'first todo',
        //     id: 1,
        //     isDone: false
        // },
        // {
        //     description: 'second todo',
        //     id: 2,
        //     isDone: false
        // }
    ]
}
const todoReducer = (state = initState , {type , payload} ) =>{
switch (type) {
    case ADD_TASK:
        return{
            ...state , 
            todos : [...state.todos ,payload ]
        }

    case DELETE_TASK:
        return {
            ...state ,
            todos : state.todos.filter(elm => elm.id !== payload)
        }  
    case TOGGLE_TASK:
        return {
            ...state ,
            todos : state.todos.map(elm => elm.id === payload ? {...elm , isDone: !elm.isDone}: elm)
        }  
    case EDIT_TASK :
        return {
            ...state , 
            todos : state.todos.map(elm => elm.id === payload.id ? payload : elm)
        }        
        
        

    default:
        return state
}

    
}


export default todoReducer