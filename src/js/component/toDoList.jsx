import React, { useState } from "react";

const ToDoList = (props) => {
	const [toDosList, setToDosList] = useState([
		{description: "Wake up in the morning"},
		{description: "Make the world a better place"},
		{description: "Prepare the marketing file"},
		{description: "Get a way to be in the friday video call"}
	])

	const toDoListBuilder = toDosList.map((toDo, index) => {
		return <li key={index}>{toDo.description}</li>
	})

	return <ul>{toDoListBuilder}</ul>;
};

export default ToDoList;