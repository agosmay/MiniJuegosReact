import React , { useState } from 'react';

const MostrarSingle = ( { id, tarea , borrar } ) => {
	
	
	
	return (
		<>
		
			<h1> {tarea} </h1>
			<button type="button" onClick={()=> borrar(id)}>Borrar</button>
		
		</>
	);
	
	
}

export default MostrarSingle;