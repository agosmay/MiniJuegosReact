import React , {useState} from 'react';
import Item from './Item'

const PracticaForm = () => {
	const [input, setInput] = useState({
		id:"",
		tarea:"",
		fecha:""
		
	})
	const [lista, setLista] = useState([])
	
	const handleChange= (e) => {
		const { name, value }=  e.target
		setInput({
			...input,
			[name] : value
			})	
	}
	
	const handleSubmit = (e) => {
		e.preventDefault();
		const nuevaTarea  = {
			id: Date.now(),
			tarea: input.tarea,
			fecha : input.fecha 
		};
		setLista([nuevaTarea, ...lista]);
		
		setInput({
			tarea: "",
			fecha : ""
			
		});
		
	}
	
	
	const borrarTarea = (id) => {
		setLista(lista.filter((i)=> (
			i.id!==id
		)))
		
	}
	
	
		
	
	return (
	
		<>
			<form onSubmit={handleSubmit}>
				<input type="text" name="tarea" onChange={handleChange} value={input.tarea}  />
				<input type="date" name="fecha" onChange={handleChange} value={input.fecha}  />
				<button type="submit">Enviar</button>
			</form>
			<div>
			{
				lista.map((item)=> (
					<Item 
						key={item.id}
						id={item.id}
						tarea={item.tarea}
						fecha={item.fecha}
						borrarTarea={borrarTarea}
						
					/>
				
				))
			}
			</div>
		</>
	
	
	);
	
}

export default PracticaForm;