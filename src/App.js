//import logo from './logo.svg';
import './App.css';
//import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="todo-app">
      {/* <h1>Todo List App</h1>
      <TodoForm /> */}
      <TodoList/>
    </div>
  );
}

export default App;
