import React from "react";

const ToDoList = ({toDoList}) => {

	if (toDoList?.length === 0) {
		return null;
	} 
	
	const toDoListBuilder = toDoList.map((toDo, index) => {
		return <li key={index}>{toDo.description}</li>
	})

	return <ul>{toDoListBuilder}</ul>;
	
	
};

export default ToDoList;