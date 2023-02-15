import React, { useState, useEffect } from "react";
import ToDoList from "./toDoList.jsx";
import NewToDoInput from "./newToDoInput.jsx";

//create your first component
const ToDoPage = () => {
	// useState hook to setup the input as a controlled variable
	const [inputValue, setInputValue] = useState("");
	// setting the list of todo's descriptions
	const [toDoListDescriptions, setToDoListDescriptions] = useState([
		{description: "Cleaning the socks"},
		{description: "Wash the dishes"}
	]);
	// trying the new fetch
	const initList = [{id: 0, label: "lets wash this dishes", done: false}];
	const [list, setList] = useState(initList)

	const apiURL = "https://assets.breatheco.de/apis/fake/todos/user/ZeInacioCB";


	// initialize new list if no list exists
	// should probably use this just once to initialize the API
	// confirm with Edgar, as this throws an error 400 or 500 if using mode: no-cors
	useEffect(() => { 
		fetch(apiURL, {
			//mode: "no-cors",
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify(initList)
		})
		.then(response => {
			//console.log(response);
			if (!response.ok) throw new Error("something went wrong. What is it Edgar?")})
		.catch(err => {
			//console.log(err)
		})
	}, []);
	

	//update itemList state w/ backend data
	useEffect(() => { 
		fetch(apiURL)
		.then(resp => {
			console.log('resp:',resp);
			return resp.json()})
		.then(data => {
			console.log('data:', data);
			const newList = data.map((a, index) => {
				return {...a, id: index}
			});
			console.log('newList:', newList);
			console.log('random array:', [{label: 'try', why: 'try'}])
			setList(newList)})
	}, []);

	const handleClickButton = () => {
		console.log(inputValue)
	}

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			// clean and capitalize first letter
			let cleanInputValue = inputValue.trim().charAt(0).toUpperCase() + inputValue.trim().slice(1);
			// set new toDo element and add it to the list of ToDo's
			const newToDo = {description: cleanInputValue}
			setToDoListDescriptions((prevList) => [newToDo, ...prevList]);
			// cleaning the input value and tag
			setInputValue("");
		}
	}

	const handleClickRemove = (e) => {
		const removedItem = e;
		console.log(removedItem);
		const newToDoList = toDoListDescriptions.filter((item) => item.description !== removedItem);
    	setToDoListDescriptions(newToDoList);
	}

	return (
		<div className="text-center list-item my-2">
			<h1 className="my-5">ToDo List for ToDay</h1>
			<NewToDoInput
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
				onKeyDown={handleKeyDown} 
			/>
			<ToDoList toDoList={toDoListDescriptions} onClick={handleClickRemove} />
			<p className="mt-4 text-start">You have {toDoListDescriptions.length} more task to do</p>
			<button className="btn btn-primary w-50 m-auto mt-4" onClick={handleClickButton}>Test Consoles</button>
		</div>
	);
};

export default ToDoPage;
