import React, { useState } from "react";
import ToDoList from "./toDoList.jsx";
import NewToDoInput from "./newToDoInput.jsx";

//create your first component
const ToDoPage = () => {
	// useState hook to setup the input as a controlled variable
	const [inputValue, setInputValue] = useState("");
	// setting the list of todo's descriptions
	const [toDoListDescriptions, setToDoListDescriptions] = useState([]);

	const handleClickButton = () => {
		console.log(inputValue)
	}

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			// clean and capitalize first letter
			let cleanInputValue = inputValue.trim().charAt(0).toUpperCase() + inputValue.trim().slice(1);
			// set new toDo element and add it to the list of ToDo's
			const newToDo = {description: cleanInputValue}
			setToDoListDescriptions((prevList) => [...prevList, newToDo]);
			// cleaning the input value and tag
			setInputValue("");
		}
	}

	return (
		<div className="text-center list-item my-2">
			<h1 className="my-5">ToDo List for ToDay</h1>
			<NewToDoInput
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
				onKeyDown={handleKeyDown} 
			/>
			<ToDoList toDoList={toDoListDescriptions} />
			
			<button className="btn btn-primary w-50 m-auto mt-4" onClick={handleClickButton}>Test Consoles</button>
		</div>
	);
};

export default ToDoPage;
