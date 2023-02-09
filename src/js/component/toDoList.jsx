import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ToDoList = ({toDoList}) => {

	if (toDoList?.length === 0) {
		return null;
	} 
	
	const toDoListBuilder = toDoList.map((toDo, index) => {
		return <li key={index}>{toDo.description} <FontAwesomeIcon icon={faTrash} /></li>
	})

	return <ul>{toDoListBuilder}</ul>;
	
	
};

export default ToDoList;