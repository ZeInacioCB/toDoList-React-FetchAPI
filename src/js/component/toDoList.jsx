import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ToDoList = ({toDoList, onClick, name}) => {

	if (toDoList?.length === 0) {
		return null;
	} 
	
	const toDoListBuilder = toDoList.map((toDo, index) => {
		return (
			<li key={index}>
				{toDo.description} 
				<button type="button" className="custom-button" onClick={onClick} value={toDo.description} >
					X
				</button>
			</li>)
	})

	return <ul>{toDoListBuilder}</ul>;
	
	
};

export default ToDoList;

// Asking Edgar why this doesn't work with the FontAwesome inside button.. we can't access the value
// to insert in the button element
// <FontAwesomeIcon className="custom-button" icon={faTrashCan} />