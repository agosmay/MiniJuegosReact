import React , {useState} from 'react';


const MostrarTareasLista  = ( { tarea , borrarTarea , id , work } ) => {
	
	return (
		<>
			<h1>{tarea}</h1>
			<h1>{work}</h1>
			<button onClick={()=>borrarTarea(id)}>Eliminar</button>
		</>
	
	);
	
	
}

export default MostrarTareasLista;