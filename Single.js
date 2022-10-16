import React, {useState} from 'react';
import MostrarSingle from './MostrarSingle'


export const Single = () => {
	const [input, setInput] = useState("")
	const [lista, setLista] = useState([])
	
	const handleChange = (e) => {
		setInput(e.target.value)
	}
	
	const handleSubmit  = (e) => {
		e.preventDefault();
		if(input==="") {
			alert('Ingrese una tarea')
			return;
		}
		
		const nuevaTarea = {
			id: Date.now(),
			tarea: input
		}
		
		setLista([nuevaTarea, ...lista])
		setInput("") 
		
	}
	
	
	return (
		<>
			<h1>Este es single</h1>
			<form onSubmit={handleSubmit}>
				<input type="text" name="tarea" onChange={handleChange} value={input} />
				<button type="submit">ADD</button>
			</form>
			<div>
			{
				lista.map((i)=> (
					<li key={i.id}>{i.tarea}</li>
				
				))
			}
			</div>
		</>
	
	
	);
	
	
}