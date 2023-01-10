import { useSelector } from 'react-redux';
import './App.css';
import ListTask from './components/ListTask';
import AddTask from './components/AddTask'


function App() {
  const allTodos = useSelector(state => state.todos)
console.log(allTodos)
  return (
    <div className="App" id='app' >
       <AddTask id='add' />
       <ListTask id='all'  allTodos={allTodos} />
    
    </div>
  );
}

export default App;
