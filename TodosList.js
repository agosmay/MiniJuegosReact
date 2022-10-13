import React, {useState} from 'react';

export const TodosList = ( { todos, setTodos } ) => {
	
	const handleDelete = ({id}) => {
		
		setTodos(todos.filter((todo) => todo.id !== id))
	}
	
	return (
		<>
			<div>
			{todos.map((todo)=> (
					
				<li key={todo.id} >{todo.title}
				<button onClick={()=> handleDelete(todo)}>X</button>
				</li>
				
				)
			)}
			</div>
		</>
	
	);
}