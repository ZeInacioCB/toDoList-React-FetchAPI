import React, { useState } from "react";
import ToDoList from "./toDoList.jsx";

//create your first component
const ToDoPage = () => {
	const [inputValue, setInputValue] = useState("");
	const [toDoListDescriptions, setToDoListDescriptions] = useState([
		{description: "Wake up in the morning"},
		{description: "Make the world a better place"},
		{description: "Prepare the marketing file"},
		{description: "Get a way to be in the friday video call"}
	]);

	const handleClickButton = () => {
		console.log(inputValue)
	}

	const handleKeyDown = (e) => {
		if (e.keyCode == 13) {
			console.log(inputValue);
			const newToDo = {
				description: inputValue
			}
			console.log(newToDo);
			setToDoListDescriptions((prevList) => [
				...prevList,
				newToDo
			]);
		}
	}

	return (
		<div className="text-center list-group my-2">
			<h1 className="my-5">ToDo List for ToDay</h1>
			<input 
				className="text-center my-2"
				type="text"
				placeholder="What do you have to do today?"
				onChange={e => setInputValue(e.target.value)}
				value={inputValue}
				onKeyDown={handleKeyDown}
			/>
			<ToDoList toDoList={toDoListDescriptions} />
			
			<button className="btn btn-primary w-50 m-auto mt-4" onClick={handleClickButton}>Test Consoles</button>
		</div>
	);
};

export default ToDoPage;
