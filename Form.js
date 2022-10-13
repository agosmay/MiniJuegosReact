import React, {useState} from 'react';

export const Form = ( { input , setInput , todos, setTodos } ) => {
	

	
	const handleChange = (e) => {
		setInput(e.target.value)
	}
	
	const handleSubmit = (e) => {
		e.preventDefault();
		setTodos([...todos, {
			id: Date.now(),
			title: input,
			completed: false
		}])
		localStorage.setItem("tarea", input)
		setInput("")
	}
	
	return (
		<>
			<form onSubmit={handleSubmit}>
				<input type="text" name="title" placeholder="Enter a todo..." value={input} required onChange={handleChange}/>
				<button type="submit">Add</button>
			</form>
		</>
	
	);
}