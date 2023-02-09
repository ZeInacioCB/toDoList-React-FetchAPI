import React, { useState } from "react";
import ToDoList from "./toDoList.jsx";

//create your first component
const ToDoPage = () => {
	const [inputValue, setInputValue] = useState("");

	const handleClickButton = () => {
		console.log(inputValue)
	}

	return (
		<div className="text-center list-group">
			<h1>ToDo List for ToDay</h1>
			<input 
				type="text"
				onChange={(e) => setInputValue(e.target.value)}
				value={inputValue}
				placeholder="What do you have to do today?"
				className="text-center"
			/>
			<ToDoList />
			
			<button className="btn btn-primary w-50 m-auto" onClick={handleClickButton}>Test Consoles</button>
		</div>
	);
};

export default ToDoPage;
