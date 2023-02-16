import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ToDoList = ({toDoList, onClick}) => {

	if (toDoList?.length === 0) {
		return null;
	} 
	
	const toDoListBuilder = toDoList.map((toDo, index) => {
		return <ToDoItem key={index} toDo={toDo.label} onClick={()=> onClick(toDo.label)} />	
	})

	return <ul>{toDoListBuilder}</ul>;
};

const ToDoItem = ( { toDo, onClick }) => {
	const [visible, setVisible] = useState({visibility: "hidden"});

	return (
		<li 
			onMouseEnter={() => setVisible({visibility: "visible"})}
			onMouseLeave={() => setVisible({visibility: "hidden"})} >
			{toDo} 
			<button 
				type="button" 
				className="custom-button" 
				onClick={()=> onClick(toDo)} 
				style={visible}
				>
				<FontAwesomeIcon className="custom-button" icon={faTrashCan} />
			</button>
		</li>)	
}

export default ToDoList;