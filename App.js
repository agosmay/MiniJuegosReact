import './App.css'; 
import React , { useState } from 'react';
import { Form } from './componentes/Form';
import { TodosList } from './componentes/TodosList';



function App() {  

const [input , setInput] = useState("");
const [todos, setTodos] = useState([]);	

	return (
		<>
			<h1>Mi App</h1>
			
			<Form 
			input = {input}
			setInput={setInput}
			todos={todos}
			setTodos ={setTodos}
			/>
			
			<TodosList
			todos={todos}
			setTodos ={setTodos}
			/>
			
		</>
	);
}

export default App;

