import { legacy_createStore as createStore } from "redux";
import todoReducer from "../Reducers/todoReducer";




export default createStore(todoReducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())