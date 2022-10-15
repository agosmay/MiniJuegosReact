import React , { useState } from 'react';
import MostrarTareasLista from './MostrarTareasLista'

export const AppTareas = () =>  {
	const [input, setInput]= useState("")
	const [listadoTareas, setListadoTareas] = useState([])
	
	
	const handleChange= (e)=> {
		const { name, value } = e.target
		setInput({
			...input,
			[name] : value,
		})
		console.log(name, value)
	}
	
	
	
	const handleSubmit =(e)=> {
		e.preventDefault();
		if(input==="") {
			alert('Ingrese una tarea')
			return;
		}
		
		const nuevaTarea = {
			id: Date.now(),
			tarea : input.tarea,
			work: input.work,
			completed: false
		}
		
		setListadoTareas([nuevaTarea, ...listadoTareas])
		
		setInput("")
		
	}
	
	const borrarTarea  = (id) => {
		setListadoTareas(listadoTareas.filter((i)=> (
			i.id!==id
		
		)))
		
	}
	
	
	
	return (
	
		<>
			<form onSubmit={handleSubmit}>
				<input type="text" name="tarea" onChange={handleChange} value={input.tarea} />
				<input type="text" name="work" onChange={handleChange} value={input.work} />
				<button type="submit"> ADD</button>
			</form>
			<div>
			{
				listadoTareas.map((i)=> (
				
							<MostrarTareasLista 
								key={i.id}
								id={i.id}
								tarea={i.tarea}
								work={i.work}
								borrarTarea ={borrarTarea}
								
								/>
					
			
				))
			}
			</div>
			
		</>
	
	);
	
	
	
	
}