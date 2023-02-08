import React from "react";

//create your first component
const ToDoPage = () => {


	return (
		<div className="text-center list-group">
			<h1>ToDo List for ToDay</h1>
			<ul>
				<li>
					<input 
						type="text"
						 />
				</li>
				<li>Wake up in the morning</li>
				<li>Make the world a better place</li>
				<li>Prepare the marketing file</li>
				<li>Get a way to be in the friday video call</li>
			</ul>
		</div>
	);
};

export default ToDoPage;
