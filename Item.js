import React , {useState} from 'react';

const Item = ( { tarea, fecha, id, borrarTarea } ) => {
	return (
		<>
			<h1>{`La tarea es: ${tarea} y su fecha es : ${fecha}`}</h1>
			<button type="button" onClick={()=> borrarTarea(id)} >Eliminar</button>
		</>
	
	);
	
	
	
}

export default Item;