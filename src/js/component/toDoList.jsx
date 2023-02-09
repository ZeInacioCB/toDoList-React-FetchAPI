import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ToDoList = ({toDoList, onClick}) => {

	if (toDoList?.length === 0) {
		return null;
	} 
	
	const toDoListBuilder = toDoList.map((toDo, index) => {
		return (
			<li key={index}>
				{toDo.description} 
				<button onClick={onClick} className="custom-button"><FontAwesomeIcon icon={faTrash} /></button> 
			</li>)
	})

	return <ul>{toDoListBuilder}</ul>;
	
	
};

export default ToDoList;